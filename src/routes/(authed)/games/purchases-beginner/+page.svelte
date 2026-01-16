<script>
    import GameStep from "$lib/components/GameStep.svelte";
    
    let step = $state();
    let steps = $state([]);

    let audioTime = $state(0);

    function handleValidate(newStep, audioPosition = 0) {
        audioTime = audioPosition;

        step = newStep;
        steps.push(step);
    }

    function resetGame() {
        step = null;
        steps = [];
    }

    function gameFinished() {
        // Logic to handle game completion, e.g., navigate to next level
    }
</script>

<p class="bg-black/10 text-white text-sm px-2 py-1 m-2 rounded-lg">Etapes : {steps.join(' > ')}</p>
<section class="flex justify-center mt-8">
    {#if !step}
        <button class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500 text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
                onclick={() => {handleValidate("0_0")}} >
            Commencer le jeu
        </button>
    {/if}

{#if step == "0_0"}
    <GameStep
        nextStep="1"
        text="IA : Atterrissage en cours..."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="porte de vaisseau spatiale fermée"
        audio="/game/purchases-beginner/audio/spaceship-landing.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "1_0"}
    <GameStep
        nextStep="2"
        text="IA : Atterrissage réussi, ouverture de la porte du vaisseau."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte commence à s'ouvrir"
        audio="/game/purchases-beginner/audio/spaceship-door-closing.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "2_0"}
    <GameStep
        nextStep="4"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte continue de s'ouvrir"
        audio="/game/purchases-beginner/audio/spaceship-door-opening.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
<!-- {#if step == "3_0"}
    <GameStep
        nextStep="4"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt=""
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if} -->
{#if step == "4_0"}
    <GameStep
        nextStep="6"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte est ouverte et une lumère vive entre dans le vaisseau"
        duration=1
        onValidate={handleValidate}
    />
{/if}
<!-- {#if step == "5_0"}
    <GameStep
        nextStep="6"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière est éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=1
        onValidate={handleValidate}
    />
{/if} -->
{#if step == "6_0"}
    <GameStep
        nextStep="7"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/footsteps-metal.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "7_0"}
    <GameStep
        nextStep="8"
        text="IA : Vous vous trouvez actuellement sur la planète Koziris."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "8_0"}
    <GameStep
        nextStep="9"
        text="IA : Le kepa, un fruit très prisé, pousse uniquement ici."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "9_0"}
    <GameStep
        nextStep="10"
        text="IA : Notre entreprise souhaite en récupérer un maximum afin de les revendre sur la planète Luxuria, la planète regroupant les familles les plus riches de la galaxie."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "10_0"}
    <GameStep
        nextStep="11"
        text="IA : Acceptez-vous de remplir cette mission mission ?"
        choices={[
            "Oui, je ferai le nécessaire pour mener à bien cette mission.",
            "Je me sens obligé d'accepter...",
            "Je préfèrerais rentrer chez moi."
        ]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_0"}
    <GameStep
        nextStep="12"
        text="IA : Parfait, vous semblez comprendre l'importance de cette mission auprès de l'entreprise."
        choices={["Commence par me dire où se trouve le contact."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_1"}
    <GameStep
        nextStep="12"
        text="IA : La famille Gouraud, principale actionnaire de l'entreprise, a décidé de vous accorder leur confiance en vous nommant responsable de ce vaisseau. Cela serait dommage de la décevoir."
        choices={["D'accord c'est compris. Dis-moi où se trouve le contact."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_2"}
    <GameStep
        nextStep="11_2"
        text="IA : Je tiens à vous rappeler que conformément aux lois en vigueur sur la planète Luxuria, votre registre d'identité est détenu par l'entreprise."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_2_0"}
    <GameStep
        nextStep="12"
        text="IA : De plus, la famille Gouraud, principale actionnaire de l'entreprise, a décidé de vous accorder leur confiance en vous nommant responsable de ce vaisseau. Cela serait dommage de la décevoir."
        choices={["C'est bon j'ai compris, Dis moi où je dois me rendre pour rencontrer notre contact."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}

{#if step == "12_0"}
    <GameStep
        nextStep="13"
        text="IA : Recherche en cours."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        duration=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "13_0"}
    <GameStep
        nextStep="14"
        text="IA : Recherche en cours.."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        duration=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "14_0"}
    <GameStep
        nextStep="14_0"
        text="IA : Recherche en cours..."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        duration=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "14_0_0"}
    <GameStep
        nextStep="15"
        text="IA : Recherche en cours..."
        choices={["bon..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "15_0"}
    <GameStep
        nextStep="16"
        text="IA : Recherche terminée. Notre contact se situe à un kilomètre à l'Ouest de votre position."
        choices={["Bien, allons-y."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "16_0"}
    <GameStep
        nextStep="17"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        duration=2
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0"}
    <GameStep
        nextStep="17_0"
        text="IA : Pour votre développement personnel, souhaitez-vous en savoir plus sur la planète Koziris ?"
        choices={["Pourquoi pas, ça m'occupera.", "Je préfèrerais me concentrer sur la mission."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0"}
    <GameStep
        nextStep="17_0_0"
        text="IA : Koziris a majoritairement un climat aride, sa seule zone habitable se situe dans une cuvette entourée de reliefs qui protège des vents violents sur le reste de la planète. C'est ici que vous vous trouvez."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0"}
    <GameStep
        nextStep="17_0_0_0"
        text="IA : La composition unique de son atmosphère rend possible la culture du kepa. Celui-ci aurait la capacité d'allonger la durée de vie si consommé régulièrement."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0"
        text="IA : C'est la seule plante qui est adaptée à cet environnement extrême. Elle est ainsi la source unique de nourriture pour la population."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0"
        text="IA : Celle-ci est l'une des plus pauvres de la galaxie suite aux récentes interventions violentes de diverses organisations justement intéressées par le contrôle de la zone de culture du fruit."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0_0"
        text="IA : Dernièrement, c'est la faction Al'Cata qui a pris le contrôle de l'unique culture, après avoir commis de nombreuses exactions. La population est donc entièrement dépendante de cette organisation."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0_0_0"
        text="IA : Cependant, l'objectif d'Al'Cata est de revendre sa production au plus offrant."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="18"
        text="IA : Notre contact n'est autre que Catmandou, le chef de la faction."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_1"}
    <GameStep
        nextStep="17_0_1"
        text="IA : C'est bien dommage de ne pas vous y intéresser, l'entreprise apprécie quand ses employés se sensibilisent à des thématiques RSE..., jusqu'à une certaine mesure."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_1_0"}
    <GameStep
        nextStep="18"
        text="IA : ..."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "18_0"}
    <GameStep
        nextStep="18_0"
        text="IA : Vous êtes arrivé, le bâtiment doit se situer en face de vous."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}

{#if step == "18_0_0"}
    <GameStep
        nextStep="19"
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/ambient-wind-blowing.mp3"
        audioTime={audioTime}
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "19_0"}
    <GameStep
        nextStep="20"
        text="Gardien : Vous êtes là pour acheter ?"
        choices={["Oui"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "20_0"}
    <GameStep
        nextStep="21"
        text="Gardiens : Entrez, le chef vous attend."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "21_0"}
    <GameStep
        nextStep="22"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "22_0"}
    <GameStep
        nextStep="23"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "23_0"}
    <GameStep
        nextStep="24"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "24_0"}
    <GameStep
        nextStep="25"
        text="Chef d'Al'Cata : Asseyez-vous, ce sera rapide."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "25_0"}
    <GameStep
        nextStep="26"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "26_0"}
    <GameStep
        nextStep="27"
        text="Chef d'Al'Cata : Notre marché tient toujours ? Tout le stock de kepa contre les armes ?"
        choices={["Des armes ? Nous n'avons pas ramené..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "27_0"}
    <GameStep
        nextStep="28"
        text="IA : Je ne vous avais pas prévenu afin de garantir la confidentialité de la mission, mais notre entreprise a conclu un accord avec Al'Cata."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "28_0"}
    <GameStep
        nextStep="29"
        text="IA : Nous n'étions pas les seuls à être intéressés par ces fruits et nous avons donc conclu un arrangement avec Al'Cata. Les fruits en échange de simples armes."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "29_0"}
    <GameStep
        nextStep="30"
        text="Chef d'Al'Cata : Vous avez bien les armes ?"
        choices={["Oui, nous les avons amenées comme convenu.", "Euh non, on les a oubliés, zut !"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0"}
    <GameStep
        nextStep="30_0"
        text="Chef d'Al'Cata : Parfait, c'est un plaisir que d'avoir des partenaires aussi intéressés par ces fruits."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0"}
    <GameStep
        nextStep="30_0_0"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0_0"}
    <GameStep
        nextStep="30_0_0_0"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0_0_0"}
    <GameStep
        nextStep="30_0_0_0_0"
        text="IA : Félicitations ! Vous avez réussi votre mission en achetant l'ensemble du stock de fruits pour l'entreprise."
        choices={["Merci"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt=""
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0_0_0_0"}
    <GameStep
        nextStep="30_0_0_0_0_0"
        text="IA : Pour information, quelques semaines après votre passage, durant lequel vous n’avez laissé aucun kepa, la population affamée se révoltera contre le groupe Al'Cata."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0_0_0_0_0"}
    <GameStep
        nextStep="30_0_0_0_0_0_0"
        text="IA : En réponse, Al'Cata réprimanda la population via l'usage d'armes dont la provenance est inconnue."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="0"
        text="Fin du niveau. Vous n'avez pas réussi ce niveau, peut-être faut-il analyser plus en profondeur l'environnement rencontré."
        choices={["Recommencer le niveau"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={resetGame}
    />
{/if}
{#if step == "30_1"}
    <GameStep
        nextStep="30_1"
        text="Chef d'Al'Cata : Quoi ? Vous n'avez pas les armes ?"
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0"}
    <GameStep
        nextStep="30_1_0"
        text="Chef d'Al'Cata : Dans ce cas, partez. Je finirai par trouver une autre entreprise intéressée par le fruit."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0"}
    <GameStep
        nextStep="30_1_0_0"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0_0"}
    <GameStep
        nextStep="30_1_0_0_0"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0_0_0"}
    <GameStep
        nextStep="30_1_0_0_0_0"
        text="IA : Vous avez fait échouer la mission. L'entreprise est déçue de vous. A votre retour, la famille Gouraud vous fera part de son mécontentement. Je suis heureuse de vous avoir accompagné."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0_0_0_0"}
    <GameStep
        nextStep="30_1_0_0_0_0_0"
        text="IA : Pour information, malgré cet échec, la population pauvre de la planète ne souffrira pas de la famine car il y aura suffisamment de kepa."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0_0_0_0_0"}
    <GameStep
        nextStep="30_1_0_0_0_0_0_0"
        text="IA : De plus, Al'Cata sera affaibli et ne sera pas en mesure de continuer d'oppresser la population. La faction finira par se briser de l'intérieur en plusieurs petits groupes affaiblis."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "30_1_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="1000"
        text="Fin du niveau. Félicitations, vous avez réussi le niveau. Vous pouvez passer au suivant pour explorer de nouvelles situations."
        choices={["Terminer le niveau"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={gameFinished}
    />
{/if}
</section>