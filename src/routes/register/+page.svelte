<script>
    let passwordInput;
    let passwordConfirmInput;
    let showPassword = false;

    function togglePassword() {
        showPassword = !showPassword;
    }
</script>

<head>
	<title>Inscription - [nom du jeu]</title>
</head>

<h1 class="text-3xl font-bold">Créer un compte</h1>

<form method="post">
    <fieldset>
        <label for="username">Nom d'utilisateur</label>
        <input
            type="text"
            id="username"
            name="username"
            autocomplete="username"
            minlength="3"
            maxlength="20"
            autocapitalize="none"
            required

            value="username_test"
        />
        <p id="username-help">
			Entre 3 et 20 caractères, sans espaces.
		</p>

        <br>

        <label for="username_linkedin">Nom d'utilisateur Linkedin</label>
        <input
            type="text"
            id="username_linkedin"
            name="username_linkedin"
            autocomplete="username"
            autocapitalize="none"
            
            value="username_linkedin_test"
        />

        <br>

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="mail"
            autocomplete="email"
            required

            value="email_test@gmail.com"
        />

        <br>

        <label for="password">Mot de passe</label>
        <div>
            <input
                bind:this={passwordInput}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                autocomplete="new-password"
                required

                value="password_test"
            />
            <button
                type="button"
                aria-pressed={showPassword}
                on:click={togglePassword}
            >
                {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            </button>
        </div>

        <label for="password">Confirmez le mot de passe</label>
        <div>
            <input
                bind:this={passwordConfirmInput}
                type={showPassword ? 'text' : 'password'}
                id="password_confirm"
                name="password_confirm"
                autocomplete="new-password"
                required

                value="password_test"
            />
            <button
                type="button"
                aria-pressed={showPassword}
                on:click={togglePassword}
            >
                {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
            </button>
        </div>

        <button
            type="submit"
        >
            S'inscrire
        </button>
    </fieldset>
</form>

<p>
    Vous avez déjà un compte ?
    <a href="/login">Connectez-vous ici</a>
</p>