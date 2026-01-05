Guide : https://svelte.dev/tutorial/kit/handle
export async function handle({ event, resolve }) {
	return await resolve(event);
}