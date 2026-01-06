<script>
    let passwordInput;
    let showPassword = false;

    function togglePassword() {
        showPassword = !showPassword;
    }
</script>

<div class="min-h-90 flex items-center justify-center p-6 bg-gradient-to-br from-sky-800 via-sky-800 to-sky-950">
    <main class="w-full max-w-lg p-8 mt-30 mb-30 rounded-tl-3xl rounded-br-3xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">
        <div class="flex items-center gap-6 mb-10">
            <div class="w-20 h-20 flex items-center rounded-xl font-bold justify-center bg-gradient-to-br from-emerald-300 to-indigo-400">
                ICON
            </div>
            <div>
                <h1 class="text-3xl font-semibold text-white">Connexion</h1>
                <p class="text-sm text-sky-200">Accédez à votre tableau de bord</p>
            </div>
        </div>

        <form method="post" class="space-y-4">
            <fieldset class="space-y-4 border-0 p-0">
                <legend class="sr-only">Accéder à votre compte</legend>
                <label for="email" class="block text-md mb-1 font-bold text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="mail"
                    autocomplete="email"
                    value="test_email@com"
                    required
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
                        autocomplete="current-password"
                        value="test_password"
                        required
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
                
                <div class="flex items-center justify-between mb-10">
                    <a href="/forgot-password" class="text-sm text-sky-200 hover:underline hover:text-white">Mot de passe oublié ?</a>
                    <button 
                        type="submit" 
                        class="bg-gradient-to-br from-emerald-300 to-indigo-400
                        font-semibold px-5 py-2 rounded-lg shadow"
                    >
                        Se connecter
                    </button>
                </div>
            </fieldset>
        </form>
        
        <p class="text-center text-sm text-sky-200">
            Vous n'avez pas encore de compte ?
            <a href="/register" class="font-medium text-sky-200 underline hover:text-white">Rejoignez l'aventure ici</a>
        </p>
    </main>
</div>