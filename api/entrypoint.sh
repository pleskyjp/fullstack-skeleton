#!/bin/sh

# Install deps into the volume if empty (first run)
if [ ! -d "node_modules/.pnpm" ]; then
  echo "Installing dependencies..."
  pnpm install || exit 1
fi

# Generate Prisma client
npx prisma generate || exit 1

# Run migrations
pnpm db:migrate || exit 1

# Seed (non-fatal — DB may already be seeded)
pnpm db:seed || echo "Seed skipped or failed, continuing..."

exec "$@"
