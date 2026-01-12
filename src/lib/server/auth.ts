import { Lucia } from 'lucia';
import argon2 from 'argon2'
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { prisma } from '$lib/server/prisma';

export async function verifyPassword(
  hash: string,
  password: string
): Promise<boolean> {
  return argon2.verify(hash, password);
}

const adapter = new PrismaAdapter(
	prisma.session,
	prisma.user
);

export const auth = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: process.env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (user) => ({
		email: user.email,
		username: user.username,
		rank: user.rank,
		crewId: user.crewId
	})
});