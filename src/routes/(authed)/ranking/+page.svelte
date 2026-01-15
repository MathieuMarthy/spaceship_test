<script>
  export let data;

  const podium = data.topCrews.slice(0, 3);
  const others = data.topCrews.slice(3);

  const formatPoints = (pts) => Number(pts).toLocaleString();
</script>

<title>Classement des équipages</title>

<section class="w-screen flex flex-col items-center px-72 pt-4 pb-4">
	<h1 class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">Classement des équipages</h1>

  <!-- PODIUM -->
  <section class="flex items-end gap-10 my-24">
    {#if podium[1]}
      <!-- 2nd -->
      <article class="flex flex-col items-center">
        <p class="mb-2 text-4xl">🥈</p>
        <div class="h-50 w-50 flex flex-col items-center justify-center text-white rounded-lg 
                    bg-gradient-to-br from-stone-300/20 to-stone-500/20
                    border border-stone-200/50
                    hover:bg-stone-200/20">
          <p class="font-semibold text-2xl">{podium[1].crew.name}</p>
          <p class="text-md">🚀 {podium[1].crew.vaisseau}</p>
          <p class="bg-black/10 px-2 py-1 mt-4 rounded-lg text-sm text-white/80">
            {formatPoints(podium[1].points)} pts
          </p>
        </div>
        <p class="mt-2 font-bold text-lg text-white/70">2ᵉ</p>
      </article>
    {/if}

    {#if podium[0]}
      <!-- 1st -->
      <div class="flex flex-col items-center">
        <div class="mb-2 text-5xl">🥇</div>
        <div class="h-80 w-60 flex flex-col items-center justify-center text-white rounded-lg 
                    bg-gradient-to-br from-yellow-300/20 to-yellow-500/20
                    border border-yellow-200/50
                    hover:bg-yellow-200/20">
          <p class="font-bold text-3xl">{podium[0].crew.name}</p>
          <p class="text-md">🚀 {podium[0].crew.vaisseau}</p>
          <p class="bg-black/10 px-2 py-1 mt-4 rounded-lg text-sm text-white/80">
            {formatPoints(podium[0].points)} pts
          </p>
        </div>
        <p class="mt-2 font-bold text-lg text-yellow-300 font-semibold">1ᵉʳ</p>
      </div>
    {/if}

    {#if podium[2]}
      <!-- 3rd -->
      <div class="flex flex-col items-center">
        <div class="mb-2 text-3xl">🥉</div>
        <div class="h-40 w-40 flex flex-col items-center justify-center text-white rounded-lg 
                    bg-gradient-to-br from-red-300/20 to-red-500/20
                    border border-red-200/50
                    hover:bg-red-200/20">
          <p class="font-semibold text-xl">{podium[2].crew.name}</p>
          <p class="text-md">🚀 {podium[2].crew.vaisseau}</p>
          <p class="bg-black/10 px-2 py-1 mt-4 rounded-lg text-sm text-white/80">
            {formatPoints(podium[2].points)} pts
          </p>
        </div>
        <p class="mt-2 font-bold text-lg text-white/70">3ᵉ</p>
      </div>
    {/if}
  </section>

  <section class="w-full max-w-4xl space-y-3">
    {#each others as entry, index}
      <div class="flex items-center justify-between text-white rounded-lg 
                    bg-gradient-to-br from-white/10 to-white/10
                    border border-white/30
                    hover:bg-white/10
                    px-6 py-4">
        <div class="flex items-center gap-6">
          <span class="text-white/60 font-mono">
            #{index + 4}
          </span>
          <div class="flex flex-col">
            <p class="font-semibold text-md">{entry.crew.name}</p>
            <p class="text-sm">🚀 {entry.crew.vaisseau}</p>
          </div>
        </div>

        <span class="bg-black/10 px-2 py-1 rounded-lg text-sm text-white/80">
          {formatPoints(entry.points)} pts
        </span>
      </div>
    {/each}
  </section>
</section>
