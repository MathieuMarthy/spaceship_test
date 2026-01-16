<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/img/favicon.svg';
	import icon from '$lib/assets/img/icon.png';
	import notification_icon from '$lib/assets/img/notification-icon-white.svg';
	import { onMount } from 'svelte';
    
	let { children, data } = $props();

	function skipToContent(event: Event) {
		event.preventDefault();
		const main = document.getElementById('maincontent');
		if (!main) return;
		const firstH1 = main.querySelector('h1');
		const target: HTMLElement = (firstH1 as HTMLElement) || main;
		if (!target) return;

		const hadTabindex = target.hasAttribute('tabindex');
		if (!hadTabindex) {
			target.setAttribute('tabindex', '-1');
		}

		// Focus and ensure it's visible
		target.focus();
		if (!hadTabindex) {
			const removeTempTabindex = () => {
				target.removeAttribute('tabindex');
				target.removeEventListener('blur', removeTempTabindex);
			};
			target.addEventListener('blur', removeTempTabindex);
		}
	}

	// Add tabindex only to h1, h2, h3, p and a to limit tab stops
	onMount(() => {
		if (typeof document === 'undefined') return;
		try {
			const selector = 'h1,h2,h3,p,a';
			document.querySelectorAll(selector).forEach((el) => {
				const e = el as HTMLElement;
				if (!e.hasAttribute('tabindex')) {
					e.setAttribute('tabindex', '0');
				}
			});
		} catch (e) {
			// silent
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<span class="bg-sky-700 px-4">
	<a href="#maincontent" on:click|preventDefault={skipToContent} class="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-orange-400 text-white font-bold">Aller au contenu</a>
</span>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-sky-700 via-sky-800 to-sky-800">
	<header class="flex flex-row justify-between items-center gap-20 px-8 py-2 
				   bg-black/30 backdrop-blur-md shadow-2xl shadow-black/10 text-white text-lg">
		<!-- Logo -->
	 	<a class="p-1" href="/"><img class="h-12 w-auto block" src="{icon}" alt="Spaceship logo"></a>
	
		<!-- Navigation / catégories -->
		<nav>
			<ul class="flex gap-5">
				{#if data.user}
					<li class="nav-link"><a class="p-1" href="/vessel">Vaisseau</a></li>
					<li class="nav-link"><a class="p-1" href="/badges">Badges</a></li>
					<li class="nav-link"><a class="p-1" href="/ranking">Classement</a></li>
				{/if}
				<li class="nav-link"><a class="p-1" href="/news">Articles</a></li>
			</ul>
		</nav>

		<!-- Login/Compte/Notifications -->
		<ul class="flex items-center gap-5 h-10">
			{#if data.user}
				<!-- https://www.svgrepo.com/svg/532088/bell -->
				<li>
					<a class="bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 font-semibold px-4 py-2 rounded-md shadow text-lg text-black
					hover:bg-gradient-to-br hover:from-orange-400 hover:via-orange-500 hover:to-orange-500 hover:underline focus:underline" href="/crew">Mon équipage</a>
				</li>
				<li class="nav-link flex items-center"><a class="p-1 flex items-center" href="/notifications"><img class="h-5 w-auto block" src="{notification_icon}" alt="notifications"></a></li>
				<li class="nav-link font-bold"><a class="p-1" href="/manage_account">Profil</a></li>
				<li class="nav-link"><form method="POST" action="/logout">
					<button class="cursor-pointer p-1">Déconnexion</button>
				</form></li>
			{:else}
				<li class="nav-link font-bold"><a class="p-1" href="/login">Connexion</a></li>
				<li class="nav-link"><a class="p-1" href="/register">Inscription</a></li>
			{/if}
		</ul>
	</header>
	
	<main id="maincontent" class="flex-1">
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
			<li class="footer-link"><a href="https://youtube.com" target="_blank">Youtube</a></li>
			<li>Nous contacter: mattpac0309@gmail.com</li>
		</ul>
	</footer>
</div>