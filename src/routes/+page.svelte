<script>
	import adnOuest from '$lib/assets/img/home/adnOuest.svg';
	import hello from '$lib/assets/hello.jpeg';
	import background from '$lib/assets/img/home/background.svg';
</script>

<head>
	<title>Accueil - [nom du jeu]</title>
</head>

<main class="min-h-90 justify-center items-start">
	<section class="w-screen flex flex-col items-start px-72 pt-32 pb-4 bg-sky-950 shadow-sm">
		<h1 class="items-start text-6xl font-bold text-white">Devenez un expert du numérique responsable avec [localhost].</h1>
		<div class="h-1 w-50 bg-orange-400 my-5 shadow"></div>
		<p class="text-lg text-white">Au sein d'un vaisseau spatial isolé, trouver des solutions à face à des problématiques du numérique.</p>

		<div class="w-9/10 flex flex-col items-start justify-start text-left gap-2 my-32">
			<a class="bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500  
						font-semibold px-4 py-2 rounded-md shadow text-lg text-black
						hover:bg-gradient-to-br hover:from-orange-400 hover:via-orange-500 hover:to-orange-500 hover:underline" 
				href="/register">Commencer l'aventure ici</a>
		
			<a class="text-white/80 text-sm hover:text-white hover:underline px-5" href="/login">Déjà inscrit ? Connectez-vous ici</a>
		</div>

		<div class="flex flex-col justify-center items-center w-full">
			<p class="text-white">
				Serious game développé en lien avec
				<a class="hover:underline" href="https://www.adnouest.org" target="_blank" rel="noopener noreferrer">
					ADN Ouest
				</a>. Adapté à tout les niveaux
			</p>
		</div>
	</section>

	<section class="w-screen flex flex-col items-center px-72 py-8 my-16">
		<h2 class="text-3xl font-semibold mb-16 text-white">Des dizaines de défis stimulant à résoudre et bien plus à l'avenir.</h2>
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full" 
				 aria-label="Thématiques abordées dans le jeu">
			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-black/10 text-2xl">💻</div>
					<h3 class="text-lg font-semibold">Equipements</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Choix durable, maintenance et gestion du parc matériel.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🎓</div>
					<h3 class="text-lg font-semibold">Formation</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Parcours et ressources pour monter en compétences.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🔔</div>
					<h3 class="text-lg font-semibold">Sensibilisation</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Actions et communications pour mobiliser les équipes.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">♿️</div>
					<h3 class="text-lg font-semibold">Accessibilité</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Rendre les services utilisables par le plus grand nombre.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🧭</div>
					<h3 class="text-lg font-semibold">Parcours UX</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Conception d’expériences claires et efficaces.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🔍</div>
					<h3 class="text-lg font-semibold">Usages</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Analyse des comportements pour améliorer les services.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🖥️</div>
					<h3 class="text-lg font-semibold">Services numériques</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Conception et exploitation de services accessibles et responsables.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">🛒</div>
					<h3 class="text-lg font-semibold">Achats</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Approvisionnement responsable et critères de sélection.</p>
			</article>

			<article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white
							hover:border-orange-400 hover:-translate-y-1">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 text-2xl">♻️</div>
					<h3 class="text-lg font-semibold">Fin de vie des équipements</h3>
				</div>
				<p class="mt-3 text-sm text-white/80">Recyclage, réemploi et réduction des déchets électroniques.</p>
			</article>
        </section>
	</section>

	<section class="w-screen flex flex-col items-center px-72 py-24 bg-sky-950 shadow-sm">
		<h2 class="text-3xl font-semibold mb-16 text-white">Actualités</h2>
		<section class="flex flex-row gap-8">
			<article class="max-w-1/3 rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white">
				<div class="flex flex-col items-start gap-4">
					<h3 class="text-xl font-semibold">Titre</h3>
					<div class="h-auto w-full flex items-center justify-center rounded-lg bg-black/10 p-2">
						<img src={hello} alt="">
					</div>
				</div>
				<p class="mt-3 text-sm text-white/80 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere recusandae odio neque porro consectetur saepe, minus reiciendis laboriosam cum. Quidem error natus necessitatibus ducimus laudantium delectus assumenda possimus sunt..</p>
				<a class="w-full flex justify-end text-white text-sm"
					href="">Voir plus...</a>
			</article>

			<article class="max-w-1/3 rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white">
				<div class="flex flex-col items-start gap-4">
					<h3 class="text-xl font-semibold">Titre</h3>
					<div class="h-auto w-full flex items-center justify-center rounded-lg bg-black/10 p-2">
						<img src={hello} alt="">
					</div>
				</div>
				<p class="mt-3 text-sm text-white/80 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere recusandae odio neque porro consectetur saepe, minus reiciendis laboriosam cum. Quidem error natus necessitatibus ducimus laudantium delectus assumenda possimus sunt..</p>
				<a class="w-full flex justify-end text-white text-sm"
					href="">Voir plus...</a>
			</article>

			<article class="max-w-1/3 rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white">
				<div class="flex flex-col items-start gap-4">
					<h3 class="text-xl font-semibold">Titre</h3>
					<div class="h-auto w-full flex items-center justify-center rounded-lg bg-black/10 p-2">
						<img src={hello} alt="">
					</div>
				</div>
				<p class="mt-3 text-sm text-white/80 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere recusandae odio neque porro consectetur saepe, minus reiciendis laboriosam cum. Quidem error natus necessitatibus ducimus laudantium delectus assumenda possimus sunt..</p>
				<a class="w-full flex justify-end text-white text-sm"
					href="">Voir plus...</a>
			</article>
		</section>

		<a class="flex flex-col items-center justify-start mt-16
					bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500  
					font-semibold px-4 py-2 rounded-md shadow text-lg text-black
					hover:bg-gradient-to-br hover:from-orange-400 hover:via-orange-500 hover:to-orange-500 hover:underline" 
			href="">Voir plus d'actualités</a>

	</section>

	<section class="flex flex-col items-center px-8 py-8 mx-72 my-16
				rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md text-white"
				aria-labelledby="adn-heading">
		<div class="flex flex-col lg:flex-row items-center gap-6">
			<div class="flex-1">
				<h2 id="adn-heading" class="text-2xl lg:text-3xl font-semibold text-white mb-3">ADN Ouest, c’est quoi ?</h2>
				<p class="text-white mb-4">
					ADN Ouest est un réseau régional dédié au numérique dans l’Ouest de la France.
					Il rassemble des entreprises, des écoles, des collectivités et des acteurs du digital
					afin de favoriser l’innovation, le partage de compétences et le développement des
					métiers du numérique.
				</p>

				<p class="text-white mb-6">
					L’association accompagne les étudiants et les professionnels à travers des événements,
					des formations, des projets collaboratifs et des partenariats.
				</p>

				<a href="https://www.adnouest.org" target="_blank" rel="noopener noreferrer"
				class="inline-flex items-center gap-3
						bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500  
						font-semibold px-4 py-2 rounded-md shadow text-md text-black
						hover:bg-gradient-to-br hover:from-orange-400 hover:via-orange-500 hover:to-orange-500 hover:underline">
					<img src={adnOuest} alt="Logo ADN Ouest" class="h-6 w-auto"/>
					<span>Visiter adnOuest.org</span>
				</a>
			</div>

			<div class="flex-shrink-0 lg:w-44">
				<img src={adnOuest} alt="Logo ADN Ouest" class="h-24 w-auto mx-auto lg:mx-0"/>
			</div>
		</div>
	</section>
</main>