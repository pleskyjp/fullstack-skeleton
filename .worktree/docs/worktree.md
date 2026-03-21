# Git Worktree Workflow

Git worktrees for parallel feature development with per-worktree Nuxt web containers.

## Quick Start

```bash
# 1. Main stack must be running
dsdev up

# 2. Create worktree (auto-starts web container)
/worktree ISSUE-XXX-feature-name
# -> worktree created at worktrees/ISSUE-XXX-feature-name
# -> web container at https://<domain>:<port>

# 3. Edit code in worktree - changes auto-reload
cd worktrees/ISSUE-XXX-feature-name

# 4. When done
/worktree remove ISSUE-XXX-feature-name
```

## Configuration

Worktree web containers are configured via `.worktree.conf` in the project root. This file is sourced by `.worktree/scripts/worktree-web.sh` at startup.

```bash
# .worktree.conf — example values
WT_PROJECT_NAME="myapp"              # Compose project prefix
WT_DOMAIN="myapp.localhost"          # TLS proxy domain + URLs
WT_ISSUE_PATTERN="ISSUE-[0-9]+"     # Branch name regex for slug/port
WT_PORT_BASE=10000                   # Port = base + issue number
WT_WEB_SUBDIR="web"                 # Nuxt app subdir within worktree
WT_NETWORK="myapp_default"           # Main stack Docker network

# Optional (defaults)
# WT_NUXT_PORT=3000                  # Nuxt dev server port
# WT_CERTS_DIR="${HOME}/.config/dev-proxy/certs"
```

For a new project, run `bash .worktree/init.sh` to set up project files. Customize `docker-compose.worktree-web.yml` (volumes, environment) for project-specific needs.

## Directory Structure

```
project-root/                          # Main worktree (develop branch)
├── .worktree/                         # Worktree module (self-contained)
│   ├── scripts/worktree-web.sh        # Web container management script
│   ├── docker/
│   │   ├── docker-compose.base.yml    # Generic compose (web + tls-proxy)
│   │   └── nginx.conf.template        # Nginx TLS proxy config
│   ├── commands/worktree.md           # Claude Code /worktree command
│   ├── templates/
│   │   ├── worktree.conf.example      # Config template
│   │   └── docker-compose.override.example.yml
│   ├── docs/worktree.md               # This documentation
│   └── init.sh                        # Project setup script
├── .worktree.conf                     # Project config (6 values)
├── docker-compose.worktree-web.yml    # Project-specific compose override
├── worktrees/                         # Feature worktrees directory (gitignored)
│   └── ...
└── .git/                              # Shared git directory
```

## Web Container

Each worktree runs its own Nuxt dev server with hot reload via a TLS proxy on a unique port.

**Port derivation:** `WT_PORT_BASE + issue number` (e.g. base=10000, ISSUE-280 = port 10280)

**Access URL:**
- `https://<domain>:<port>` — same hostname as main app = shared auth cookies (RFC 6265)

**Architecture:**
```
Browser -> https://<domain>:10280 (nginx TLS proxy)
  -> issue-280-web:3000 (Nuxt dev server)
  -> http://api (shared API from main stack)
```

### Compose Override Pattern

The compose setup splits into two files that docker compose merges automatically:

- **Base** (`.worktree/docker/docker-compose.base.yml`) — generic web skeleton + tls-proxy, part of the module
- **Override** (`docker-compose.worktree-web.yml` in project root) — project-specific volumes, env vars

When updating the module (copying new `.worktree/`), the project override is untouched.

### Auth Flow

1. Login at `https://<domain>` (main app on :443)
2. Cookies are set on hostname `<domain>`
3. Browser sends cookies to `https://<domain>:<port>` automatically (same hostname)
4. No OIDC config changes needed

### Management Commands

```bash
dsdev wt-web BRANCH          # Start web container
dsdev wt-web-stop BRANCH     # Stop web container
dsdev wt-web-logs BRANCH     # View logs
dsdev wt-web-bash BRANCH     # Shell into container
dsdev wt-web-list            # List all running containers
```

### Limitations

- First startup is slower due to `pnpm install` in the container
- Main stack must be running — API/DB are shared
- Branch name must match the `WT_ISSUE_PATTERN` from `.worktree.conf` for port derivation

## Creating a Worktree

### Using Claude Command (Recommended)

```bash
/worktree ISSUE-XXX-feature-name
```

Automatically:
1. Creates worktree from base branch
2. Starts web container with TLS proxy
3. Shows access URL and management commands

### Manual Method

```bash
git worktree add -b ISSUE-XXX-feature-name ./worktrees/ISSUE-XXX-feature-name develop
dsdev wt-web ISSUE-XXX-feature-name
```

## Viewing Worktrees

```bash
/worktree list          # Enhanced info + running containers
git worktree list       # Basic git output
dsdev wt-web-list       # Running web containers only
```

## Removing a Worktree

### Using Claude Command (Recommended)

```bash
/worktree remove ISSUE-XXX-feature-name
```

Automatically stops web container, checks for uncommitted changes, removes worktree, and offers branch cleanup.

### Manual Method

```bash
dsdev wt-web-stop ISSUE-XXX-feature-name
git worktree remove worktrees/ISSUE-XXX-feature-name
git branch -d ISSUE-XXX-feature-name  # optional, after merge
```

## Parallel Development

```bash
# Main stack running
dsdev up

# Create two worktrees (each gets its own web container)
/worktree ISSUE-123-feature-a    # -> https://<domain>:10123
/worktree ISSUE-124-feature-b    # -> https://<domain>:10124

# Main web stays at https://<domain>
# All three share auth cookies (same hostname)

# Edit code in each worktree - changes auto-reload in browser
```

## Development Workflow

1. Create worktree: `/worktree ISSUE-XXX-feature-name`
2. Edit code in `worktrees/ISSUE-XXX-feature-name/`
3. Preview at `https://<domain>:<port>`
4. Commit and push
5. Create MR when ready
6. Clean up: `/worktree remove ISSUE-XXX-feature-name`

## Git Commands in Worktrees

All git commands work normally:

```bash
git add . && git commit -m "[ISSUE-XXX][FTR] Implement feature"
git push origin ISSUE-XXX-feature-name
git fetch origin && git rebase origin/develop
```

## IDE Integration

- **WebStorm:** Open worktree as separate project
- **VS Code:** `code worktrees/ISSUE-XXX-feature-name`

## Troubleshooting

### Worktree is Locked

```bash
rm .git/worktrees/ISSUE-XXX/gitdir.lock
# Or: git worktree remove --force worktrees/ISSUE-XXX
```

### Web Container Not Starting

```bash
# Check main stack is running (use WT_NETWORK value from .worktree.conf)
docker network inspect <network_name> >/dev/null 2>&1 && echo "OK" || echo "Run: dsdev up"

# Check container logs
dsdev wt-web-logs ISSUE-XXX-feature-name
```

### 502 Error After Start

Nuxt needs a few seconds to compile. Wait and refresh.

## Advanced Usage

```bash
# Worktree from existing remote branch
git worktree add ./worktrees/ISSUE-XXX-feature-name ISSUE-XXX-feature-name

# Temporary worktree for quick checks
git worktree add --detach ./worktrees/temp-check HEAD
git worktree remove ./worktrees/temp-check

# Clean up stale references
git worktree prune
```

## Porting to Another Project

Copy the `.worktree/` directory to your project and run the setup:

```bash
cp -r /path/to/.worktree .worktree
bash .worktree/init.sh
# Edit .worktree.conf with your project values
# Edit docker-compose.worktree-web.yml for project-specific needs
```
