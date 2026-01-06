import { prisma } from '../prisma';

export const NewsRepository = {
  findAll() {
    return prisma.news.findMany();
  },

  findById(id: bigint) {
    return prisma.user.findUnique({
      where: { id }
    });
  },

  findLatest(limit: number) {
    return prisma.news.findMany({
      orderBy: {
        id: 'desc',
      },
      take: limit,
    });
  },

  create(data: {
    titre: string;
    description: string;
    photo: string;
    redirection?: string;
  }) {
    return prisma.news.create({ data });
  },
};
