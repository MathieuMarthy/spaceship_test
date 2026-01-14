<script lang="ts">
	import { rooms } from '$lib/data/rooms';
	import type { Category } from '$lib/data/categories';

	import vessel from '$lib/assets/img/vessel/vessel.avif';
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	let imgEl: HTMLImageElement;
	let hoveredCategory: Category | null = null;

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
	<title>Vaisseau - [nom du jeu]</title>
</svelte:head>


{#if true}

<main class="min-h-90 justify-center items-start">
	<section class="w-screen flex flex-col items-center px-72 pt-4 pb-4 shadow-sm">
		<h1 class="text-6xl font-bold text-white">Vaisseau</h1>
		<div class="w-full text-white py-4">
			<p>Vous appartenez au vaisseau : <span>[nom du vaisseau]</span></p>
			<p>Choisisser le domaine auxquels vous voulez en choisissant la salle ou via le menu des catégories.</p>
		</div>
		<section class="flex flex-row justify-between gap-16 my-8">
			<article class="w-2/3 max-w-2/3 relative inline-block">
				<img
					bind:this={imgEl}
					src={vessel}
					alt="Plan du vaisseau"
					class="w-225 h-auto block"
				/>

				{#if width && height}
					<svg
						viewBox={`0 0 ${width} ${height}`}
						class="absolute inset-0 w-full h-full"
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

			<article class="w-1/3 max-w-1/3">
				<section class="border" aria-live="polite" aria-atomic="true">
					{#if hoveredCategory}	
						<span class="font-bold">{hoveredCategory.name}</span>
						<span class="text-sm" id={`desc-${hoveredCategory.id}`}>
						{hoveredCategory.description}
						</span>
					{:else}
						<p class="italic text-gray-400">
						Survolez une salle du vaisseau
						</p>
					{/if}
				</section>
				<section class="border"
					aria-live="polite"
					aria-atomic="true"
				>
					<h2 class="font-bold">Catégories</h2>
					<ul>
						{#each rooms as room}
							<li on:mouseenter={() => (hoveredCategory = room.category)}
								on:mouseleave={() => (hoveredCategory = null)}
							>
								<a href="/category/{room.category.link}"
									on:focus={() => (hoveredCategory = room.category)}
									on:blur={() => (hoveredCategory = null)}
									aria-describedby={`desc-${room.category.id}`}
								>
									{room.category.name}
								</a>
							</li>
						{/each}
					</ul>	
				</section>
			</article>
		</section>
	</section>
</main>

{:else}
	<p>Vous n'appartenez pas encore à un équipage.</p>
	<p>Créez en un <a href="">ici</a> ou attendez que le capitaine d'un équipage vous ajoute dans le sien.</p>
{/if}