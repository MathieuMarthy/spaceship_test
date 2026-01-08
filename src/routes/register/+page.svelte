<script>
    import profile from '$lib/assets/img/user-icon-white.svg';
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

<div class="min-h-90 flex flex-col items-center justify-center p-6">
    <main class="w-full max-w-lg p-8 mt-20 mb-20 rounded-tl-3xl rounded-br-3xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">
        <div class="flex items-center gap-4 mb-10">
            <div class="w-20 h-20 flex items-center rounded-xl font-bold justify-center">
                <img class="h-8/10" src="{profile}" alt="">
            </div>
            <div>
                <h1 class="text-3xl font-semibold text-white">Créer un compte</h1>
                <p class="text-sm text-sky-200">Créer votre tableau de bord</p>
            </div>
        </div>
        
        <form method="post" class="space-y-4">
            <fieldset class="space-y-4 border-0 p-0">
                <legend class="sr-only">Créer votre compte</legend>
                <label for="username" class="block text-md mb-1 font-bold text-white">Nom d'utilisateur</label>
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
                    class="w-full rounded-lg 
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div class="relative mb-10">
                    <p id="username-help" class="absolute right-2 -top-5 text-xs 
                            px-1 py-1 rounded-md text-white">
                        Entre 3 et 20 caractères, sans espaces.
                    </p>
                </div>
        
                <label for="username_linkedin" class="block text-md mb-1 font-bold text-white">Nom d'utilisateur Linkedin</label>
                <input
                    type="text"
                    id="username_linkedin"
                    name="username_linkedin"
                    autocomplete="username"
                    autocapitalize="none"
                    
                    value="username_linkedin_test"
                    class="w-full rounded-lg 
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                
                <label for="email" class="block text-md mb-1 font-bold text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="mail"
                    autocomplete="email"
                    required
        
                    value="email_test@gmail.com"
                    class="w-full rounded-lg 
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

        
                <label for="password" class="block text-md mb-1 font-bold text-white">Mot de passe</label>
                <div class="relative mb-10">
                    <input
                        bind:this={passwordInput}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        autocomplete="new-password"
                        required
                        value="password_test"
                        class="w-full rounded-lg 
                        bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                        focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="button"
                        aria-pressed={showPassword}
                        on:click={togglePassword}
                        class="absolute right-2 top-1/2 -translate-y-1/2 text-sm 
                        bg-white/6 px-3 py-1 rounded-md text-white hover:bg-white/20"
                    >
                        {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    </button>
                </div>
        
                <label for="password" class="block text-md mb-1 font-bold text-white">Confirmez le mot de passe</label>
                <div class="relative mb-10">
                    <input
                        bind:this={passwordConfirmInput}
                        type={showPassword ? 'text' : 'password'}
                        id="password_confirm"
                        name="password_confirm"
                        autocomplete="new-password"
                        required
                        value="password_test"
                        class="w-full rounded-lg 
                        bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                        focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        type="button"
                        aria-pressed={showPassword}
                        on:click={togglePassword}
                        class="absolute right-2 top-1/2 -translate-y-1/2 text-sm 
                        bg-white/6 px-3 py-1 rounded-md text-white hover:bg-white/20"
                    >
                        {showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    </button>
                </div>
        
                <div class="flex flex-row items-center justify-end mb-10">
                    <button
                        type="submit"
                        class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500 
                        font-semibold px-5 py-2 rounded-lg shadow 
                        hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
                    >
                        S'inscrire
                    </button>
                </div>
            </fieldset>
        </form>
        
        <p class="text-center text-sm text-sky-200">
            Vous avez déjà un compte ?
            <a href="/login" class="font-medium text-sky-200 hover:underline hover:text-white">Connectez-vous ici</a>
        </p>
    </main>
</div>