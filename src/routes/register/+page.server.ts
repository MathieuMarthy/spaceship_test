import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import argon2 from 'argon2';
import { prisma } from '$lib/server/prisma';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const username = formData.get('username')?.toString();
		const linkedin = formData.get('username_linkedin')?.toString();
		const email = formData.get('mail')?.toString();
		const password = formData.get('password')?.toString();
		const passwordConfirm = formData.get('password_confirm')?.toString();

		if (!username || !email || !password || !passwordConfirm) {
			return fail(400, { error: 'Missing fields' });
		}

		if (password !== passwordConfirm) {
			return fail(400, { error: 'Passwords do not match' });
		}

		if (password.length < 8) {
			return fail(400, { error: 'Password too short' });
		}

		const existingUser = await prisma.user.findUnique({
			where: { email }
		});

		if (existingUser) {
			return fail(400, { error: 'Email already in use' });
		}

		const hashedPassword = await argon2.hash(password);

		await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
				linkedin: linkedin ?? '',
				photo: '',
				points: BigInt(0),
				rank: 'unaffiliated',
				crewId: null
			}
		});

		throw redirect(302, '/login');
	}
};
