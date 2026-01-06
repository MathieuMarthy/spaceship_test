import { prisma } from '../prisma';

export const BadgeRepository = {
  findAll() {
    return prisma.badge.findMany();
  },

  findById(id: bigint) {
    return prisma.badge.findUnique({
      where: { id }
    });
  },

  create(data: {
    logo: string;
    name: string;
    description: string;
    tier: string
  }) {
    return prisma.badge.create({ data });
  },
};

