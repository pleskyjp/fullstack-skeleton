## Architecture

Next.js 16 App Router with locale-based routing and dual data sources (Express API + CraftCMS GraphQL).

```
src/
  app/
    layout.tsx              # Root layout
    globals.css             # Global styles (Tailwind)
    [locale]/               # Locale-prefixed routes
      layout.tsx            # Locale layout (next-intl provider)
      page.tsx              # Home page
      notes/                # Notes feature (API-backed)
      blog/                 # Blog feature (CraftCMS-backed)
  components/
    layout/                 # Layout components (header, footer, nav)
    notes/                  # Notes feature components
    blog/                   # Blog feature components
  hooks/
    useNotes.ts             # Notes data fetching hook
  models/
    blog.ts                 # Blog type definitions
  utils/
    formatDate.ts           # Date formatting utility
  lib/
    apiClient.ts            # Express API client configuration
    craftClient.ts          # CraftCMS GraphQL client
    blogMappers.ts          # GraphQL response -> model mappers
  graphql/
    blogQueries.ts          # GraphQL query documents
    generated/              # Auto-generated types (graphql-codegen)
  api/
    generated/              # Auto-generated API client (hey-api)
  i18n/
    config.ts               # Locale definitions (cs, en)
    routing.ts              # next-intl routing config
    navigation.ts           # Localized navigation helpers
    request.ts              # Server-side locale resolution
    messages/               # cs.ts, en.ts translation files
  middleware.ts             # next-intl locale detection middleware
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with Server Components
- **Tailwind CSS 4** for styling
- **next-intl** for internationalization
- **hey-api** for OpenAPI-generated API client
- **graphql-codegen** for CraftCMS GraphQL types
- **TypeScript** (strict mode)
- **dotenvx** for environment/secrets management

## Component Patterns

- Components are grouped by feature: `components/notes/`, `components/blog/`, `components/layout/`
- Server Components by default; use `'use client'` only when needed
- Keep page components thin -- delegate to feature components

## i18n Setup

- **Library**: next-intl with App Router integration
- **Locales**: `cs` (default), `en`
- **Prefix strategy**: `as-needed` (default locale has no prefix, others get `/en/...`)
- **Translations**: `src/i18n/messages/cs.ts`, `src/i18n/messages/en.ts`
- **Usage**: `useTranslations('namespace')` in client components, `getTranslations('namespace')` in server components
- **Middleware**: Detects locale from URL prefix, falls back to `Accept-Language` header

## API Integration

**Express API** (REST):
- Generated client at `src/api/generated/` via hey-api from `/openapi/openapi.yaml`
- Client config in `src/lib/apiClient.ts`
- Regenerate after API changes: `pnpm gen:api-client`

**CraftCMS** (GraphQL):
- Query documents in `src/graphql/blogQueries.ts`
- Generated types at `src/graphql/generated/` via graphql-codegen
- Client in `src/lib/craftClient.ts`, mappers in `src/lib/blogMappers.ts`
- Regenerate after schema changes: `pnpm gen:types`

## Essential Commands

All commands run inside the Docker container:

```bash
docker compose exec app pnpm dev              # Dev server with hot reload
docker compose exec app pnpm build            # Production build
docker compose exec app pnpm lint             # ESLint
docker compose exec app pnpm gen:api-client   # Regenerate API client from OpenAPI spec
docker compose exec app pnpm gen:types        # Regenerate GraphQL types from CraftCMS schema
```

## Code Style

- **No hardcoded strings** -- all user-facing text goes through i18n
- **Destructure** props, objects, and function params
- **No `any` type** -- use proper types or `unknown` with type guards
- **Minimal comments** -- only explain "why", not "what"; no comments in JSX templates
- **Prefer inline expressions** -- ternary operators, short-circuit evaluation
- **No default exports** for components (except pages/layouts required by Next.js)
