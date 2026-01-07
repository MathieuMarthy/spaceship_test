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

<header class="flex flex-row justify-between items-center gap-20 px-8 py-2 
			bg-gradient-to-br from-sky-600 to-sky-500">
	<!-- Logo -->
	 <a href="/"><img class="h-15" src="{icon}" alt="" ></a>

	<!-- Navigation / catégories -->
	<nav>
		<ul class="flex gap-5">
			{#if data.user}
				<li class="p-2"><a href="/vessel">Vaisseau</a></li>
				<li class="p-2"><a href="/badges">Badges</a></li>
				<li class="p-2"><a href="/ranking">Classement</a></li>
			{/if}
			<li class="p-2"><a href="/news">Articles</a></li>
		</ul>
	</nav>

	<!-- Login/Compte/Notifications -->
	<ul class="flex items-center gap-5">
		{#if data.user}
			<!-- https://www.svgrepo.com/svg/532088/bell -->
			<li class="p-2"><a href="/notifications"><img class="h-5" src="{notification_icon}" alt=""></a></li>
			<li class="p-2 font-bold"><a href="/manage_account">Profil</a></li>
			<li class="p-2"><form method="POST" action="/logout">
				<button>Déconnexion</button>
			</form></li>
		{:else}
			<li class="p-2 font-bold"><a href="/login">Connexion</a></li>
			<li class="p-2"><a href="/register">Inscription</a></li>
		{/if}
	</ul>
</header>

<main>
	{@render children()}
</main>

<footer class="flex flex-row justify-around items-center text-center 
			   bg-gradient-to-br from-sky-600 to-sky-500 gap-20 px-16 py-8">
	<p>© 2025 Spaceship Inc.</p>
	
	<ul class="flex flex-col gap-1 p-2">
		<li><a href="/accessibility">Accessibilité</a></li>
		<li><a href="/terms">Conditions d'utilisation</a></li>
		<li><a href="/privacy">Politique de confidentialité</a></li>
	</ul>

	<!-- Réseaux -->
	<ul class="flex flex-col gap-1 p-2">
		<li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
		<li><a href="https://x.com" target="_blank">X</a></li>
		<li><a href="https://youtube.com" target="_blank">Youtube</a></li>
	</ul>
</footer>