import type { Level } from './levels';
import { levels } from './levels';

export type Category = {
    id: string;
    name: string;
    description: string;
    short_description?: string;
    link: string;
    levels?: Level[];
    icon: string;
};

export const categories: Record<string, Category> = {
    cafeteria: {
        id: 'cafeteria',
        name: 'Formation',
        description: "Parcours pédagogiques structurés pour apprendre les bonnes pratiques du numérique responsable : modules guidés, exercices pratiques, quiz et ressources complémentaires pour monter en compétences à son rythme.",
        short_description: 'Parcours et ressources pour monter en compétences.',
        link: 'formation',
        levels: [levels.formation_beginner, levels.formation_intermediate, levels.formation_expert],
        icon: '🎓'
    },
    navigation: {
        id: 'navigation',
        name: 'Parcours UX',
        description: "Ateliers et activités centrés sur la conception d'expériences utilisateurs claires et efficaces : tests d'utilisabilité, architecture d'information, prototypage et recommandations pour réduire la friction tout en limitant l'empreinte numérique.",
        short_description: 'Conception d’expériences claires et efficaces.',
        link: 'ux-course',
        icon: '🧭'
    },
    communication: {
        id: 'communication',
        name: 'Sensibilisation',
        description: "Actions de mobilisation et supports de communication pour sensibiliser les équipes : campagnes, présentations, micro-formations et défis internes visant à instaurer de bonnes pratiques et comportements durables.",
        short_description: 'Actions et communications pour mobiliser les équipes.',
        link: 'awareness',
        icon: '🔔'
    },
    admin_1: {
        id: 'admin_1',
        name: "Impact des services numériques",
        description: "Méthodes et outils pour concevoir et exploiter des services numériques plus accessibles, performants et responsables : audits, indicateurs d'impact, optimisation et plans d'amélioration continue.",
        short_description: 'Conception et exploitation de services accessibles et responsables.',
        link: 'improve-digital-services-impact',
        icon: '🖥️'
    },
    admin_2: {
        id: 'admin_2',
        name: 'Achats',
        description: "Bonnes pratiques d'achats responsables pour le numérique : critères de sélection, évaluation fournisseurs, écoconception des cahiers des charges et stratégies d'approvisionnement durable.",
        short_description: 'Approvisionnement responsable et critères de sélection.',
        link: 'purchases',
        levels: [levels.purshases_beginner, levels.purshases_intermediate, levels.purshases_expert],
        icon: '🛒'
    },
    storage: {
        id: 'storage',
        name: 'Fin de vie des équipements',
        description: "Processus et solutions pour limiter les déchets électroniques : réemploi, réparation, collecte et recyclage responsables, ainsi que politiques pour prolonger la durée de vie des équipements.",
        short_description: 'Recyclage, réemploi et réduction des déchets électroniques.',
        link: 'equipment-end-of-life-management',
        icon: '♻️'
    },
    reactor: {
        id: 'reactor',
        name: 'Equipements',
        description: "Guides et recommandations pour choisir, déployer et maintenir des équipements durables : critères énergétiques, réparabilité, gestion d'inventaire et maintenance préventive.",
        short_description: 'Choix durable, maintenance et gestion du parc matériel.',
        link: 'equipment',
        icon: '💻'
    },
    electrical: {
        id: 'electrical',
        name: 'Usages',
        description: "Analyses et exercices pour comprendre et améliorer les usages numériques : diagnostic des comportements, pistes d'optimisation et ateliers pour réduire la consommation et les impacts liés aux usages.",
        short_description: 'Analyse des comportements pour améliorer les services.',
        link: 'usages',
        icon: '🔍'
    },
    medbay: {
        id: 'medbay',
        name: 'Accessibilité : conformité',
        description: "Ressources et contrôles pour rendre les services numériques conformes et utilisables par tous : checklists d'accessibilité, tests utilisateurs, correctifs prioritaires et documentation réglementaire.",
        short_description: 'Rendre les services utilisables par le plus grand nombre.',
        link: 'accessibility-compliance',
        icon: '♿️'
    }
};
