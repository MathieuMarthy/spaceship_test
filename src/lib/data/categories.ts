export type Category = {
	id: string;
	name: string;
	description: string;
	link?: string;
};

export const categories: Record<string, Category> = {
	cafeteria: {
		id: 'cafeteria',
		name: 'Formation',
		description: 'description_catégorie',
		link: 'formation'
	},
	navigation: {
		id: 'navigation',
		name: 'Parcours UX',
		description: 'description_catégorie',
		link: 'ux-course'
	},
	communication: {
		id: 'communication',
		name: 'Sensibilisation',
		description: 'description_catégorie',
		link: 'awareness'
	},
    admin_1: {
		id: 'admin_1',
		name: 'Améliorer l\'impact de mes services numériques',
		description: 'description_catégorie',
		link: 'improve-digital-services-impact'
	},
    admin_2: {
		id: 'admin_2',
		name: 'Achats',
		description: 'description_catégorie',
		link: 'purchases'
	},
    storage: {
		id: 'storage',
		name: 'Gestion de la fin de vie des équipements',
		description: 'description_catégorie',
		link: 'equipment-end-of-life-management'
	},
    reactor: {
		id: 'reactor',
		name: 'Equipements',
		description: 'description_catégorie',
		link: 'equipment'
	},
    electrical: {
		id: 'electrical',
		name: 'Usages',
		description: 'description_catégorie',
		link: 'usages'
	},
    medbay: {
		id: 'medbay',
		name: 'Accessibilité : conformité',
		description: 'description_catégorie',
		link: 'accessibility-compliance'
	}
};
