<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/img/favicon.svg';
	import icon from '$lib/assets/img/icon.png';
	import notification_icon from '$lib/assets/img/notification-icon-white.svg';
	
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gradient-to-br from-sky-700 via-sky-800 to-sky-800">
	<header class="flex flex-row justify-between items-center gap-20 px-8 py-2 
				   bg-black/30 backdrop-blur-md shadow-2xl shadow-black/10 text-white text-lg">
		<!-- Logo -->
		 <a href="/"><img class="h-15" src="{icon}" alt="" ></a>
	
		<!-- Navigation / catégories -->
		<nav>
			<ul class="flex gap-5">
				{#if data.user}
					<li class="nav-link"><a href="/vessel">Vaisseau</a></li>
					<li class="nav-link"><a href="/badges">Badges</a></li>
					<li class="nav-link"><a href="/ranking">Classement</a></li>
				{/if}
				<!-- <li class="nav-link"><a href="/news">Articles</a></li> -->
			</ul>
		</nav>
	
		<!-- Login/Compte/Notifications -->
		<ul class="flex items-center gap-5">
			{#if data.user}
				<!-- https://www.svgrepo.com/svg/532088/bell -->
				<li class="nav-link"><a href="/notifications"><img class="h-5" src="{notification_icon}" alt=""></a></li>
				<li class="nav-link font-bold"><a href="/manage_account">Profil</a></li>
				<li class="nav-link"><form method="POST" action="/logout">
					<button>Déconnexion</button>
				</form></li>
			{:else}
				<li class="nav-link font-bold"><a href="/login">Connexion</a></li>
				<li class="nav-link"><a href="/register">Inscription</a></li>
			{/if}
		</ul>
	</header>
	
	<main class="mt-10 mb-10">
		{@render children()}
	</main>
	
	<footer class="flex flex-row justify-around items-center text-center gap-20 px-16 py-4 text-sm 
				   bg-black/30 backdrop-blur-md shadow-2xl shadow-black/10 text-white/60">
		<p>© 2025 Spaceship Inc.</p>
		
		<ul class="flex flex-col gap-1 p-2">
			<li class="footer-link"><a href="/accessibility">Accessibilité</a></li>
			<li class="footer-link"><a href="/terms">Conditions d'utilisation</a></li>
			<li class="footer-link"><a href="/privacy">Politique de confidentialité</a></li>
		</ul>
	
		<!-- Réseaux -->
		<ul class="flex flex-col gap-1 p-2">
			<li class="footer-link"><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
			<li class="footer-link"><a href="https://x.com" target="_blank">X</a></li>
			<li class="footer-link"><a href="https://youtube.com" target="_blank">Youtube</a></li>
		</ul>
	</footer>
</div>