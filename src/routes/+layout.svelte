<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/img/favicon.svg';
	import icon from '$lib/assets/img/icon.png';
	import notification_icon from '$lib/assets/img/notification_icon.svg';
	
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
				<li><a href="/badges">Badges</a></li>
				<li><a href="/ranking">Classement</a></li>				
			{/if}
			<li><a href="/news">Articles</a></li>
		</ul>
	</nav>

	<!-- Login/Compte/Notifications -->
	<ul class="flex justify-end gap-4 p-4">
		{#if data.user}
			<!-- https://www.svgrepo.com/svg/532088/bell -->
			<li><a href="/notifications"><img class="h-5" src="{notification_icon}" alt=""></a></li>
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

<footer class="flex justify-center gap-10 text-center items-center p-4 bg-gray-200">
	<p>© 2025 Spaceship Inc.</p>
	
	<ul class="flex flex-col gap-1 p-2">
		<li><a href="/accessibility">Accessibilité</a></li>
		<li><a href="/terms">Conditions d'utilisation</a></li>
		<li><a href="/privacy">Politique de confidentialité</a></li>
	</ul>

	<!-- Réseaux -->
	<ul class="flex flex-col gap-1 p-4">
		<li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
		<li><a href="https://x.com" target="_blank">X</a></li>
		<li><a href="https://youtube.com" target="_blank">Youtube</a></li>
	</ul>
</footer>