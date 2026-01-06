import { prisma } from '../prisma';

export const GameRepository = {
  findAll() {
    return prisma.game.findMany({
      include: {
        category: true,
      },
    });
  },

  findById(id: bigint) {
    return prisma.game.findUnique({
      where: { id }
    });
  },

  create(data: {
    name: string;
    description: string;
    category_id: bigint;
    badge_id: bigint;
    points_reward: bigint
  }) {
    return prisma.game.create({ data });
  },
};
