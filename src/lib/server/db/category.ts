import { prisma } from '../prisma';

export const CategoryRepository = {
  findAll() {
    return prisma.category.findMany({
      include: {
        badge: true,
        games: true,
      },
    });
  },

  findById(id: bigint) {
    return prisma.category.findUnique({
      where: { id }
    });
  },

  async findGames(categoryId: bigint) {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
      select: {
        games: true,
      },
    });

    return category?.games ?? [];
  },

  create(data: {
    name: string;
    summary: string;
    description: string;
  }) {
    return prisma.category.create({ data });
  },
};
