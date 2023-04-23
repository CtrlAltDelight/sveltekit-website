<style>
	@import '/src/global.css';
	@import '/src/routes/rummikub/rummikub.css';
</style>

<!-- scores.svelte -->

<header><h1>Rummikub with {data.num_players} players</h1></header>


<h1>Calculate Final Scores</h1>

<div class="row">
	{#each players as player, i} <!--i is an index-->
		<div class="column">
			<p>Player {i + 1}</p>
			{#each {length: data.num_players} as _, j}
				<input type="number" min="-1000" max="1000" bind:value={player[j]}>
			{/each}
		</div>
	{/each}
</div>
<!-- Repeat the above for all players and rounds -->
<button on:click={calculateScores}>Calculate Final Scores</button>
	{#if finalScores}
		<div><p>Final Scores:</p></div>
		{#each finalScores as player_score, i}
		<div><p class="smaller-text">Player {i + 1}: {player_score}</p></div>
		{/each}
	{/if}

<script>

export let data; // Gets the slug data

const players = [];
for(let i = 0; i < data.num_players; i++) {
	let list = []
	for(let j = 0; j < data.num_players; j++) {
		list.push(0);
	}
	players.push(list);
}

let finalScores = null;

function calculateScores() {
	finalScores = [];

	for(let i = 0; i < players.length; i++) {
		finalScores.push(players[i].reduce((acc, cur) => acc + cur, 0));
	}

	finalScores = finalScores; // Update the UI with the final scores
}

</script>

