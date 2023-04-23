import { error } from '@sveltejs/kit';

const MAX_PLAYERS = 6;


export function load({ params }) {
	if(params.slug > MAX_PLAYERS) {
		// HTTP error code 406 means "Not Acceptable"
		throw error(406, {
			message: 'Too many players'
		})
	}
	return {
		num_players:params.slug
	};
}

