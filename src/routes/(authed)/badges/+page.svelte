<script>
  import Tier from '$lib/components/Tier.svelte';

  export let data;

  const { gold, silver, bronze } = data.badges;
</script>

<title>Badges</title>

<section class="w-screen flex flex-col items-center px-72 pt-6 pb-12">
  <h1 class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">
    Vos distinctions
  </h1>

  <p class="mt-4 text-white/70 text-sm">
    Vos accomplissements au fil de l’aventure
  </p>

  <section class="w-full max-w-6xl mt-20 space-y-24">
    <Tier
      title="Badges Or"
      icon="🥇"
      gradient="from-yellow-300/20 to-yellow-500/20"
      border="border-yellow-300/40"
      badges={gold}
    />

    <Tier
      title="Badges Argent"
      icon="🥈"
      gradient="from-stone-300/20 to-stone-500/20"
      border="border-stone-300/40"
      badges={silver}
    />

    <Tier
      title="Badges Bronze"
      icon="🥉"
      gradient="from-red-300/20 to-red-500/20"
      border="border-red-300/40"
      badges={bronze}
    />
  </section>
</section>
