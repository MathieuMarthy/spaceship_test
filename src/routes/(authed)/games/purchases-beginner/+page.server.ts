import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { UserRepository } from '$lib/server/db/user';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();

    if (formData.get('action') === 'finishGame') {
      if (!locals.user) {
        return { error: 'Not authenticated' };
      }

      const userId = locals.user.id;
      const badgeId = 1;
      
      await prisma.userBadge.upsert({
        where: {
          user_id_badge_id: { user_id : userId, badge_id : badgeId }
        },
        update: {},
        create: { user_id : userId, badge_id : badgeId }
      });

      await UserRepository.addGameRewardPoints(userId, 1n)

      return { success: true };
    }
  }
};
