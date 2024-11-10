import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);

	if (!isAuthenticated) {
		throw redirect(303, '/api/auth/login');
	}

	// Only try to get user after confirming authentication
	const user = await kindeAuthClient.getUser(request as unknown as SessionManager);

	return {
		isAuthenticated,
		user
	};
};
