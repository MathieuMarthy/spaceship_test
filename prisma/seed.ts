import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: 'password',
      photo: '',
      linkedin: '',
      vaisseau: '',
      points: 0
    },
  });
}

main()
  .then(() => console.log('Database seeded!'))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
