## Architecture

Modular Express 5 API with layered architecture:

```
src/
  index.ts                  # App bootstrap, middleware, route mounting
  openapi.ts                # OpenAPI registry and spec generation
  common/
    errors.ts               # AppError class with i18n support
    middleware/
      errorHandler.ts       # Global error handler (localized responses)
      validate.ts           # Zod request body validation middleware
  i18n/
    config.ts               # Locale definitions (cs, en)
    middleware.ts            # Accept-Language header parsing
    t.ts                    # Translation helper
    messages/               # cs.ts, en.ts translation files
  lib/
    prisma.ts               # Prisma client singleton
  modules/
    notes/                  # Example module
      notes.router.ts       # Express router (HTTP layer)
      notes.service.ts      # Business logic
      notes.repository.ts   # Prisma data access
      notes.schema.ts       # Zod schemas + OpenAPI route registration
  scripts/
    generateSpec.ts         # CLI script to export OpenAPI YAML
```

**Request flow**: Router -> validate middleware -> Service -> Repository -> Prisma

## Tech Stack

- **Express 5** with async error handling
- **Prisma 6** ORM with PostgreSQL
- **Zod v4** for validation + `zod-to-openapi` for spec generation
- **TypeScript** (ESM, strict mode)
- **dotenvx** for environment/secrets management
- **tsx** for dev server with watch mode

## Module Structure

Each module (`modules/<name>/`) contains four files:

| File | Purpose |
|------|---------|
| `<name>.router.ts` | Express router, HTTP concerns only |
| `<name>.service.ts` | Business logic, throws `AppError` on failures |
| `<name>.repository.ts` | Prisma queries, data access only |
| `<name>.schema.ts` | Zod schemas, types, and OpenAPI route registration |

Schemas serve double duty: runtime validation via `validate()` middleware and OpenAPI spec generation via `registerNoteRoutes(registry)`.

## i18n

- Middleware parses `Accept-Language` header and sets `req.locale`
- `AppError` supports localized messages via `i18nKey` + `i18nParams`
- Error handler returns translated error messages based on request locale
- Supported locales: `cs` (default), `en`

## Essential Commands

All commands run inside the Docker container:

```bash
docker compose exec api pnpm dev          # Dev server with hot reload (tsx watch)
docker compose exec api pnpm build        # TypeScript compilation
docker compose exec api pnpm lint         # ESLint
docker compose exec api pnpm gen:spec     # Generate /openapi/openapi.yaml from Zod schemas
docker compose exec api pnpm db:migrate   # Run Prisma migrations
docker compose exec api pnpm db:seed      # Seed database
```

## Code Style

- **ESM modules** (`"type": "module"`, `.js` extensions in imports)
- **Strict TypeScript** -- no `any`, always type function parameters
- **Zod for all validation** -- never trust raw request data
- **AppError pattern** -- use static factory methods (`AppError.notFound()`, `AppError.badRequest()`)
- **Fail fast** -- throw errors early, let error handler respond
- **No hardcoded strings** in user-facing messages -- use i18n keys
- **Destructure** objects and function params where possible
- **Minimal comments** -- only explain "why", not "what"
