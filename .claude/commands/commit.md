Create a git commit for the current changes.

**Allowed tools:** Bash(git add:*), Bash(git commit:*), Bash(git status), Bash(git diff), Bash(git log)

## Instructions

1. Run `git status` and `git diff --staged` to understand the changes
2. Extract the issue key from the current branch name (pattern: uppercase letters + dash + numbers, e.g. `PROJ-123`, `FEAT-45`)
3. If no issue key found, ask the user for one
4. Create a commit with this format:

```
[ISSUE-KEY][TYPE] Short descriptive message
```

**TYPE values:**
- `FTR` - New feature
- `FIX` - Bug fix
- `REF` - Refactoring
- `SEC` - Security
- `DOC` - Documentation
- `CHORE` - Maintenance, dependencies, config

## Rules

- Never include Co-Authored-By section
- Never mention AI, Claude, or code generation
- Keep the message concise (1-2 sentences)
- Focus on "why" not "what"
- Use a HEREDOC for the commit message
- Stage only relevant files (not `.env.keys`, credentials, screenshots)
