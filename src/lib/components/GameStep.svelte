<script>
    import sound_on from '$lib/assets/img/sound-loud-black.svg';
    import sound_off from '$lib/assets/img/sound-mute-black.svg';
    let { nextStep, text, choices, image, imageAlt, audio, audioLoop, duration, onValidate, audioTime = 0, audioMuted = 0} = $props();

    let result;

    function toggleMute() {
        isMuted = !isMuted;
    }

    function handleClick(index) {
        const nextValue = nextStep + "_" + index;
        const currentAudioTime = audioElement ? audioElement.currentTime : 0;
        onValidate(nextValue, currentAudioTime, isMuted ? 1 : 0);
    }

    let audioElement;
    let isMuted = $state(!!audioMuted);
    // click sound player (reused to avoid creating many Audio instances)
    const clickAudio = new Audio('/audio/interface-confirmation.mp3');
    clickAudio.preload = 'auto';

    function playClick() {
        try {
            if (audioElement) clickAudio.muted = audioElement.muted;
            clickAudio.currentTime = 0;
            clickAudio.play().catch(() => {
                // autoplay may be blocked — ignore
            });
        } catch (e) {
            // silent
        }
    }
    $effect(() => {
        // --- Logique Audio ---
        if (audio && audioElement) {
            if (audioTime > 0) audioElement.currentTime = audioTime;
            audioElement.play().catch(() => {});
        }

        // --- Logique Duration (Validation automatique) ---
        if (duration) {
            if (duration == - 1 && audio && !audioLoop) {
                // Si duration est -1, on attend la fin de l'audio
                audioElement.onended = () => {
                    onValidate(nextStep + "_0", 0, isMuted ? 1 : 0);
                };
                return;
            }
            else {
                const timer = setTimeout(() => {
                    // On renvoie automatiquement le step actuel suivi de _0
                    const currentAudioTime = audioElement ? audioElement.currentTime : 0;
                    onValidate(nextStep + "_0", currentAudioTime, isMuted ? 1 : 0);
                }, duration * 1000); // Conversion secondes en millisecondes
                return () => clearTimeout(timer);
            }
            // Nettoyage du timer si le composant est détruit avant la fin
            
        }
    });
</script>

<main class="w-screen flex flex-col items-center px-72 py-8">
    <section class="w-full min-h-150 p-6 bg-black/20 backdrop-blur-sm rounded-2xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md flex flex-col items-center gap-2">
            <div class="w-full flex justify-start">
            <button 
                class="px-1 py-1"
                onclick={(e) => {
                    const btn = e.currentTarget;
                    const img = btn.querySelector('img');
                    if (!img) return;
                    const currentlyMuted = img.dataset.muted === 'true';
                    const newMuted = !currentlyMuted;
                    img.src = newMuted ? sound_off : sound_on;
                    img.alt = newMuted ? 'son coupé' : 'son activé';
                    img.dataset.muted = String(newMuted);
                    if (audioElement) audioElement.muted = newMuted;
                }}
            >
                <img src={sound_on} data-muted="false" class="w-10" alt="son activé">
            </button>
        </div>
        {#if image}
            <div class="overflow-hidden rounded-lg border border-white/5 shadow-inner">
                <img src={image} alt="{imageAlt}" class="max-w-full h-auto object-cover max-h-[500px]"/>
            </div>
        {/if}
    
        <div class="w-full flex justify-center text-center">
            <p tabindex=0 class="max-w-2/3 text-white text-xl font-light italic">
                {text}
            </p>
        </div>
    
        <div class="flex flex-wrap justify-center gap-4 w-full mt-4">
            {#if (!choices || choices.length === 0) && !duration}
                <button 
                    onclick={() => { playClick(); handleClick(0); }}
                    class="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 border border-white/20 active:scale-95"
                >
                    Continuer...
                </button>
            {/if}
    
            {#each choices as choice, i}
                <button 
                    onclick={() => {
                        playClick();
                        result = i;
                        handleClick(result);
                    }}
                    class="px-5 py-2 bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500 
                        font-semibold rounded-lg shadow 
                        hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
                >
                    {choice}
                </button>
            {/each}
        </div>
    
        {#if audio}
            <audio 
                bind:this={audioElement} 
                src={audio} 
                loop={audioLoop} 
                bind:muted={isMuted} 
            ></audio>
        {/if}
    </section>
</main>