export type Level = {
	name: string;
	level: string;
	description: string;
	link: string;
	duration?: number;
};

export const levels: Record<string, Level> = {
	formation_beginner: {
		name: 'Initiation à la formation',
		level: 'beginner',
		description: "Apprenez les notions fondamentales du numérique responsable : impacts environnementaux et sociaux, bonnes pratiques simples à appliquer et conseils pour sensibiliser vos équipes.",
		link: 'beginner',
		duration: 5,
	},
	formation_intermediate: {
		name: 'Renforcement des compétences en formation',
		level: 'intermediate',
		description: "Renforcez vos compétences pédagogiques : concevoir des modules adaptés, animer des ateliers interactifs et mesurer l'assimilation pour favoriser l'adoption des bonnes pratiques.",
		link: 'intermediate',
		duration: 15,
	},
	formation_expert: {
		name: 'Maîtrise de la formation',
		level: 'expert',
		description: "Devenez référent·e en formation au numérique responsable : construire un parcours complet, former des formateurs, évaluer l'impact et intégrer la thématique dans la stratégie de l'organisation.",
		link: 'expert',
		duration: 20,
	},
	purshases_beginner: {
		name: 'Initiation aux achats responsables',
		level: 'beginner',
		description: "Comprenez les enjeux des achats responsables numériques : critères de base pour choisir des équipements et services moins impactants et premières étapes pour intégrer ces critères aux achats.",
		link: 'beginner',
		duration: 5,
	},
	purshases_intermediate: {
		name: 'Approfondissement des achats responsables',
		level: 'intermediate',
		description: "Mettez en place des processus d'achat plus responsables : critères techniques et environnementaux, évaluation des fournisseurs et outils pour prioriser les options à faible impact.",
		link: 'intermediate',
		duration: 15,
	},
	purshases_expert: {
		name: 'Stratégie achats responsables',
		level: 'expert',
		description: "Déployez une politique d'achat durable : définir des indicateurs, piloter des audits fournisseurs, négocier des engagements bas-carbone et intégrer l'innovation circulaire.",
		link: 'expert',
		duration: 20,
	},
};
