# Stage 1: Build
FROM node:22-alpine AS builder

# Installation d'OpenSSL pour Prisma
RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Génération Prisma + Build SvelteKit
RUN npx prisma generate
RUN npm run build

# On retire les devDependencies
RUN npm prune --omit=dev

# Stage 2: Production
FROM node:22-alpine AS runner

# Installation d'OpenSSL indispensable pour le runtime Prisma
RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production

# On récupère le build (maintenant généré par adapter-node)
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma 

EXPOSE 3000

# CMD au format tableau (recommandé) pour exécuter les migrations puis l'app
CMD ["sh", "-c", "npx prisma migrate deploy && node build"]