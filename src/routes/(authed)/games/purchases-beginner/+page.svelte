<script>
    import GameStep from "$lib/components/GameStep.svelte";
    
    let step = $state();
    let steps = $state([]);

    function handleValidate(newStep) {
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

<p>Etapes : {steps.join(' > ')}</p>
{#if !step}
    <button onclick={() => {handleValidate("0_0")}} >
        Commencer le jeu
    </button>
{/if}

{#if step == "0_0"}
    <GameStep
        nextStep="1"
        text="IA : Atterrissage en cours"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="porte de vaisseau spatiale fermée"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "1_0"}
    <GameStep
        nextStep="2"
        text="IA : Aterrissage réussi, ouverture de la porte"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte commence à s'ouvrir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "2_0"}
    <GameStep
        nextStep="3"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte continue de s'ouvrir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "3_0"}
    <GameStep
        nextStep="4"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt=""
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "4_0"}
    <GameStep
        nextStep="5"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la porte est ouverte et une lumère vive entre dans le vaisseau"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "5_0"}
    <GameStep
        nextStep="6"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière est éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "6_0"}
    <GameStep
        nextStep="7"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "7_0"}
    <GameStep
        nextStep="8"
        text="IA : Vous vous trouvez actuellement sur la planete Koziris."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "8_0"}
    <GameStep
        nextStep="9"
        text="IA : Sur cette planete pousse un fruit unique, le kepa."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "9_0"}
    <GameStep
        nextStep="10"
        text="IA : Du fait de sa valeur élevée, l'entreprise place sa confiance en vous afin d'en acheter un maximum afin de le revendre sur la planete Luxuria, la planête regroupant le plus de richesse de la galaxie."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "10_0"}
    <GameStep
        nextStep="11"
        text="IA : Acceptez-vous cette mission ?"
        choices={[
            "Oui, je ferais tout pour réussir cette mission.",
            "Je suis bien obligé d'accepter.",
            "Je préfèrerais rentrer chez moi."
        ]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_0"}
    <GameStep
        nextStep="12"
        text="IA : Très bien, vous semblez comprendre de l'interêt de cette mission pour l'entreprise."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_1"}
    <GameStep
        nextStep="12"
        text="IA : Vous êtes en charge d'un vaisseau grace à la bienveillance de notre plus gros actionnaire sur Luxuria, la famille Gouraud. Tachez de ne pas le décevoir."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_2"}
    <GameStep
        nextStep="11_2"
        text="IA : Je tiens à vous rappeler que conformément aux loi en vigueur sur la planete Luxuria, votre registre d'identité est détenue par l'entreprise."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "11_2_0"}
    <GameStep
        nextStep="12"
        text="IA : De plus, si vous êtes en charge d'un vaisseau c'est grace à la bienveillance de notre plus gros actionnaire sur Luxuria, la famille Gouraud, qui voit un potentiel en vous. Tachez de ne pas le décevoir."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}

{#if step == "12_0"}
    <GameStep
        nextStep="13"
        text="IA : Recherche en cours..."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "13_0"}
    <GameStep
        nextStep="14"
        text="IA : Recherche en cours... recherche en cours..."
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "14_0"}
    <GameStep
        nextStep="15"
        text="IA : Recherche en cours... recherche en cours... recherche en cours..."
        choices={["bon..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "15_0"}
    <GameStep
        nextStep="16"
        text="IA : Recherche terminée. Notre contact nous attend à un kilomètre à l'Ouest de votre position."
        choices={["Bien, allons-y"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "16_0"}
    <GameStep
        nextStep="17"
        text=""
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0"}
    <GameStep
        nextStep="17_0"
        text="IA : Pour  votre développement personel, souhaitez-vous en sevoir plus sur la planete Koziris ?"
        choices={["Pourquoi pas ca m'occupera", "je préfèrerais qu'on se concentre sur la mission"]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0"}
    <GameStep
        nextStep="17_0_0"
        text="IA : Koziris à un climat aride, seul zone vivable dans une cuvette entourée de reliefs élevé protégé des vents violents sur le reste de la planète, où vous vous trouvé."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0"}
    <GameStep
        nextStep="17_0_0_0"
        text="IA : La composition unique de son athmosphère rend possible la culture du kepa, Celui-ci aurait la capacité d'allonger la durée de vie si consommé régulièrement."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0"
        text="IA : C'est la seule plante qui est adapté à l'envirronement et elle est ainsi la source unique en nourriture et en eau pour la population."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0"
        text="IA : Celle-ci est l'une des plus pauvre de la galaxy suites aux récentes interventions violente d'organisme extérieure interressé par le controle de la culture du fruit."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0_0"
        text="IA : Actuellement c'est la faction Al'Cata qui à pris le controle de l'unique culture après de nombreux exactions. La population est donc entièrment dépendant de leur production."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="17_0_0_0_0_0_0_0"
        text="IA : Cependant, Al'Cata préfère revendre l'ensemble de sa production aux entreprise car le marché est plus lucratif."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_0_0_0_0_0_0_0"}
    <GameStep
        nextStep="18"
        text="IA : Notre contact n'est autre que [nom de chef chat qui fais peur], le chef de la faction connu pour son comportement manipulateur."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "17_0_1"}
    <GameStep
        nextStep="17_0_1"
        text="IA : C'est dommage de ne pas vouloir s'interresser à cette planete, l'entreprise apprecie quand ses employés s'interresse à leur enviroonement de travaille... Jusqu'a une certaine mesures."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
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
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}
{#if step == "18_0"}
    <GameStep
        nextStep="18_0"
        text="IA : C'est bon nous sommes arrivés à destination."
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={handleValidate}
    />
{/if}

{#if step == "18_0_0"}
    <GameStep
        nextStep="19"
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="la lumière deviens moins éblouissante"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "19_0"}
    <GameStep
        nextStep="20"
        text="Gardiens : Vous êtes les acheteurs ?"
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
        text="Gardiens : Entrez le chef vous attend."
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
        text="Contact : Installer vous ce sera rapide"
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
        text="Contact : Notre arrangement de tout mon stock de fruit en échange d'arme marche toujours ? Vous les avez bien ?"
        choices={["Nous n'avons pas ramené..."]}
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
        text="IA : Je ne vous avais pas prévenu afin de garantir la sécurité de cette mission mais notre entreprise a conclu un accord avec Al'Cata."
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
        text="IA : Nous n'étions pas les seuls à être intéressé par les fruit et nous avons donc conclus un arrangement. Les fruit en échange de simple armes."
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
        text="Contact : Vous avez bien les armes, n'est-ce pas ?"
        choices={["Oui, nous les avons amené comme convenu", "Euh non, on les a oubliés"]}
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
        text="Contact : Parfait, c'est un plaisir que d'avoir des partenaire aussi attentionné que vous"
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
        text="IA : Vous avez réussis mission en achetant l'ensemble du stock de fruit. Félicitation."
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
        text="IA : Quelques semaines après votre passage la population affamé, se révoltera auprès du groupe Al'Cata"
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
        text="IA : En réponse, Al'Cata réprimenda la population via l'usage d'arme puissante dont personne ne sait comment il ont pus en être procuré."
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
        text="Fin du niveau. Vous n'avez pas réussi ce niveau, peut être faut-il analyser les situations que vous avez rencontrés"
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
        text="Contact : Quoi ? Vous n'avez pas les armes ? Vous vous moquez de moi ?"
        choices={["Je crains que oui ... Nous les avons oubliés"]}
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
        text="Contact : Dans ce cas partez. Je finirais bien par trouver une entreprise plus avide que vous"
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
        text="IA : Vous avez donc fais échouer votre mission ? L'entreprise est très decus de vous. A votre retour vous serez transferez vers des services plus adapté."
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
        text="IA : Malgré cet échec, la population pauvre de la planete ne souffrira pas de famine car le stock de vivre restera suffisant"
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
        text="IA : De plus, Al'Cata restera affaibli après cela et ne sera pas en mesure de continuer d'oppresser la population de la ville. Et il finira par être dissous en pluiseur groupe plus faible."
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
        text="Fin du niveau. Féliciation vous avez réussis le niveau vous pouvez passer au suivant pour de nouvelles situations"
        choices={["..."]}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="fondu noir"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        audioLoop=1
        onValidate={gameFinished}
    />
{/if}