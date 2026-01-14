<script>
  export let data;

  const podium = data.topCrews.slice(0, 3);
  const others = data.topCrews.slice(3);

  const formatPoints = (pts) => Number(pts).toLocaleString();
</script>

<title>Classement des équipages</title>

<section class="w-screen flex flex-col items-center px-72 py-24 bg-sky-950 shadow-sm">
  <h2 class="text-3xl font-semibold mb-16 text-white">
    Classement des équipages
  </h2>

  <!-- 🏆 PODIUM -->
  <section class="flex items-end gap-10 mb-24">
    {#if podium[1]}
      <!-- 🥈 2nd -->
      <div class="flex flex-col items-center">
        <div class="mb-2 text-3xl">🥈</div>
        <div class="h-40 w-40 rounded-lg bg-white/10 border border-white/6
                    flex flex-col items-center justify-center text-white">
          <p class="font-semibold text-lg">{podium[1].crew.name}</p>
          <p class="font-semibold text-lg">🚀 {podium[1].crew.vaisseau}</p>
          <p class="text-sm text-white/70">
            {formatPoints(podium[1].points)} pts
          </p>
        </div>
        <p class="mt-2 text-white/70">2ᵉ</p>
      </div>
    {/if}

    {#if podium[0]}
      <!-- 🥇 1st -->
      <div class="flex flex-col items-center">
        <div class="mb-2 text-4xl">🥇</div>
        <div class="h-52 w-52 rounded-lg bg-gradient-to-br
                    from-yellow-300/20 to-yellow-500/10
                    border border-yellow-400/40
                    flex flex-col items-center justify-center text-white shadow-lg">
          <p class="font-bold text-xl">{podium[0].crew.name}</p>
          <p class="font-semibold text-lg">🚀 {podium[0].crew.vaisseau}</p>
          <p class="text-sm text-white/80">
            {formatPoints(podium[0].points)} pts
          </p>
        </div>
        <p class="mt-2 text-yellow-300 font-semibold">1ᵉʳ</p>
      </div>
    {/if}

    {#if podium[2]}
      <!-- 🥉 3rd -->
      <div class="flex flex-col items-center">
        <div class="mb-2 text-3xl">🥉</div>
        <div class="h-36 w-36 rounded-lg bg-white/10 border border-white/6
                    flex flex-col items-center justify-center text-white">
          <p class="font-semibold text-lg">{podium[2].crew.name}</p>
          <p class="font-semibold text-lg">🚀 {podium[2].crew.vaisseau}</p>
          <p class="text-sm text-white/70">
            {formatPoints(podium[2].points)} pts
          </p>
        </div>
        <p class="mt-2 text-white/70">3ᵉ</p>
      </div>
    {/if}
  </section>

  <section class="w-full max-w-4xl space-y-3">
    {#each others as entry, index}
      <div class="flex items-center justify-between
                  rounded-lg bg-white/10 border border-white/6
                  px-6 py-4 text-white">
        <div class="flex items-center gap-6">
          <span class="text-white/60 font-mono">
            #{index + 4}
          </span>
          <div class="flex flex-col">
            <span class="font-medium">{entry.crew.name}</span>
            <p class="font-semibold text-lg">🚀 {entry.crew.vaisseau}</p>
          </div>
        </div>

        <span class="text-white/80">
          {formatPoints(entry.points)} pts
        </span>
      </div>
    {/each}
  </section>
</section>
