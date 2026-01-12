import { CrewRepository } from '$lib/server/db/crew';
import { redirect } from '@sveltejs/kit';

export const POST = async ({ request, locals }) => {
	if (!locals.user) throw redirect(303, '/login');

	const formData = await request.formData();
	const crewName = formData.get('crew_name')?.toString();
	const shipName = formData.get('ship_name')?.toString();

	if (!crewName || !shipName) {
		return new Response('Missing fields', { status: 400 });
	}

	await CrewRepository.createCrewWithCaptain(
		locals.user.id,
		crewName,
		shipName
	);

	throw redirect(303, '/crew');
};
