Run code quality checks and fix auto-fixable issues.

**Target:** $ARGUMENTS (api, app, all). Default: `all`

**Allowed tools:** Bash, Read, Glob, Grep, Agent

## Targets

### api
```bash
cd api && pnpm lint
```
Check TypeScript compilation:
```bash
cd api && npx tsc --noEmit
```

### app
```bash
cd app && pnpm lint
```
Check TypeScript compilation:
```bash
cd app && npx tsc --noEmit
```

### all
Run both `api` and `app` checks. Use parallel subagents if possible.

## Instructions

1. Determine target from $ARGUMENTS (default: `all`)
2. Run the checks for the target(s)
3. If issues are found, attempt to fix auto-fixable ones
4. Report results: what passed, what failed, what was auto-fixed
