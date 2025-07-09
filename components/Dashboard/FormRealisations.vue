<script setup>
import { ButtonsLittle, ButtonsMain, NuxtImg } from '#components';
const props = defineProps({
    initialData: {
        type: Object,
        default: () => ({})
    },
    clearAfterSubmit: {
        type: Boolean,
        default: true
    },
})
// Notification
// const notif = reactive({
//     show: false,
//     message: '',
//     button: ''
// })

// 📥 Références réactives pour les champs du formulaire
const worksForm = reactive({
    title: props.initialData.title || '',
    category: props.initialData.category || '',
    place: props.initialData.place || '',
    imgSrc: props.initialData.imgSrc || '',
    photoPreview: props.initialData.imgSrc || null,
    description: props.initialData.description || ''
})

// Surveillance des changements pour le formulaire
watch(() => props.initialData, (newData) => {
    worksForm.title = newData?.title || ''
    worksForm.category = newData?.category || ''
    worksForm.place = newData?.place || ''
    worksForm.imgSrc = newData?.imgSrc || ''
    worksForm.photoPreview = newData?.imgSrc || null
    worksForm.description = newData?.description || ''
}, { immediate: true })

// 🚨 Variables pour stocker les erreurs
const errors = ref({
    title: '',
    category: '',
    place: '',
    description: ''
})

// 🔍 Fonctions de validation pour chaque champ
const validateTitle = () => {
    if (!worksForm.title.trim()) {
        errors.value.title = 'Vous devez indiquer le titre de la réalisation'
        return false
    }
    if (worksForm.title.trim().length < 2) {
        errors.value.title = 'Le titre doit contenir au moins 2 caractères'
        return false
    }
    errors.value.title = ''
    return true
}
const validateCategory = () => {
    if (!worksForm.category.trim()) {
        errors.value.category = 'Vous devez indiquer une catégorie'
        return false
    }
    errors.value.category = ''
    return true
}
const validatePlace = () => {
    if (!worksForm.place.trim()) {
        errors.value.place = 'Vous devez indiquer un lieu'
        return false
    }
    errors.value.category = ''
    return true
}
const validateDescription = () => {
    if (!worksForm.description.trim()) {
        errors.value.description = 'Vous devez écrire une description'
        return false
    }
    errors.value.description = ''
    return true
}

// ✅ Fonction pour valider tout le formulaire
const validateForm = () => {
    const isTitle = validateTitle()
    const isCategory = validateCategory()
    const isPlace = validatePlace()
    const isDescription = validateDescription()
    
    return isTitle && isCategory && isPlace && isDescription
}

// 📁 Fonction pour gérer l'upload de fichier
const handleFileUpload = (event) => {
    const file = event.target.files[0]
 if (file) {
        // Validation du type de fichier
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
        if (!validTypes.includes(file.type)) {
            alert('⚠️ Veuillez sélectionner une image (JPEG, PNG ou WebP)')
            event.target.value = '' // Reset l'input
            return
        }
        
        // Validation de la taille (max 5MB)
        const maxSize = 5 * 1024 * 1024 // 5MB en bytes
        if (file.size > maxSize) {
            alert('⚠️ L\'image doit faire moins de 5MB')
            event.target.value = '' // Reset l'input
            return
        }
        
        // Conversion en Base64 pour la base de données
        convertFileToBase64(file)
        
        // Création de l'aperçu
        createImagePreview(file)
        
        console.log('📸 Photo sélectionnée:', {
            nom: file.name,
            taille: (file.size / 1024 / 1024).toFixed(2) + ' MB',
            type: file.type
        })
    }
}

// 🔄 Fonction pour convertir le fichier en Base64
const convertFileToBase64 = (file) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
        const base64String = e.target.result
        
        // Stocker le Base64 pour la base de données
        worksForm.imgSrc = base64String
        
        // Stocker aussi pour l'aperçu
        worksForm.photoPreview = base64String
        
        console.log('✅ Fichier converti en Base64')
    }
    
    reader.onerror = (error) => {
        console.error('❌ Erreur lors de la conversion:', error)
        alert('Erreur lors du traitement de l\'image')
    }
    
    reader.readAsDataURL(file)
}

// 🖼️ Fonction pour créer l'aperçu de l'image
const createImagePreview = (file) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
        worksForm.photoPreview = e.target.result
    }
    
    reader.readAsDataURL(file)
}

// 🗑️ Fonction pour supprimer la photo
const removePhoto = () => {
    worksForm.imgSrc = null
    worksForm.photoPreview = null
    
    // Reset l'input file
    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput) {
        fileInput.value = ''
    }
    
    console.log('🗑️ Photo supprimée')
}

// 📂 Fonction pour déclencher la sélection de fichier
const triggerFileInput = () => {
    const fileInput = document.querySelector('input[type="file"]')
    fileInput?.click()
}


// Soumission du formulaire
const emit = defineEmits(['submit'])

const handleSubmit = () => {
   if (!validateForm()) {
        console.log('❌ Formulaire invalide')
        alert('Veuillez corriger les erreurs avant de continuer')
        // notif.show = true
        // notif.message = 'Veuillez corriger les erreurs avant de continuer'
        // notif.button = 'OK'
        return
    } else {
        emit('submit', worksForm)
        if (props.clearAfterSubmit) {
            worksForm.title = ''
            worksForm.category = ''
            worksForm.place = ''
            worksForm.imgSrc = ''
            worksForm.photoPreview = null
            worksForm.description = ''
        }
    } 
}


</script>
<template>
    <form class="form" @submit.prevent="handleSubmit">
        <div class="form__row">
            <div class="form__row__field">
                <label for="title" class="form__field__label">Titre</label>
                <input 
                    type="text" 
                    id="title"
                    class="form__row__field__input"
                    v-model="worksForm.title"
                    @blur="validateTitle()"
                    @input="validateTitle()"
                >
            </div>
            <div class="form__row__field">
                <label for="category" class="form__field__label">Catégorie</label>
                <input 
                    type="text" 
                    id="category"
                    class="form__row__field__input"
                    v-model="worksForm.category"
                    @blur="validateCategory()"
                    @input="validateCategory()"
                >
            </div>
        </div>
        <div class="form__row">
            <div class="form__row__field">
                <label for="photo-input" class="form__row__field__label">Photo</label>
                <input 
                    type="file" 
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    id="photo-input"
                    class="form__row__field__inputFile"
                    @change="handleFileUpload"
                >
                <ButtonsLittle 
                    type="button" 
                    @click="triggerFileInput"
                    class="form__row__field__customButton"
                >
                    <SvgIconUpload class="form__row__field__customButton__icon"/>
                    {{ worksForm.imgSrc ? '' : 'Choisir une photo' }}
                </ButtonsLittle>
                <!-- 🖼️ Zone de prévisualisation -->
                <div v-if="worksForm.photoPreview" class="form__row__field__preview">
                    <div class="form__row__field__preview__container">
                        <NuxtImg :src="worksForm.photoPreview" alt="Aperçu" class="form__row__field__preview__container__image" />
                        <div class="form__row__field__preview__container__overlay">
                            <ButtonsLittle 
                                type="button"
                                @click="removePhoto"
                                class="form__row__field__preview__container__overlay__remove"
                            >
                                Supprimer la photo
                            </ButtonsLittle>
                        </div>
                    </div>
                </div>
                <p v-if="errors.imgSrc" class="form__row__field__error">{{ errors.imgSrc }}</p>
            </div>
            <div class="form__row__field">
                <label for="place" class="form__row__field__label">Lieu</label>
                <input 
                    type="text" 
                    id="place"
                    class="form__row__field__input"
                    v-model="worksForm.place"
                    @blur="validatePlace()"
                    @input="validatePlace()"
                >        
            </div>
        </div>
        <div class="form__field">
            <label for="description" class="form__field__label">Description de la réalisation</label>
            <textarea 
                id="description"
                rows="5"
                class="form__field__input"
                v-model="worksForm.description"
                @blur="validateDescription()"
                @input="validateDescription()"
            >
            </textarea>
        </div>
        <ButtonsMain type="submit">Ajouter la réalisation</ButtonsMain>
    </form>
</template>
<style lang="scss" scoped>
.form {
    width: 100%;
    @include flex(column, center, center, $gap-list);
    &__field {
        width: 100%;
        @include flex(column, center, start, 8px);
        &__label {
            @include font-p($text-color-main);
        }
        &__input {
            @include form-input($text-color-main)
        }
    }
    &__row {
        width: 100%;
        @include flex(row, center, start, $gap-list);
        &__field {
            width: 100%;
            @include flex(column, center, start, 8px);
            &__label {
                @include font-p($text-color-main);
            }
            &__input {
                @include form-input($text-color-main)
            }
            &__inputFile {
                display: none;
            }
            &__customButton {
                width: 100%;
                @include form-input($white);
                @include flex(row, center, center, 8px);
                @include font-p-little($text-color-main);
                &__icon {
                    height: 24px;
                }
            }
            &__preview {
                width: 100%;
                &__container{
                    width: 100%;
                    @include flex(row, space-around, center, 0);
                    &__image {
                        width: 64px;
                        height: 64px;
                        object-fit: cover;
                        object-position: center;
                    }
                    &__overlay {
                        @include flex(column, center, center, 0);
                    }
                }
            }
        }
    }
}
</style>