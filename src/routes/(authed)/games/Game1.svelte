<script>
    import { createEventDispatcher } from 'svelte';

    let { stepResult, text, reponse, image, imageAlt } = $props();

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('validate', {
        value: stepResult
        });
    }

</script>

<div>
    {#if image}
        <img src={image} alt="{imageAlt}" />
    {/if}
	<p>{text}</p>
    <br>
    <button on:click={handleClick}>
        {reponse}
    </button>
</div>
