// src/routes/delete-account/+server.ts
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { UserRepository } from '$lib/server/db/user';
import { auth } from '$lib/server/auth';

export const POST: RequestHandler = async ({ locals, cookies }) => {
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  await UserRepository.deleteUserCompletely(locals.user.id);

  if (locals.session) {
    await auth.invalidateSession(locals.session.id);
  }

  const sessionCookie = auth.createBlankSessionCookie();
  cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  throw redirect(303, '/');
};