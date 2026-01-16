import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { GameRepository } from '$lib/server/db/game';

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { gameId } = await request.json();

  if (!gameId) {
    return json({ error: 'Missing gameId' }, { status: 400 });
  }

  try {
    const result = await GameRepository.completeGame(
      locals.user.id,
      BigInt(gameId)
    );

    return json({
      success: true,
      ...result
    });
  } catch (err) {
    console.error(err);
    return json({ error: 'Unable to complete game' }, { status: 500 });
  }
};
