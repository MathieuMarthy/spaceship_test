import { auth } from '$lib/server/auth';

export async function handle({ event, resolve }) {
  const sessionId = event.cookies.get('session');

  if (!sessionId) {
    event.locals.user = null;
    return resolve(event);
  }

  const { user, session } = await auth.validateSession(sessionId);

  event.locals.user = user;
  event.locals.session = session;

  return resolve(event);
}