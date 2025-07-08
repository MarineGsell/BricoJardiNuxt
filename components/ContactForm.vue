<script setup>
// 📥 Références réactives pour les champs du formulaire
const contactForm = reactive({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    text: '',
    checkbox: false
})

// 🚨 Variables pour stocker les erreurs
const errors = reactive({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    text: '',
    checkbox: ''
})

// 🔍 Fonctions de validation pour chaque champ
const validateFirstname = () => {
    if(!contactForm.firstname.trim()) {
        errors.firstname = 'Le prénom est requis.'
        return false
    }
    if(contactForm.firstname.trim().length < 2) {
        errors.firstname = 'Le prénom doit contenir au moins 2 caractères.'
        return false
    } 
    errors.firstname = ''
    return true
}
const validateLastname = () => {
    if(!contactForm.lastname.trim()) {
        errors.lastname = 'Le nom est requis.'
        return false
    }
    if(contactForm.lastname.trim().length < 2) {
        errors.lastname = 'Le nom doit contenir au moins 2 caractères.'
        return false
    } 
    errors.lastname = ''
    return true
}
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
const validateEmail = () => {
    if(!contactForm.email.trim()) {
        errors.email = 'L\'email est requis.'
        return false
    }
    if(!isValidEmail(contactForm.email)) {
        errors.email = 'L\'email n\'est pas valide.'
        return false
    }
    errors.email = ''
    return true
}
const validateText = () => {
    if(!contactForm.text.trim()) {
        errors.text = 'Le message est requis.'
        return false
    }
    if(contactForm.text.trim().length < 10) {
        errors.text = 'Le message doit contenir au moins 10 caractères.'
        return false
    }
    errors.text = ''
    return true
}
const validateCheckbox = () => {
    if(!contactForm.checkbox) {
        errors.checkbox = 'Vous devez accepter les conditions pour continuer.'
        return false
    }
    errors.checkbox = ''
    return true
}

// ✅ Fonction pour valider tout le formulaire
const validateForm = () => {
    const isFirstnameValid = validateFirstname()
    const isLastnameValid = validateLastname()
    const isEmailValid = validateEmail()
    const isTextValid = validateText()
    const isCheckboxValid = validateCheckbox()

    return isFirstnameValid && isLastnameValid && isEmailValid && isTextValid && isCheckboxValid
}

// 📤 Fonction pour soumettre le formulaire
async function submitForm() {
    if(!validateForm()) {
        console.log('Validation échouée')
        alert('Veuillez corriger les erreurs avant de soumettre le formulaire.')
        return
    }
    $fetch('/api/contact', {
        method: 'POST',
        body: contactForm
    })
    .then(async () => {
        await refreshNuxtData()
        alert('Votre message a été envoyé avec succès !')
        // Réinitialiser le formulaire après l'envoi
        contactForm.firstname = ''
        contactForm.lastname = ''
        contactForm.email = ''
        contactForm.phone = ''
        contactForm.text = ''
        contactForm.checkbox = false
    })
    .catch((e) => alert(e))
}


</script>
<template>
    <form class="form" @submit.prevent="submitForm">
        <div class="form__row">
            <div class="form__row__field">
                <label for="firstname" class="form__row__field__label">Prénom *</label>
                <input 
                    type="text"
                    id="firstname" 
                    class="form__row__field__input"
                    placeholder="Votre prénom..."
                    v-model="contactForm.firstname"
                    @blur="validateFirstname"
                    @input="validateFirstname"
                >
                <p class="form__row__field__input__error">{{ errors.firstname }}</p>
            </div>
            <div class="form__row__field">
                <label for="lastname" class="form__row__field__label">Nom *</label>
                <input 
                    type="text"
                    id="lastname" 
                    class="form__row__field__input"
                    placeholder="Votre nom..."
                    v-model="contactForm.lastname"
                    @blur="validateLastname"
                    @input="validateLastname"
                >
                <p class="form__row__field__input__error">{{ errors.lastname }}</p>
            </div>
        </div>
        <div class="form__row">
            <div class="form__row__field">
                <label for="email" class="form__row__field__label">Email *</label>
                <input 
                    type="email"
                    id="email" 
                    class="form__row__field__input"
                    placeholder="Votre email..."
                    v-model="contactForm.email"
                    @blur="validateEmail"
                    @input="validateEmail"
                >
                <p class="form__row__field__input__error">{{ errors.email }}</p>
            </div>
            <div class="form__row__field">
                <label for="phone" class="form__row__field__label">Téléphone</label>
                <input 
                    type="tel" 
                    id="phone"
                    class="form__row__field__input"
                    placeholder="Votre téléphone..."
                    v-model="contactForm.phone"
                >
            </div>
        </div>
        <div class="form__row">
            <div class="form__row__field">
                <label for="message" class="form__row__field__label">Message *</label>
                <textarea 
                    rows="5" 
                    id="message"
                    placeholder="Votre message..." 
                    class="form__row__field__input"
                    v-model="contactForm.text"
                    @blur="validateText"
                    @input="validateText"
                ></textarea>
                <p class="form__row__field__input__error">{{ errors.text }}</p>
            </div>
        </div>
        <div class="form__checkbox">
            <div class="form__checkbox__field">
                <input 
                    type="checkbox" 
                    id="rgpd"
                    required
                    v-model="contactForm.checkbox"
                >
                <label for="rgpd" class="form__checkbox__label">
                    J'accepte que mes données soient utilisées pour me contacter.
                </label>
            </div>
        </div>
        <ButtonsMain 
            class="form__button"
            type="submit"
        >Envoyer</ButtonsMain>
    </form>
</template>
<style lang="scss" scoped>
.form {
    width: 100%;
    @include flex(column, center, center, $gap-form);
    @include font-p($text-color-main);
    &__row {
        width: 100%;
        @include flex(row, center, start, $gap-form);
        &__field {
            width: 100%;
            @include flex(column, center, start, $gap-label);
            &__input {
                @include form-input($text-color-main);
                &__error {
                    @include font-p(red)
                }
            }
        }        
    }
    &__checkbox {
        width: 100%;
        @include flex(column, center, center, $gap-label);
        &__field {
            @include flex(row, center, center, $gap-label);
        }
    }
    &__button {
        margin-top: $gap-second-desktop;
        @include responsive-tablette {
            margin-top: $gap-second-tablette;
        }
        @include responsive-mobile {
            margin-top: $gap-second-mobile;
        }
    }
}
</style>