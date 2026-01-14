<title>Accessibilité</title>

<main role="main" class="w-screen flex flex-col items-center px-72 pt-4 pb-8">
    <h1 tabindex="0" class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">Accessibilité</h1>

    <p tabindex="0" class="text-white py-4 max-w-4xl">Notre objectif est de rendre ce site utilisable par le plus grand nombre, tout en limitant son empreinte numérique. Cette page décrit nos choix d'accessibilité, les bonnes pratiques appliquées et les moyens de nous signaler un problème.</p>

    <section aria-labelledby="principes" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="principes" class="text-2xl font-semibold text-white mb-3">Principes généraux</h2>
        <ul class="list-disc pl-5 text-white">
            <li><p>Structure sémantique claire : titres, listes et sections pour faciliter la navigation.</p></li>
            <li><p>Navigation clavier complète : toutes les fonctionnalités sont accessibles sans souris.</p></li>
            <li><p>Contraste adapté : textes lisibles pour les personnes malvoyantes.</p></li>
            <li><p>Alternatives textuelles pour les médias non essentiels et contrôle sur la lecture automatique.</p></li>
            <li><p>Performance et sobriété : images optimisées, polices limitées et chargement différé.</p></li>
        </ul>
    </section>

    <section aria-labelledby="contraste" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="contraste" class="text-2xl font-semibold text-white mb-3">Couleurs et contraste</h2>
    <p tabindex="0" class="text-white">Nous suivons des ratios de contraste suffisants (WCAG AA) pour le texte normal et les éléments interactifs. Les éléments décoratifs utilisent des contrastes plus faibles seulement lorsqu'ils ne portent pas d'information essentielle.</p>
        <ul class="list-disc pl-5 text-white mt-3">
            <li><p>Couleurs principales vérifiées pour un ratio ≥ 4.5:1 pour le texte normal.</p></li>
            <li><p>Alternatives visuelles (icônes + texte) pour les informations importantes.</p></li>
        </ul>
    </section>

    <section aria-labelledby="navigation-clavier" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="navigation-clavier" class="text-2xl font-semibold text-white mb-3">Navigation clavier</h2>
    <p tabindex="0" class="text-white">Toutes les pages et contrôles sont utilisables au clavier : tabulation logique, ordre cohérent et indicateur de focus visible. Nous évitons de piéger le focus et fournissons des raccourcis clairs lorsque pertinent.</p>
    <details class="mt-3 bg-white/3 p-3 rounded"><summary tabindex="0" class="text-white font-medium">Checklist rapide</summary>
            <ul class="list-disc pl-5 mt-2 text-white">
                <li><p>Ordre de tabulation logique</p></li>
                <li><p>Focus visible et contrasté</p></li>
                <li><p>Aucun piège de focus dans les dialogues/modaux</p></li>
            </ul>
        </details>
    </section>

    <section aria-labelledby="semantique" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="semantique" class="text-2xl font-semibold text-white mb-3">Sémantique et ARIA</h2>
    <p tabindex="0" class="text-white">Nous utilisons des balises HTML sémantiques (&lt;header&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;) et des attributs ARIA seulement lorsqu'ils améliorent l'accessibilité. Les rôles et labels sont testés avec des lecteurs d'écran.</p>
    </section>

    <section aria-labelledby="images" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="images" class="text-2xl font-semibold text-white mb-3">Images et médias</h2>
    <p tabindex="0" class="text-white">Les images informatives incluent toujours un attribut <code class="bg-black/20 px-1 rounded">alt</code> descriptif. Les médias sonores et vidéo ne démarrent pas automatiquement et proposent des contrôles pour la lecture, le volume et les sous-titres quand disponibles.</p>
    </section>

    <section aria-labelledby="formulaires" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="formulaires" class="text-2xl font-semibold text-white mb-3">Formulaires et erreurs</h2>
    <p tabindex="0" class="text-white">Les champs de formulaire ont des labels explicites et des instructions claires. Les erreurs sont indiquées textuellement et visuellement, avec des suggestions de correction. Les messages d'erreur sont associés au champ via <code class="bg-black/20 px-1 rounded">aria-describedby</code>.</p>
    </section>

    <section aria-labelledby="tests-outils" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="tests-outils" class="text-2xl font-semibold text-white mb-3">Tests et outils</h2>
    <p tabindex="0" class="text-white">Nous combinons des contrôles automatisés (axe, Lighthouse) et des tests manuels (navigateur clavier, lecteur d'écran) pour vérifier la conformité. Les tests incluent aussi des vérifications de performance et de consommation réseau pour respecter notre objectif d'éco-conception.</p>
    </section>

    <section aria-labelledby="eco" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="eco" class="text-2xl font-semibold text-white mb-3">Éco-conception</h2>
    <p tabindex="0" class="text-white">Au-delà de l'accessibilité, nous réduisons l'empreinte numérique du site : images optimisées (AVIF/WebP), chargement différé, polices limitées, mise en cache efficace et suppression de scripts non essentiels. L'objectif est d'offrir une expérience rapide et durable pour tous.</p>
        <ul class="list-disc pl-5 text-white mt-3">
            <li><p>Pas d'autoplay média</p></li>
            <li><p>Lazy-loading pour les images hors-viewport</p></li>
            <li><p>Bundles JS minimisés et chargement asynchrone</p></li>
        </ul>
    </section>

    <section aria-labelledby="contact" class="w-full max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/6 mt-6">
    <h2 tabindex="0" id="contact" class="text-2xl font-semibold text-white mb-3">Signaler un problème / contact</h2>
    <p tabindex="0" class="text-white">Si vous rencontrez un problème d'accessibilité ou souhaitez proposer une amélioration, merci de nous le signaler :</p>
        <ul class="list-disc pl-5 text-white mt-3">
            <li tabindex="0"><p>Ouvrez une issue sur le dépôt du projet (<span class="font-mono">Senk0o/spaceship</span>),</p></li>
            <li tabindex="0"><p>ou utilisez le formulaire de contact du site si disponible.</p></li>
        </ul>
    <p tabindex="0" class="text-white mt-3">Indiquez la page concernée, le navigateur et l'outil d'assistance utilisé (ex. NVDA, VoiceOver) pour nous aider à reproduire et corriger le problème.</p>
    </section>

    <footer class="flex flex-col w-full max-w-4xl text-sm text-white/70 mt-6">
    <p tabindex="0">Cette page explique nos engagements et pratiques.<br>Elle ne remplace pas une déclaration officielle d'accessibilité lorsqu'elle est exigée par la réglementation.</p>
    <p tabindex="0" class="self-end">Dernière mise à jour : Janvier 2026</p>
    </footer>

</main>