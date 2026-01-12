import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '../../lib/server/prisma'
import { auth } from '../../lib/server/auth';
import { verifyPassword } from '../../lib/server/auth';
import argon2 from 'argon2';


export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();

    const email = formData.get('mail');
    const password = formData.get('password');

    if (
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      return fail(400, { error: 'Invalid form submission' });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return fail(401, { error: 'Invalid credentials' });
    }

    const passwordValid = await verifyPassword(
      user.password,
      password
    );

    if (!passwordValid) {
      return fail(401, { error: 'Invalid credentials' });
    }

    const session = await auth.createSession(user.id.toString(),{});
    const sessionCookie = auth.createSessionCookie(session.id);

    cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      { ...sessionCookie.attributes, secure: false, path: '/', sameSite: 'lax' }
    );

    throw redirect(302, '/');
  }
};
