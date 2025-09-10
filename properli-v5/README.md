# Properli V5

Monorepo scaffold (pnpm workspaces) with **web/** (React + Vite + Tailwind) and **api/** (Fastify + TypeScript + Prisma + PostgreSQL + JWT).

## Quickstart
```bash
pnpm install
docker compose up -d
cp api/.env.example api/.env
pnpm -C api prisma generate
pnpm -C api prisma migrate dev
pnpm dev
```
- Web: http://localhost:5173
- API: http://localhost:4000/health
- Mailhog (if added later): http://localhost:8025

## Scripts
- `pnpm dev` – (add in root or run each package separately)
- `pnpm -C api dev` – API dev
- `pnpm -C web dev` – Web dev
