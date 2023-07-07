<style>
	@import '/src/global.css';
	@import '/src/routes/rummikub/rummikub.css';
</style>

<!-- scores.svelte -->

<header>
	<h1>
		Rummikub with {num_players} players
		<a href={"/"}><u>{"go back home"}</u></a>
	</h1>
</header>

<h1>Calculate Final Scores</h1>

{#if num_players > 2}
	<button on:click={() => num_players -= 1}>less players</button>
{:else}
	<button>can't lower!</button>
{/if}
{#if num_players < MAX_PLAYERS}
	<button on:click={() => num_players += 1}>more players</button>
{/if}

<div class="row">
	{#each {length: num_players} as _, i} <!--Will have reactivity with the change of data.num_players-->
		<div class="column">
			<p class="normal-text">Player {i + 1}</p>
			{#each {length: num_players} as _, j}
				<input type="number" min="-1000" max="1000" bind:value={players[i][j]}>
			{/each}
		</div>
	{/each}
</div>
<!-- Repeat the above for all players and rounds -->
<button on:click={calculateScores}>Calculate Final Scores</button>
	{#if finalScores}
		<div><p class="normal-text">Final Scores:</p></div>
		{#each {length: num_players} as _, i} <!--Will have reactivity with the change of data.num_players-->
			<div><p class="smaller-text">Player {i + 1}: {finalScores[i]}</p></div>
		{/each}
	{/if}

<script>

export let data; // Gets the slug data
let num_players = data.num_players;
num_players = parseInt(num_players);
import { MAX_PLAYERS } from './constants.js'

let players = []; // each player has a list of their scores from each round
for(let i = 0; i < MAX_PLAYERS; i++) {
	let list = []
	for(let j = 0; j < MAX_PLAYERS; j++) {
		list.push(0);
	}
	players.push(list);
}

let finalScores = null;

function calculateScores() {
	for(let i = 0; i < MAX_PLAYERS; i++) {
		let num_zeroes = 0;
		let zero_index = 0;
		for(let j = 0; j < MAX_PLAYERS) {
			if(players[i][j] == 0) {
				num_zeroes += 1;
				zero_index = j;
			}
		}
		if(num_zeroes == 1) {
			players[i][zero_index] = players[i].reduce((acc, cur) => acc + cur, 0);
		}
	}

	finalScores = [];
	for(let i = 0; i < num_players; i++) {
		finalScores.push(players[i].reduce((acc, cur) => acc + cur, 0));
	}

	finalScores = finalScores; // Update the UI with the final scores
}

</script>

