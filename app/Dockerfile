FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

EXPOSE 3000

CMD ["pnpm", "dev"]
