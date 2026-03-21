---
model: sonnet
---

# Worktree Management Command

Create, list, and manage git worktrees for parallel feature development with per-worktree Nuxt web containers.

## Usage

```
/worktree create BRANCH-NAME       # Create worktree + start web container
/worktree list                      # List all worktrees + running containers
/worktree remove BRANCH-NAME        # Stop web container + remove worktree
/worktree BRANCH-NAME               # Shorthand for create
```

## Task

You are tasked with managing git worktrees for parallel feature development. Each worktree automatically gets its own Nuxt web container accessible at a unique URL with shared auth.

### Auto-Detection

**First, detect the git repository:**
1. Run `git rev-parse --show-toplevel` to find repository root
2. Set `REPO_ROOT` to the returned path
3. Set `WORKTREE_DIR` to `${REPO_ROOT}/worktrees`
4. Detect base branch (usually `develop`, `main`, or `master`) by checking what exists

### Operation: Create Worktree

**When user provides a branch name (with or without "create"):**

**Steps:**
1. **Auto-detect repository root** using `git rev-parse --show-toplevel`
2. **Validate branch name** - should follow project conventions (must match `WT_ISSUE_PATTERN` from `.worktree.conf`)
3. **Check if worktree already exists**
   ```bash
   git worktree list | grep "${BRANCH_NAME}"
   ```
4. **Detect base branch**
   ```bash
   git branch -a | grep -E "origin/(develop|main|master)" | head -1
   ```
5. **Create worktree**
   ```bash
   cd "${REPO_ROOT}"
   git worktree add -b "${BRANCH_NAME}" ./worktrees/"${BRANCH_NAME}" "${BASE_BRANCH}"
   ```
6. **Verify creation**
   - Show full path to new worktree
   - List all worktrees with `git worktree list`
7. **Check main stack is running** before starting web container (read `WT_NETWORK` from `.worktree.conf`):
   ```bash
   WT_NETWORK=$(grep '^WT_NETWORK=' .worktree.conf | cut -d'"' -f2)
   docker network inspect "${WT_NETWORK}" >/dev/null 2>&1
   ```
   - If not running: warn user to run `dsdev up` first, skip web container start
8. **Start web container automatically:**
   ```bash
   ${REPO_ROOT}/.worktree/scripts/worktree-web.sh start ${BRANCH_NAME}
   ```
   The script reads `.worktree.conf` and derives the port from the issue number (WT_PORT_BASE + number). It starts:
   - A Nuxt dev server container with hot reload
   - A TLS proxy (nginx) on the derived port
   First startup is slower due to `pnpm install` in the container.

**Output:**
```
Created worktree at ${REPO_ROOT}/worktrees/${BRANCH_NAME}
  Branch: ${BRANCH_NAME} (from ${BASE_BRANCH})

All worktrees:
${git worktree list output}

Web container started: <slug>-web
  URL:  https://<domain>:<port>
  Logs: dsdev wt-web-logs ${BRANCH_NAME}

Next steps:
  cd worktrees/${BRANCH_NAME}
  # Edit code - changes auto-reload at the URL above
  # Auth: login at https://<domain> first, cookies are shared to :<port>

Management:
  dsdev wt-web-logs ${BRANCH_NAME}    # View logs
  dsdev wt-web-bash ${BRANCH_NAME}    # Shell into container
  dsdev wt-web-stop ${BRANCH_NAME}    # Stop container
  dsdev wt-web ${BRANCH_NAME}         # Restart container
  dsdev wt-web-list                    # List all running containers
```

### Operation: List Worktrees

**When user runs `/worktree list`:**

**Steps:**
1. **Auto-detect repository root**
2. **List all worktrees** with enhanced information:
   ```bash
   git worktree list
   ```
3. **For each worktree, show:**
   - Path (relative to repo root if possible)
   - Current branch
   - Last commit (short hash + message)
   - Status (clean / X modified files)
4. **Show running web containers:**
   ```bash
   ${REPO_ROOT}/.worktree/scripts/worktree-web.sh list
   ```

**Output format:**
```
Git Worktrees
=============

Main: ${REPO_ROOT}
  Branch: ${current_branch}
  Commit: ${hash} ${message}
  Status: ${status}

Feature Worktrees:
------------------
${WORKTREE_DIR}/${name1}
  Branch: ${branch1}
  Commit: ${hash1} ${message1}
  Status: ${status1}
  Web: https://<domain>:<port> (running/stopped)

Total: X worktrees

Running Web Containers:
-----------------------
${docker ps output}
```

### Operation: Remove Worktree

**When user runs `/worktree remove BRANCH-NAME`:**

**Steps:**
1. **Auto-detect repository root**
2. **Find worktree path**
   ```bash
   git worktree list | grep "${BRANCH_NAME}"
   ```
3. **Stop web container if running** - use the worktree-web script (reads pattern from `.worktree.conf`):
   ```bash
   ${REPO_ROOT}/.worktree/scripts/worktree-web.sh stop ${BRANCH_NAME}
   ```
   If the container isn't running, the script handles it gracefully.
4. **Safety checks:**
   - Navigate to worktree directory
   - Run `git status` to check for changes
   - If uncommitted changes exist, warn and ask for confirmation
5. **Remove worktree**
   ```bash
   cd "${REPO_ROOT}"
   git worktree remove "./worktrees/${BRANCH_NAME}"
   ```
   If fails due to modifications, offer force option:
   ```bash
   git worktree remove --force "./worktrees/${BRANCH_NAME}"
   ```
6. **Optional branch cleanup**
   - Ask if user wants to delete the feature branch
   - Check if merged: `git branch --merged ${BASE_BRANCH} | grep "${BRANCH_NAME}"`
   - Delete: `git branch -d "${BRANCH_NAME}"` or `-D` for force
7. **Verify removal**
   - List remaining worktrees

**Output:**
```
Stopped web container: <slug>-web

Worktree has X uncommitted changes
  Continue with removal? (yes/no)

Removed worktree: ${WORKTREE_PATH}
? Delete branch ${BRANCH_NAME}? (yes/no)
Deleted branch ${BRANCH_NAME}

Remaining worktrees: X
```

## Error Handling

- **Not in git repository:** Navigate to project root or report error
- **Worktree already exists:** Show existing worktree info and ask if user wants to switch to it
- **Worktree locked:** Provide unlock instructions
- **Branch doesn't exist:** List available branches
- **Uncommitted changes:** Always warn and ask for confirmation
- **Main stack not running:** Warn user to run `dsdev up` first, skip web container start but complete worktree creation

## Web Container Architecture

Each worktree web container:
- Runs its own Nuxt dev server with hot reload
- Gets a TLS proxy on a unique port: `https://<domain>:PORT` (port = WT_PORT_BASE + issue number)
- Shares API/DB/Admin from the main stack (containers connect to the configured `WT_NETWORK`)

**Prerequisites:** Main stack must be running (`dsdev up`) before starting worktree web containers.

**Auth flow:**
1. Login at `https://<domain>` (main app on :443)
2. Cookies are set on hostname `<domain>`
3. Browser sends cookies to `https://<domain>:<port>` (same hostname, per RFC 6265)
4. Auth works automatically - no OIDC config changes needed

**Management commands:**
- `dsdev wt-web BRANCH` - Start web container
- `dsdev wt-web-stop BRANCH` - Stop web container
- `dsdev wt-web-logs BRANCH` - View logs
- `dsdev wt-web-bash BRANCH` - Shell into container
- `dsdev wt-web-list` - List running worktree web containers

## Important Notes

- Command automatically detects repository root - works from anywhere in the repo
- Default worktree location: `${REPO_ROOT}/worktrees/`
- Each worktree shares the same `.git` directory but has isolated working files
- First container start is slower due to `pnpm install` running in the container
- Branch name MUST match the `WT_ISSUE_PATTERN` from `.worktree.conf` for port and slug derivation
- Web container can be restarted independently: `dsdev wt-web-stop BRANCH && dsdev wt-web BRANCH`

## Examples

```bash
# Create new worktree (auto-starts web container)
/worktree ISSUE-130-user-dashboard
# -> worktree created + web at https://<domain>:10130

# List all worktrees and their web containers
/worktree list

# Remove worktree (auto-stops web container)
/worktree remove ISSUE-130-user-dashboard
```
