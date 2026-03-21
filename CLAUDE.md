## Project Overview

Fullstack skeleton with three services and shared infrastructure:
- **API Service** (`/api/`) - Express 5 + Prisma 6 + Zod + OpenAPI backend -- [API Docs](./api/CLAUDE.md)
- **App Service** (`/app/`) - Next.js 16 + React + Tailwind + next-intl frontend -- [App Docs](./app/CLAUDE.md)
- **Craft Service** (`/craft/`) - CraftCMS 5 headless CMS with GraphQL -- [Craft Docs](./craft/CLAUDE.md)
- **Infrastructure** - Caddy reverse proxy, PostgreSQL 17, dotenvx secrets

## Essential Commands

```bash
docker compose up -d             # Start all services
docker compose down              # Stop all services
docker compose logs -f <svc>     # Follow logs (api, app, craft-php, caddy, db)
./scripts/trust-cert.sh          # Trust Caddy root CA for HTTPS (macOS, one-time)
```

**Code generation (run inside containers):**
```bash
docker compose exec api pnpm gen:spec          # Generate OpenAPI spec from Zod schemas
docker compose exec app pnpm gen:api-client    # Generate API client from OpenAPI spec
docker compose exec app pnpm gen:types         # Generate GraphQL types from CraftCMS schema
```

**Database:**
```bash
docker compose exec api pnpm db:migrate    # Run Prisma migrations
docker compose exec api pnpm db:seed       # Seed database
```

## Service URLs

| Service | URL |
|---------|-----|
| App (Next.js) | `https://app.localhost` |
| API (Express) | `https://api.localhost` |
| CraftCMS Admin | `https://craft.localhost/admin` |
| CraftCMS GraphQL | `https://craft.localhost/api` |

## Claude Commands

| Command | Description |
|---------|-------------|
| `/commit` | Create git commit with issue prefix format |
| `/check` | Run code quality checks and fix issues |

## Git Conventions

- Branch names contain issue key (e.g. `PROJ-123-FE-feature-name`)
- Commit prefix: `[PROJ-XXX][TYPE]` where TYPE is `FTR` / `FIX` / `REF` / `SEC` / `DOC` / `CHORE`
- Never use Co-Authored-By section in commits
- Target branch for PRs/MRs: `develop`

## OpenAPI Documentation

Centralized spec at `/openapi/openapi.yaml`:
- **Generate**: `docker compose exec api pnpm gen:spec` (Zod schemas -> OpenAPI 3.1 YAML)
- **Consume**: `docker compose exec app pnpm gen:api-client` (OpenAPI -> hey-api TypeScript client)
- Live spec also served at `https://api.localhost/openapi.json`

## dotenvx Secrets Management

Both `api` and `app` use [dotenvx](https://dotenvx.com/) with the `flow` convention:
- `.env` - base config (committed)
- `.env.dev` - dev overrides (committed, encrypted)
- `.env.keys` - decryption keys (gitignored)
- First-time setup: `docker compose exec api pnpm secrets-setup` / `docker compose exec app pnpm secrets-setup`

## Development Tips

- **All development runs exclusively in Docker containers** -- never install node_modules or use pnpm locally
- Node modules live in Docker volumes (`api_node_modules`, `app_node_modules`) to avoid host/container conflicts
- Source code is bind-mounted, so local file edits are reflected immediately (hot reload)
- PostgreSQL is shared between API (Prisma) and CraftCMS via `init.sql` creating both databases
- Caddy automatically provisions TLS certificates; run `trust-cert.sh` once to trust the root CA
- The API entrypoint auto-runs migrations and seeds on container start
