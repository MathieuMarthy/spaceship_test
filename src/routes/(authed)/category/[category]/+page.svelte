<script lang="ts">
	import type { Category } from '$lib/data/categories';
	import { levels } from '$lib/data/levels';
  	export let data: { categoryAct: Category };
</script>

<svelte:head>
	<title>{data.categoryAct.name} - [nom du jeu]</title>
</svelte:head>

<main class="min-h-90 justify-center items-start">
	<a href="/vessel" class="bg-gradient-to-r from-red-500 via-red-500 to-red-600 hover:from-red-600 hover:via-red-600 hover:to-red-700 hover:underline 
							 absolute shadow-lg font-semibold text-white rounded-lg py-2 px-4 m-4">
		← Retourner au vaisseau
	</a>
	<section class="w-screen flex flex-col items-center px-72 pt-4 pb-4">
		<h1 class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">{data.categoryAct.name ?? '...'}</h1>
		<p class="text-white py-4">{data.categoryAct.description ?? ''}</p>
		
		<section class="flex flex-col gap-4 p-4" 
			aria-labelledby="levels-title">
			{#if data.categoryAct.levels?.length}
				<p class="text-lg text-white">Liste des niveau disponibles :</p>
				<ul class="flex flex-col gap-4">
					{#each data.categoryAct.levels as level}
						<li class="text-white">
							<article class="flex flex-col gap-2 p-4 rounded-2xl 
											bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">
								<h2 class="bg-black/20 py-1 px-2 rounded-lg">{level.name}</h2>
								<p>{level.description}</p>
								<div class="flex flex-row self-end items-center gap-4 mt-4">
									<span class="sr-only">Durée estimée :</span><p>⏳ {level.duration} minutes</p> 
									<a href="../games/{data.categoryAct.link}-{level.link}"
									class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500 text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
									aria-label={`Jouer au niveau ${level.name}`}
									>
									Jouer
									</a>
								</div>
							</article>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="bg-red-500/50 px-2 py-1 mt-8 text-center font-semibold text-white text-lg rounded-lg" role="status">Aucun niveau disponible pour le moment.</p>
			{/if}
		</section>
	</section>
</main>