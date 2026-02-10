# Stage 1: Build
FROM node:22-alpine AS builder

# Installation d'OpenSSL indispensable pour Prisma sur Alpine
RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Générer le client Prisma (besoin des binaires engine)
RUN npx prisma generate

# On ne fait PLUS le migrate deploy ici
RUN npm run build

# On garde les fichiers prisma pour la prod (nécessaire pour migrate)
RUN npm prune --production

# Stage 2: Production
FROM node:22-alpine AS runner

# Installation d'OpenSSL aussi dans le runner
RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production

# Copie des fichiers nécessaires
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma 

EXPOSE 3000

# Utilisation d'un script de démarrage pour lancer les migrations
CMD npx prisma migrate deploy && node build
