<script>
  export let title;
  export let icon;
  export let gradient;
  export let border;
  export let badges = [];
</script>

<section class="bg-white/10 rounded-lg p-6 shadow-lg backdrop-blur-md">
  <div class="flex items-center gap-4 mb-8">
    <span class="text-4xl">{icon}</span>
    <h2 class="text-3xl font-semibold text-white">{title}</h2>
  </div>

  {#if badges.length === 0}
    <p class="text-white italic">
      Aucun badge débloqué pour ce tier.
    </p>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each badges as badge}
        <article
          class={`rounded-lg p-6 text-white
                  bg-gradient-to-br ${gradient}
                  border ${border}
                  backdrop-blur-md
                  hover:scale-[1.02] transition`}
        >
          <img src="{badge.logo}" alt="badge_{badge.tier}">
          <h3 class="font-semibold text-xl">{badge.name}</h3>
          <p class="text-sm text-white/90 mt-2">
            {badge.description}
          </p>

          {#if badge.unlockedAt}
            <p class="mt-4 text-xs text-white/90">
              Débloqué le {new Date(badge.unlockedAt).toLocaleDateString()}
            </p>
          {/if}
        </article>
      {/each}
    </div>
  {/if}
</section>
