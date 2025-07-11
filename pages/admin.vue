<script setup>
const { loggedIn, user, fetch: refreshSession } = useUserSession()

const credentials = reactive({
  email: '',
  password: '',
})

definePageMeta({
    layout: "admin"
})

async function login() {
    $fetch('/api/login', {
        method: 'POST',
        body: credentials
    })
    .then(async () => {
        // Refresh the session on client-side and redirect to the home page
        await refreshSession()
        await navigateTo('/dashboard')
    })
    .catch((e) => alert(e))
}

</script>
<template>
    <main class="admin">
        <h2 class="admin__title">Connexion au tableau de bord</h2>
        <div v-if="loggedIn" class="admin__message">
            <p class="admin__message__text">Vous êtes déja connecté</p>
            <ButtonsMain to="/dashboard">Accéder au dashbord</ButtonsMain>
        </div>
        <form  class="admin__form" @submit.prevent="login">
            <div class="admin__form__column">
                <div class="admin__form__column__field">
                    <label class="admin__form__column__field__label">Email</label>
                    <input 
                        type="email"
                        class="admin__form__column__field__input"
                        v-model="credentials.email"
                    >
                    <!-- <p class="error" v-if="error">Email inccorect</p> -->
                </div>
                <div class="admin__form__column__field">
                    <label class="admin__form__column__field__label">Mot de passe</label>
                    <input 
                        type="password" 
                        class="admin__form__column__field__input"
                        v-model="credentials.password"
                    >
                    <!-- <p class="error" v-if="error">Mot de passe inccorect</p> -->
                </div>
            </div>
            <ButtonsMain type="submit">Connexion</ButtonsMain>
        </form>
        <a class="admin__link" href="/">Retour au site</a>
    </main>
</template>
<style lang="scss" scoped>  
.admin {
    height: 100vh;
    @include flex(column, center, center, $gap-second-desktop);
    &__message {
        @include flex(column, center, center, $gap-third-desktop);
        &__text {
            @include font-p($text-color-main)
        }
    }
    &__title {
        @include font-h2($main-color);
    }
    &__form {
        @include flex(column, center, center, $gap-third-desktop);
        &__column {
            @include flex(column, center, center, $gap-third-desktop);
            &__field {
                @include flex(column, center, start, 8px);
                &__label {
                    @include font-p($text-color-main);
                }
                &__input {
                    width: 100%;
                    @include form-input($text-color-main);
                }
            }
        }
    }
    &__link {
        text-decoration: none;
        @include font-p($text-color-second);
        &:hover {
            text-decoration: underline;
            @include font-p($main-color);        
        }
    }
}
// .error {
//     @include font-p-message(red)
// }
</style>