## Architecture

Headless CraftCMS 5 instance providing content via GraphQL API. No frontend templates -- all rendering is handled by the Next.js app.

- **Runtime**: PHP 8.3 FPM + Caddy (reverse proxy serves static assets, proxies PHP to FPM)
- **Database**: PostgreSQL 17 (shared instance, separate `craft` database)
- **Content delivery**: GraphQL API at `/api` (route alias for `graphql/api`)

## Setup

CraftCMS runs as the `craft-php` Docker service. Caddy handles HTTP routing:
- `https://craft.localhost/` redirects to `/admin`
- `https://craft.localhost/admin` serves the control panel
- `https://craft.localhost/api` serves GraphQL queries

**Admin credentials**: `admin` / `admin123`

## GraphQL

- Endpoint: `https://craft.localhost/api` (aliased in `config/routes.php`)
- Schema configured at `/admin/graphql/schemas`
- When adding new sections or volumes, activate them in the public GraphQL schema
- App-side types are generated via `graphql-codegen` (see [App Docs](../app/CLAUDE.md))

## Project Config

CraftCMS stores all configuration as YAML in `config/project/`:

```
config/project/
  project.yaml              # Master config
  sections/                 # Content sections (blog)
  entryTypes/               # Entry type definitions
  fields/                   # Custom field definitions
  categoryGroups/           # Category group definitions
  volumes/                  # Asset volume definitions (blogImages, authorImages)
  graphql/                  # GraphQL schema config
  ckeditor/                 # CKEditor field configs
  siteGroups/               # Site group definitions
  sites/                    # Site definitions
```

Changes made in the admin panel are written to these YAML files. Commit them to version control and apply on other environments.

## Asset Volumes

| Handle | Purpose |
|--------|---------|
| `blogImages` | Featured images for blog entries |
| `authorImages` | Author profile images |

Assets are stored in `web/assets/images/` under respective subdirectories.

## Content Structure

- **Blog** section with entries containing: title, slug, perex, featuredImage, blogCategory, isFeatured, metaTitle, metaDescription
- **Blog Categories** category group for article categorization

## Data Import

`scripts/import-data.php` imports blog content (assets, categories, entries) from JSON files. Run inside the container:

```bash
docker compose exec craft-php php scripts/import-data.php
```

## Essential Commands

```bash
docker compose exec craft-php php craft project-config/apply    # Apply project config changes
docker compose exec craft-php php craft setup/app-id            # Generate application ID
docker compose exec craft-php php craft setup/security-key      # Generate security key
docker compose exec craft-php php scripts/import-data.php       # Import blog data from JSON
docker compose exec craft-php composer install                   # Install PHP dependencies
```
