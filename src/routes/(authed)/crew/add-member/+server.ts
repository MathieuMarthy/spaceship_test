import { CrewRepository } from '$lib/server/db/crew';
import { prisma } from '$lib/server/prisma';

export const POST = async ({ request, locals }) => {
	if (locals.user.crewId == null) {
		return new Response('Unauthorized', { status: 401 });
	}

	if (locals.user.rank !== 'captain') {
		return new Response('Forbidden', { status: 403 });
	}

	const formData = await request.formData();
	const email = formData.get('email')?.toString();

	if (!email) {
		return new Response('Missing email', { status: 400 });
	}

	const user = await prisma.user.findUnique({
		where: { email }
	});

	if (!user) {
		return new Response('User not found', { status: 404 });
	}

	await CrewRepository.addUserToCrew(locals.user.crewId, user.email);

	return new Response(null, { status: 204 });
};
