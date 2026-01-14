<script>
  export let data;
</script>

<title>Actualités</title>

<section class="w-screen flex flex-col items-center px-72 pt-4 pb-4">
	<h1 class="bg-white/10 text-4xl font-semibold text-white py-2 px-6 rounded-lg">Actualités</h1>

	<section class="w-screen grid grid-cols-3 gap-8 items-center px-72 pt-4 pb-4">
    {#each data.news as item}
      <article class="rounded-lg bg-white/10 border border-white/6 shadow-lg backdrop-blur-md p-6 text-white flex flex-col">
        
        <div class="flex flex-col items-start gap-4">
          <h3 class="text-xl font-semibold">{item.titre}</h3>

          <div class="w-full rounded-lg bg-black/10 p-2 flex justify-center">
            <img
              src={item.photo}
              alt={item.titre}
              class="max-h-48 object-contain"
            />
          </div>
        </div>

        <p class="mt-3 text-sm text-white/80 text-justify flex-grow">
          {item.description}
        </p>
        <a
          class="w-full flex justify-end text-white text-sm hover:underline"
          href={item.redirection}
        >
          Voir plus…
        </a>
      </article>
    {/each}
  </section>
</section>

