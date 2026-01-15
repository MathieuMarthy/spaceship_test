import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { BadgeRepository } from '$lib/server/db/badge';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  const badges = await BadgeRepository.getBadgesForUser(locals.user.id);
  console.log(badges)
  const grouped = BadgeRepository.groupByTier(badges);
  console.log(grouped)

  return {
    badges: grouped
  };
};
