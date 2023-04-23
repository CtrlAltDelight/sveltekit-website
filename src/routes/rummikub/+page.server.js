import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, '/rummikub/4');
}
