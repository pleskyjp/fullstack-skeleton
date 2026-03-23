# Fullstack Skeleton

Production-ready fullstack template with **Next.js**, **Express**, **CraftCMS**, **Caddy**, and **PostgreSQL** — fully dockerized, one command to start.

## Architecture

```
                    ┌─────────────────────────────────┐
                    │      Caddy (HTTPS, port 443)     │
                    └──────┬──────┬──────┬────────────┘
                           │      │      │
            app.localhost   │      │      │ craft.localhost
                           │      │      │
                    ┌──────┴┐  ┌──┴───┐ ┌┴──────────┐
                    │  app  │  │ api  │ │ craft-php  │
                    │Next.js│  │Expr. │ │ PHP-FPM    │
                    └───────┘  └──┬───┘ └─────┬──────┘
                                  │           │
                           ┌──────┴───────────┴──┐
                           │  db (PostgreSQL 17)  │
                           └──────────────────────┘
```

## Services

| Service | URL | Stack |
|---------|-----|-------|
| **App** | `https://app.localhost` | Next.js 16, React, Tailwind, next-intl |
| **API** | `https://api.localhost` | Express 5, Prisma 6, Zod, OpenAPI |
| **CraftCMS** | `https://craft.localhost/admin` | CraftCMS 5, GraphQL, PHP-FPM |
| **Database** | `localhost:5432` | PostgreSQL 17 |

## Quick Start

```bash
# 1. Clone and start
git clone git@github.com:pleskyjp/fullstack-skeleton.git
cd fullstack-skeleton
make init

# 2. Trust HTTPS certificate (macOS, one-time)
make trust-cert

# 3. Open in browser
# https://app.localhost       — Next.js app
# https://api.localhost       — Express API
# https://craft.localhost     — CraftCMS admin (admin / admin123)
```

## Features

- **Dockerized** — `docker compose up -d` starts everything, no local dependencies
- **HTTPS** — Caddy auto-provisions TLS certificates for `.localhost` domains
- **i18n** — Czech (default) + English on both app and API
- **OpenAPI** — Zod schemas generate OpenAPI spec, consumed by hey-api TypeScript client
- **GraphQL** — CraftCMS headless blog with codegen'd types
- **E2E Testing** — Playwright with Page Object Model (19 tests)
- **Worktrees** — parallel feature development with per-worktree dev server
- **Secrets** — dotenvx encrypted env files, plain for non-sensitive values
- **Makefile** — all commands from project root

## Make Commands

```bash
# Docker
make up                        # Start all services
make down                      # Stop all services
make ps                        # List services
make logs SVC=api              # Follow service logs

# Code Quality
make check                     # Lint api + app
make e2e                       # Run Playwright e2e tests
make e2e-ui                    # Playwright interactive UI mode

# Code Generation
make gen                       # Run all codegen (OpenAPI + GraphQL)
make api-gen-spec              # Generate OpenAPI spec from Zod schemas
make app-gen-api               # Generate TypeScript client from OpenAPI
make app-gen-types             # Generate GraphQL types from CraftCMS

# Database
make api-migrate               # Run Prisma migrations
make api-seed                  # Seed database

# CraftCMS
make craft-install             # Install CraftCMS
make craft-apply               # Apply project config (blog schema)
make craft-import              # Import blog content + images

# Worktrees
make wt-start BRANCH=PROJ-42   # Start worktree dev server (:10042)
make wt-stop BRANCH=PROJ-42    # Stop worktree container
make wt-list                   # List running worktree containers

# Shell Access
make api-bash                  # Shell into API container
make app-bash                  # Shell into App container
make craft-bash                # Shell into CraftCMS container
```

## Project Structure

```
fullstack-skeleton/
├── api/                        # Express + Prisma + Zod
│   ├── src/
│   │   ├── modules/notes/      # Router → Service → Repository → Schema
│   │   ├── common/             # AppError, middleware (errorHandler, validate)
│   │   ├── i18n/               # Accept-Language middleware, translations
│   │   └── lib/                # Prisma client
│   └── prisma/                 # Schema, migrations, seed
│
├── app/                        # Next.js + React + Tailwind
│   └── src/
│       ├── app/[locale]/       # Pages (blog, notes, home)
│       ├── components/         # Feature-grouped (blog/, notes/, layout/)
│       ├── hooks/              # React hooks (useNotes)
│       ├── i18n/               # next-intl config, messages (cs/en)
│       ├── lib/                # API client, CraftCMS client, mappers
│       ├── models/             # TypeScript types
│       └── utils/              # Pure utility functions
│
├── craft/                      # CraftCMS 5 (headless)
│   ├── config/project/         # Blog schema (YAML, version-controlled)
│   ├── web/assets/images/      # Blog + author images
│   └── scripts/                # Import script
│
├── e2e/                        # Playwright e2e tests
│   ├── pages/                  # Page Object Model
│   └── tests/                  # api/, app/, blog/, notes/
│
├── docker/
│   ├── caddy/Caddyfile         # Reverse proxy config
│   └── db/init.sql             # Creates craft database
│
├── .worktree/                  # Git worktree module
├── .claude/commands/           # /commit, /check, /worktree
├── openapi/openapi.yaml        # Generated OpenAPI spec
├── docker-compose.yml          # All services
├── Makefile                    # All commands
└── CLAUDE.md                   # AI assistant context
```

## Documentation

- [Project Overview](./CLAUDE.md) — commands, conventions, architecture
- [API Docs](./api/CLAUDE.md) — modular Express architecture, i18n, code style
- [App Docs](./app/CLAUDE.md) — Next.js App Router, components, i18n
- [Craft Docs](./craft/CLAUDE.md) — headless CMS, GraphQL, project config
- [E2E Docs](./e2e/CLAUDE.md) — Playwright setup, Page Object Model
- [Worktree Docs](./.worktree/docs/worktree.md) — parallel development workflow
