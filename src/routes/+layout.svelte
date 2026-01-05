<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/img/favicon.svg';
	import icon from '$lib/assets/img/icon.png';
	
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex flex-row justify-between p-4 bg-orange-300 ">
	<!-- Logo -->
	 <a href="/"><img class="h-15" src="{icon}" alt="" ></a>

	<!-- Navigation / catégories -->
	<nav>
		<ul class="flex gap-4 p-4">
			{#if data.user}
				<li><a href="/vessel">Vaisseau</a></li>
			{/if}
			<li><a href="/news">Articles</a></li>
		</ul>
	</nav>

	<!-- Login/Compte -->
	<ul class="flex justify-end gap-4 p-4">
		{#if data.user}
			<li><a href="/manage_account">Profil</a></li>
			<li><form method="POST" action="/logout">
				<button>Déconnexion</button>
			</form></li>
		{:else}
			<li><a href="/login">Connexion</a></li>
			<li><a href="/register">Inscription</a></li>
		{/if}
	</ul>
</header>

<main>
	{@render children()}
</main>

<footer class="flex justify-center gap-10 text-center p-4 bg-gray-200">
	<p>© 2025 Spaceship Inc.</p>
	<a href="/accessibility">Accessibilité</a>
</footer>