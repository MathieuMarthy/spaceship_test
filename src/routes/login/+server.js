import { auth } from '$lib/server/auth';

export async function POST({ request, cookies }) {
  const { email } = await request.json();

  // pretend user is validated
  const userId = 1n;

  const session = await auth.createSession(userId, {});
  const cookie = auth.createSessionCookie(session.id);

  cookies.set(cookie.name, cookie.value, cookie.attributes);

  return new Response(null, { status: 204 });
}