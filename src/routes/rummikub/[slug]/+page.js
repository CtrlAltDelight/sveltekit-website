import { error } from '@sveltejs/kit';
import { MAX_PLAYERS } from './constants.js'


export function load({ params }) {
	if(isNaN(params.slug)) {
		throw error(406, {
			message: 'amount of players is not a number'
		});
	}

	if(params.slug > MAX_PLAYERS) {
		// http error code 406 means "not acceptable"
		throw error(406, {
			message: 'too many players'
		});
	}

	if(params.slug <= 1) {
		throw error(406, {
			message: 'not enough players'
		});
	}

	// Default
	return {
		num_players:params.slug
	};
}

