<script>
	import links from '$lib/links.json';
</script>

<style>
  @import '/src/global.css';
  @import './home.css';
</style>

<div class="background">
	<header>
		<h1>About Me</h1>
	</header>
	<div class="container">
		<div class="box">

			<div class="header-container gradient-background">
				<p>Welcome!</p>
			</div>

			<div class="inner-column" id="link-box">
				<p id="text03">Me</p>
				<p id="text04" style="text-align: center">programmer, gamer</p>
				<hr>
				<p id="text01"><b>favorite languages:</b> C and python</p>
				<p id="text01"><b>javascript framework:</b> Svelte</p>
				<p id="text01"><b>OS:</b> arch linux</p>
				<p id="text01"><b>editor:</b> neovim</p>
				<p id="text01"><b>window manager:</b> dwm</p>
			</div>

			<div class="inner-column">
				<p id="text01" style="text-align: center">Links</p>
				<ul>
					{#each links as link}
						<li><a href={link.url}>{link.name}</a></li>
					{/each}
				</ul>
			</div>

		</div>
	</div>
	<footer>
		<p>&copy; 2023</p>
	</footer>
</div>
