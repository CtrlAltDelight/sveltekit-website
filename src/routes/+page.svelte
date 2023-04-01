<script>
	import links from '$lib/links.json';
</script>

<style>
  @import '../global.css';
</style>

<div class="background">
	<header>
		<h1>My Website</h1>
	</header>
	<div class="container">
		<div class="box">

			<div class="header-container gradient-background">
				<p>Welcome!</p>
			</div>

			<div class="inner-column" id="link-box">
				<p id="text03">Sogist</p>
				<p id="text04" style="text-align: center">programmer, gamer, teacher</p>
				<hr>
				<p id="text01"><b>likes:</b> keyboards, computers, etc.</p>
			</div>

			<div class="inner-column">
				<p>Links</p>
				<ul>
					{#each links as link}
						<li><a href={link.url}>{link.name}</a></li>
					{/each}
				</ul>
			</div>

		</div>
	</div>
	<footer>
		<p>&copy; 2023 My Website</p>
	</footer>
</div>
