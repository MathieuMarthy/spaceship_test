<script>
    import Game1 from "../Game1.svelte";
    let step = 0;
    let steps = [step];

    function handleValidate(event) {
        step = event.detail.value;
        steps = [...steps, step];
    }

</script>

<p>Etapes : {steps}</p>

{#if step == 0}
    <Game1 stepResult="1" text="Welcome to the Beginner Purchase Game!" reponse="Your goal is to make your first purchase." image="./img/game_img_test.jpg" on:validate={handleValidate} />
{/if}

{#if step == 1}
    <Game1 stepResult="2" text="Are you sure" reponse="yes captain." on:validate={handleValidate} />
{/if}
src/routes/(authed)/games/purchases-beginner/img/game_img_test.jpg