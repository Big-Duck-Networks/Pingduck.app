# syntax=docker/dockerfile:1

# ==============================================================================
# STAGE 1: Dependencies
# ==============================================================================
FROM node:20-bookworm-slim AS deps
WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL=warn

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# ==============================================================================
# STAGE 2: Build Next.js Application
# ==============================================================================
FROM node:20-bookworm-slim AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ==============================================================================
# STAGE 3: Production Runtime
# ==============================================================================
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3014
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3014

CMD ["npm", "start"]
