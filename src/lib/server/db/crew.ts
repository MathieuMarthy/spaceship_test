import { prisma } from '../prisma';

export const CrewRepository = {
  async addUserToCrew(crewId: bigint, userEmail: string) {
    return prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        crewId,
        rank: 'crewmate',
      },
    });
  },

  async createCrewWithCaptain(
    userId: bigint,
    name: string,
    vaisseau: string
  ) {
    return prisma.$transaction(async (tx) => {
      const crew = await tx.crew.create({
        data: {
          name,
          vaisseau,
        },
      });

      await tx.user.update({
        where: { id: userId },
        data: {
          crewId: crew.id,
          rank: 'captain',
        },
      });

      return crew;
    });
  },

  async getCrewPoints(crewId: bigint) {
    const result = await prisma.user.aggregate({
      where: {
        crewId,
      },
      _sum: {
        points: true,
      },
    });

    return result._sum.points ?? 0n;
  },

  async getTopCrewsWithPoints(limit: number) {
    const crewsWithPoints = await prisma.user.groupBy({
      by: ['crewId'],
      where: {
        crewId: {
          not: null,
        },
      },
      _sum: {
        points: true,
      },
      orderBy: {
        _sum: {
          points: 'desc',
        },
      },
      take: limit,
    });

    const crews = await prisma.crew.findMany({
      where: {
        id: {
          in: crewsWithPoints.map(c => c.crewId!),
        },
      },
    });

    return crewsWithPoints.map(cwp => ({
      crew: crews.find(c => c.id === cwp.crewId),
      points: cwp._sum.points ?? 0n,
    }));
  },


  async getCrewBadges(crewId: bigint) {
    return prisma.userBadge.findMany({
      where: {
        user: {
          crewId,
        },
      },
      distinct: ['badge_id'],
      include: {
        badge: true,
      },
    });
  },

  create(data: {
    name: string;
    vaisseau: string;
  }) {
    return prisma.game.create({ data });
  },
};
