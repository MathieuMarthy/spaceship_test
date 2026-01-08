<script>
	import adnOuest from '$lib/assets/img/home/adnOuest.svg';
	import welcome from '$lib/assets/hello.jpeg';
</script>

<head>
	<title>Accueil - [nom du jeu]</title>
</head>

<main class="min-h-90 px-30 py-4 justify-center items-center">
	<section class="flex flex-col items-center mb-10">
		<div>
			<h1 class="items-start text-5xl font-bold text-white">Devenez un expert du numérique responsable avec [localhost].</h1>
			<p class="text-md text-white">En tant que commandant d'un vaisseau spatial isolé, vous devrez trouver des solutions à face à des problématiques du numérique.</p>
		</div>
	
		<div class="relative flex flex-col items-center">
			<img class="w-9/10 mt-6" src="{welcome}" alt="Image de présentation">
	
			<div class="absolute top-6 w-9/10 flex flex-col items-end">
				<p class="text-white">
					Serious game développé en lien avec
					<a class="hover:underline" href="https://www.adnouest.org" target="_blank" rel="noopener noreferrer">
						ADN Ouest
					</a>. Adapté à tout les niveaux
				</p>
			</div>
		
			<div class="w-9/10 flex flex-row items-end gap-2 pl-10">
				<a class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500  
						  font-semibold px-5 py-2 rounded-lg shadow text-lg
						  hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600" 
					href="/register">Commencer l'aventure ici</a>
			
				<a class="text-white/80 text-sm hover:text-white hover:underline" href="/login">Déjà inscrit ? Connectez-vous ici</a>
			</div>
		</div>
	</section>


	<hr>

	<h2>Des dizaines de défis stimulant à résoudre et bien plus à l'avenir.</h2>
	<ul aria-label="Thématiques abordées dans le jeu">
		<li>Equipements</li>
		<li>Formation</li>
		<li>Sensibilisation</li>
		<li>Accessibilité</li>
		<li>Parcours UX</li>
		<li>Usages</li>
		<li>Services numériques</li>
		<li>Achats</li>
		<li>Fin de vie des équipements</li>
	</ul>

	<hr>

	<h2>ADN Ouest, c’est quoi ?</h2>
	<a href="https://www.adnouest.org" target="_blank" rel="noopener noreferrer">
		<img class="h-15" src="{adnOuest}" alt="">
	</a>.

	<p>
	ADN Ouest est un réseau régional dédié au numérique dans l’Ouest de la France. 
	Il rassemble des entreprises, des écoles, des collectivités et des acteurs du digital 
	afin de favoriser l’innovation, le partage de compétences et le développement des 
	métiers du numérique.
	</p>

	<p>
	L’association accompagne les étudiants et les professionnels à travers des événements,
	des formations, des projets collaboratifs et des partenariats..
	</p>
</main>