<script>
    let passwordInput;
    let showPassword = false;

    function togglePassword() {
        showPassword = !showPassword;
    }
</script>

<h1 class="text-3xl font-bold">Connexion</h1>

<form method="post">
    <fieldset>
        <legend>Accéder à votre compte</legend>

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="mail"
            autocomplete="email"
            value="test_email@com"
            required
        />

        <br />

        <label for="password">Mot de passe</label>
        <input
            bind:this={passwordInput}
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            autocomplete="current-password"
            value="test_password"
            required
        />

        <button
            type="button"
            aria-pressed={showPassword}
            on:click={togglePassword}
        >
            {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
        </button>

        <br />

        <a href="/forgot-password">Mot de passe oublié ?</a>

        <br />

        <button type="submit">Se connecter</button>
    </fieldset>
</form>

<p>
    Vous n'avez pas encore de compte ?
    <a href="/register">Rejoignez l'aventure ici</a>
</p>
