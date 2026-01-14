import { CrewRepository } from '$lib/server/db/crew';
import { UserRepository } from '$lib/server/db/user';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const topCrews = await CrewRepository.getTopCrewsWithPoints(20)
    console.log(topCrews)
    return {topCrews}
}