<style>
	@import '/src/global.css';
	@import '/src/routes/rummikub/rummikub.css';
	button {
		padding: 5px;
		margin-right: 5px;
	}
	input {
		height: 1.5rem;
		margin: 5px;
	}
</style>

<!-- scores.svelte -->

<header>
	<h1>
		Rummikub with 
		{#key num_players}
		<b in:fly={{y: 200}}>{num_players}</b>
		{/key}
		players
		<a href={"/"}><u>{"go back home"}</u></a>
	</h1>
</header>

<div style="padding: 1rem;">
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
	<div class="column" style="margin: 1rem;">
	<p><br></p>
	{#each {length: num_players} as _, i}
		<p style="margin: 5px; height: 1.62rem;">round {i}:</p>
	{/each}
	</div>
	{#each {length: num_players} as _, i} <!--Will have reactivity with the change of data.num_players-->
	<div transition:fly class="column" style="margin: 1rem;">
			<p class="normal-text" style="display:flex; justify-content:center;">Player {i + 1}</p>
			{#each {length: num_players} as _, j}
			<input transition:fly={{ y: 200, duration: 1000 }} type="number" min="-1000" max="1000" bind:value={players[i][j]}>
			{/each}
		</div>
	{/each}
</div>

<!-- Repeat the above for all players and rounds -->
<button on:click={calculateScores}>Calculate Final Scores</button>
	{#if finalScores}
		<div transition:fade><p class="normal-text">Final Scores:</p></div>
		{#each {length: num_players} as _, i} <!--Will have reactivity with the change of data.num_players-->
			<div in:fade out:fade>
				{#key finalScores}
				<p in:fade class="smaller-text">Player {i + 1}: {finalScores[i]}</p>
				{/key}
			</div>
		{/each}
	{/if}

</div>
<script>
import { fade, fly } from 'svelte/transition';

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
	for(let i = 0; i < num_players; i++) {
		let num_zeroes = 0;
		let zero_index = 0;
		let sum = 0;
		for(let j = 0; j < num_players; j++) {
			sum += players[j][i];
			if(players[j][i] == 0) {
				num_zeroes += 1;
				zero_index = j;
			}
		}
		if(num_zeroes == 1) {
			players[zero_index][i] = sum * -1;
		}
	}

	finalScores = [];
	for(let i = 0; i < num_players; i++) {
		finalScores.push(players[i].reduce((acc, cur) => acc + cur, 0));
	}

	finalScores = finalScores; // Update the UI with the final scores
}

</script>

