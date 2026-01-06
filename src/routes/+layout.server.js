export const load = async ({ cookies }) => {
	return {
		user: cookies.get('logged_in')
	};
};
