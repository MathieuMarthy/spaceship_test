import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
const sessionId = event.cookies.get('auth_session');
	if (sessionId) {
		try {
			const session = await auth.validateSession(sessionId);
			const user = session.user;

			event.locals.user = user;
		} catch (e) {
			event.locals.user = null;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
