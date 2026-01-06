import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: 'password',
      photo: 'photo',
      linkedin: 'linkedin',
      vaisseau: 'vaisseau-01',
      points: 0
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
