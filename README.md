# VÉSSO


## Commandes 

```
git clone <your-repo-url>
cd <your-repo-folder>
cp .env
docker compose up -d --build
docker exec -it sveltekit_app npx prisma migrate dev --name init
docker exec -it sveltekit_app npm run db:reset
docker exec -it sveltekit_app npx prisma studio --hostname 0.0.0.0 --port 5555
```
## Démarrer Prisma Studio
```
npx prisma studio
```