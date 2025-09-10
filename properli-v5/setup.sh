#!/usr/bin/env bash
set -euo pipefail
echo "👉 Installing deps"
pnpm install
echo "👉 Starting Postgres"
docker compose up -d postgres
echo "👉 Generating Prisma client"
pnpm -C api prisma generate
echo "👉 Running initial migrate"
pnpm -C api prisma migrate dev --name init
echo "✅ Done. Start dev with: pnpm dev"
