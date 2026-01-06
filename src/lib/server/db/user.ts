import { prisma } from '../prisma';

export const UserRepository = {
  findAll() {
    return prisma.user.findMany();
  },

  findById(id: bigint) {
    return prisma.user.findUnique({
      where: { id }
    });
  },

  findByMail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    });
  },

  getTopUsers(limit: number) {
    return prisma.user.findMany({
      orderBy: {
        points: 'desc',
      },
      take: limit
    });
  },

  async addBadges(
      userId: bigint,
      badgeIds: bigint | bigint[]
  ) {
    const ids = Array.isArray(badgeIds) ? badgeIds : [badgeIds];

    return prisma.userBadge.createMany({
      data: ids.map((badgeId) => ({
        user_id: userId,
        badge_id: badgeId,
      })),
      skipDuplicates: true,
    });
  },

  async addGameRewardPoints(userId: bigint, gameId: bigint) {
    return prisma.$transaction(async (tx) => {
      const game = await tx.game.findUnique({
        where: { id: gameId },
      });

      if (!game) {
        throw new Error('Game not found');
      }

      return tx.user.update({
        where: { id: userId },
        data: {
          points: {
            increment: game.points_reward,
          },
        },
      });
    });
  },
  
  create(data: {
    username: string;
    email: string;
    password: string;
    photo: string;
    linkedin: string;
    points: bigint;
    rank: string
    crewId: BigInt
  }) {
    return prisma.user.create({ data });
  },
};
