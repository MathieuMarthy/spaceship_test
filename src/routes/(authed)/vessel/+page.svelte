<script lang="ts">
	import { rooms } from '$lib/data/rooms';
	import type { Category } from '$lib/data/categories';

	import vessel from '$lib/assets/img/vessel/vessel.avif';
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	let imgEl: HTMLImageElement;
	let hoveredCategory: Category | null = null;
	export let data;

	onMount(() => {
		if (imgEl.complete) {
			width = imgEl.naturalWidth;
			height = imgEl.naturalHeight;
		} else {
			imgEl.onload = () => {
				width = imgEl.naturalWidth;
				height = imgEl.naturalHeight;
			};
		}
	});
</script>

<svelte:head>
	<title>Vaisseau - Green Odyssey</title>
</svelte:head>


{#if true}

<main class="min-h-90 justify-center items-start">
	<section class="w-screen flex flex-col items-center px-72 pt-4 pb-4">
		<h1 class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">Bienvenue à bord {data.user.rank === 'captain' ? 'capitaine' : 'voyageur'} !</h1>
		{#if data.user.crewId !== null}
				<h4 class="text-xl font-semibold text-white">Vous embarquez sur le <span>{data.crew.vaisseau}</span></h4>
			{:else}
				<h4 class="text-xl font-semibold text-white">Vous n'êtes affectés à aucun vaisseau</h4>

		{/if}
		<div class="w-full text-white py-4">
			<p>Choisisser le domaine auxquels vous voulez en choisissant la salle ou via le menu des catégories.</p>				
			<article class="bg-black/10 mt-4 py-1 px-2 rounded-lg min-h-14" aria-live="polite" aria-atomic="true"> 
					{#if hoveredCategory}	
						<span class="font-bold">{hoveredCategory.name}</span>
						<span class="text-sm" id={`desc-${hoveredCategory.id}`}>
						{hoveredCategory.description}
						</span>
					{:else}
						<span class="italic text-sky-200">
						Survolez une salle du vaisseau
						</span>
					{/if}
			</article>
		</div>
		<section class="flex flex-row justify-between gap-16 my-8">
			<article class="w-2/3 relative inline-block">
				<img
					bind:this={imgEl}
					src={vessel}
					alt="Plan du vaisseau"
				/>

				{#if width && height}
					<svg
						viewBox={`0 0 ${width} ${height}`}
						class="absolute inset-0"
						preserveAspectRatio="xMidYMid meet"
					>
						{#each rooms as room}
							<a href="/category/{room.category.link}"
								tabindex="-1"
								on:mouseenter={() => (hoveredCategory = room.category)}
								on:mouseleave={() => (hoveredCategory = null)}
							>
								<polygon
									class="cursor-pointer hover:fill-blue-500/30 fill-blue-300/10"
									points={room.points}
								/>
							</a>
						{/each}
					</svg>
				{/if}
			</article>

			<article class="w-1/3 flex flex-col text-center bg-white/10 border border-white/6 shadow-lg backdrop-blur-md  rounded-xl p-4">
				<h2 class="font-bold text-white text-xl mb-4">Catégories</h2>
				<ul class="flex flex-col gap-2">
					{#each rooms as room}
						<li on:mouseenter={() => (hoveredCategory = room.category)}
							on:mouseleave={() => (hoveredCategory = null)}
						>			
							<a href="/category/{room.category.link}"
								on:focus={() => (hoveredCategory = room.category)}
								on:blur={() => (hoveredCategory = null)}
								aria-describedby={`desc-${room.category.id}`}
								class="flex items-center gap-4 rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-2 text-white
										hover:border-orange-400"
							>
								<div class="h-8 w-8 flex items-center justify-center rounded-lg bg-black/10 text-md">{room.category.icon}</div>
								<h3 class="text-sm font-semibold">{room.category.name}</h3>
							</a>
						</li>
					{/each}
				</ul>
			</article>
		</section>
	</section>
</main>

{:else}
	<p>Vous n'appartenez pas encore à un équipage.</p>
	<p>Créez en un <a href="">ici</a> ou attendez que le capitaine d'un équipage vous ajoute dans le sien.</p>
{/if}