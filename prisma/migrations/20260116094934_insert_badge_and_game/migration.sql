-- This is an empty migration.
INSERT INTO "Category" (name, summary, description) VALUES
(
  'Formation',
  'Parcours et ressources pour monter en compétences.',
  'Parcours pédagogiques structurés pour apprendre les bonnes pratiques du numérique responsable : modules guidés, exercices pratiques, quiz et ressources complémentaires pour monter en compétences à son rythme.'
),
(
  'Parcours UX',
  'Conception d’expériences claires et efficaces.',
  'Ateliers et activités centrés sur la conception d''expériences utilisateurs claires et efficaces : tests d''utilisabilité, architecture d''information, prototypage et recommandations pour réduire la friction tout en limitant l''empreinte numérique.'
),
(
  'Sensibilisation',
  'Actions et communications pour mobiliser les équipes.',
  'Actions de mobilisation et supports de communication pour sensibiliser les équipes : campagnes, présentations, micro-formations et défis internes visant à instaurer de bonnes pratiques et comportements durables.'
),
(
  'Impact des services numériques',
  'Conception et exploitation de services accessibles et responsables.',
  'Méthodes et outils pour concevoir et exploiter des services numériques plus accessibles, performants et responsables : audits, indicateurs d''impact, optimisation et plans d''amélioration continue.'
),
(
  'Achats',
  'Approvisionnement responsable et critères de sélection.',
  'Bonnes pratiques d''achats responsables pour le numérique : critères de sélection, évaluation fournisseurs, écoconception des cahiers des charges et stratégies d''approvisionnement durable.'
),
(
  'Fin de vie des équipements',
  'Recyclage, réemploi et réduction des déchets électroniques.',
  'Processus et solutions pour limiter les déchets électroniques : réemploi, réparation, collecte et recyclage responsables, ainsi que politiques pour prolonger la durée de vie des équipements.'
),
(
  'Equipements',
  'Choix durable, maintenance et gestion du parc matériel.',
  'Guides et recommandations pour choisir, déployer et maintenir des équipements durables : critères énergétiques, réparabilité, gestion d''inventaire et maintenance préventive.'
),
(
  'Usages',
  'Analyse des comportements pour améliorer les services.',
  'Analyses et exercices pour comprendre et améliorer les usages numériques : diagnostic des comportements, pistes d''optimisation et ateliers pour réduire la consommation et les impacts liés aux usages.'
),
(
  'Accessibilité : conformité',
  'Rendre les services utilisables par le plus grand nombre.',
  'Ressources et contrôles pour rendre les services numériques conformes et utilisables par tous : checklists d''accessibilité, tests utilisateurs, correctifs prioritaires et documentation réglementaire.'
);

INSERT INTO "Badge" (logo, name, description, tier) VALUES
('images/badges/bronze_badge.png', 'Badge de bronze Achat', 'Ce badge vous est décerné après avoir terminé le niveau bronze de la catégorie achats', 'bronze');


INSERT INTO "Game" (name, description, category_id, badge_id, points_reward) VALUES
('Achat Débutant', 'Permier niveau de la catégorie achat', 5, 1, 700);

