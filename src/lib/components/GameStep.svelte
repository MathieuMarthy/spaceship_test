<script>
    let { nextStep, text, choices, image, imageAlt, audio, audioLoop, duration, onValidate } = $props();
    
    let result;

    function handleClick(index) {
        const nextValue = nextStep + "_" + index;
        onValidate(nextValue);
    }

    let audioElement;
    $effect(() => {
        // --- Logique Audio ---
        if (audio) {
            audioElement.play();
        }

        // --- Logique Duration (Validation automatique) ---
        if (duration) {
            if (duration == - 1 && audio && !audioLoop) {
                // Si duration est -1, on attend la fin de l'audio
                audioElement.onended = () => {
                    onValidate(nextStep + "_0");
                };
                return;
            }
            else {
                const timer = setTimeout(() => {
                    // On renvoie automatiquement le step actuel suivi de _0
                    onValidate(nextStep + "_0");
                }, duration * 1000); // Conversion secondes en millisecondes
                return () => clearTimeout(timer);
            }
            // Nettoyage du timer si le composant est détruit avant la fin
            
        }
    });
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl flex flex-col items-center gap-6">
    
    {#if image}
        <div class="overflow-hidden rounded-lg border border-white/5 shadow-inner">
            <img src={image} alt="{imageAlt}" class="max-w-full h-auto object-cover max-h-[400px]"/>
        </div>
    {/if}

    <div class="w-full text-center">
        <p class="text-white text-xl leading-relaxed font-light italic">
            {text}
        </p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 w-full mt-4">
        {#if (!choices || choices.length === 0) && !duration}
            <button 
                onclick={() => handleClick(0)}
                class="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 border border-white/20 active:scale-95"
            >
                Continuer...
            </button>
        {/if}

        {#each choices as choice, i}
            <button 
                onclick={() => { result = i; handleClick(result); }}
                class="px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-orange-500 hover:to-amber-500 
                       text-white font-medium rounded-lg shadow-lg transition-all duration-300 
                       transform hover:-translate-y-1 active:scale-95 border border-white/10"
            >
                {choice}
            </button>
        {/each}
    </div>

    {#if audio}
        <audio bind:this={audioElement} src={audio} loop={audioLoop}></audio>
    {/if}
</div>