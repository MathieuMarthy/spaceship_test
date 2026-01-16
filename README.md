# VÉSSO


## Commandes 

```
echo 'DATABASE_URL=postgresql://postgres:postgres@db:5432/myapp?schema=public' > .env
docker compose up -d --build
docker exec -it sveltekit_app npx prisma migrate dev --name init
http://localhost:5173
```
## Démarrer Prisma Studio
```
docker exec -it sveltekit_app npx prisma studio --hostname 0.0.0.0 --port 5555
http://localhost:5555
```

## Sources/license
wiki Among Us sur Fandom pour carte "The Skeld".
