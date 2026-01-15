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

  async getBadgesForUser(userId: bigint) {
    const badges = await prisma.userBadge.findMany({
      where: {
        user_id : userId
      },
      include: {
        badge: true
      },
      orderBy: {
        unlockedAt: 'desc'
      }
    });

    return badges.map((entry) => ({
      ...entry.badge,
      unlockedAt: entry.unlockedAt
    }));
  },

  groupByTier(badges: any[]) {
    return {
      gold: badges.filter(b => b.tier === 'gold'),
      silver: badges.filter(b => b.tier === 'silver'),
      bronze: badges.filter(b => b.tier === 'bronze')
    };
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

