import type { PageServerLoad, Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { UserRepository } from '$lib/server/db/user';
import { hashPassword } from '$lib/server/auth';


export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  return {
    user: locals.user
  };
};


export const actions: Actions = {
  default: async ({ request, locals }) => {
    if (!locals.user) {
      throw redirect(303, '/login');
    }

    const formData = await request.formData();

    const username = formData.get('username')?.toString().trim();
    const email = formData.get('mail')?.toString().trim();
    const linkedin = formData.get('username_linkedin')?.toString().trim();
    const password = formData.get('password')?.toString();
    const passwordConfirm = formData.get('password_confirm')?.toString();

    if (!username || !email) {
      return fail(400, { error: 'Champs obligatoires manquants.' });
    }

    let passwordUpdate = {};

    if (password || passwordConfirm) {
      if (password !== passwordConfirm) {
        return fail(400, { error: 'Les mots de passe ne correspondent pas.' });
      }

      if (password.length < 8) {
        return fail(400, { error: 'Mot de passe trop court (8 caractères minimum).' });
      }

      passwordUpdate = {
        password: await hashPassword(password)
      };
    }

    await UserRepository.updateUser(locals.user.id, {
      username,
      email,
      linkedin,
      ...passwordUpdate
    });

    return {
      success: true
    };
  }
};
