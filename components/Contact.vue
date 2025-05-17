<script setup>
const props = defineProps({
    color: {
        type: String, 
    }
})

</script>
<template>
    <div class="contact" :style="{ color: color }">
        <div class="contact__info">
            <h2 class="contact__info__title">Contact</h2>
            <p class="contact__info__text">Vous avez un projet en tête ou des questions sur nos services ? N'hésitez pas à nous contacter. Que ce soit pour un devis personnalisé, un conseil technique ou pour planifier une visite, nous sommes à votre écoute pour transformer vos idées en réalité. Remplissez simplement le formulaire ci-dessous ou utilisez nos coordonnées directes pour nous joindre. Nous vous répondrons dans les plus brefs délais avec des solutions adaptées à vos besoins spécifiques.</p>
            <div class="contact__info__group">
                <ul class="contact__info__group__items">
                    <li class="contact__info__group__items__item">
                        <SvgIconPhone class="contact__info__group__items__item__icon"/>
                        <p class="contact__info__group__items__item__text">06.76.66.04.66</p>
                    </li>
                    <li class="contact__info__group__items__item">
                        <SvgIconEmail class="contact__info__group__items__item__icon"/>
                        <p class="contact__info__group__items__item__text">dgsell@hotmail.fr</p>
                    </li>
                </ul>
                <ul class="contact__info__group__items">
                    <li class="contact__info__group__items__item">
                        <NuxtLink to="/" class="contact__info__group__items__item__link">
                            <SvgIconFb class="contact__info__group__items__item__link__icon"/>
                            <p class="contact__info__group__items__item__link__text">Brico Jardi</p>
                        </NuxtLink>
                    </li>
                    <li class="contact__info__group__items__item">
                        <NuxtLink to="/" class="contact__info__group__items__item__link">
                            <SvgIconInsta class="contact__info__group__items__item__link__icon"/>
                            <p class="contact__info__group__items__item__link__text">Brico Jardi</p>
                        </NuxtLink>
                    </li>
                </ul>

            </div>
        </div>
        <form action="#" class="contact__form">
            <div class="contact__form__div">
                <label for="" class="contact__form__div__label">
                    Nom
                    <input type="text" class="contact__form__div__label__input">
                </label>
                <label for="" class="contact__form__div__label">
                    Prénom
                    <input type="text" class="contact__form__div__label__input">
                </label>
            </div>
            <div class="contact__form__div">
                <label for="" class="contact__form__div__label">
                    Email
                    <input type="email" class="contact__form__div__label__input">
                </label>
                <label for="" class="contact__form__div__label">
                    Téléphone
                    <input type="tel" class="contact__form__div__label__input">
                </label>
            </div>
            <div class="contact__form__div">
                <label for="" class="contact__form__div__label">
                    Message
                    <textarea name="" id="" rows="10" placeholder="Votre message..." class="contact__form__div__label__input" />
                </label>
            </div>
        </form>
    </div>

</template>
<style lang="scss" scoped>
.contact {
    width: 80%;
    margin: auto;
    padding: 64px 0;
    @include flex(row, center, start, 80px);
    &__info {
        width: 100%;
        @include flex(column, center, start, 32px);
        &__title {
            @include font(48px, 700)
        }
        &__text {
            @include font(16px, 400);
        }
        &__group {
            width: 100%;
            @include flex(row, space-around, center, 0);
            &__items {
                @include flex(column, center, start, 16px);
                &__item {
                    @include flex(row, start, center, 16px);
                    &__icon {
                        height: 24px;
                        width: auto;
                    }
                    &__text {
                        @include font(16px, 400);
                    }
                    &__link {
                        text-decoration: none;
                        color: currentColor;
                        @include flex(row, start, center, 16px);
                        &__icon {
                            height: 24px;
                            width: auto;
                        }
                        &__text {
                            @include font(16px, 400);
                        }
                    }
                }
            }
        }
    }
    &__form {
        width: 100%;
        @include font(18px, 400);
        @include flex(column, center, start, 16px);
        &__div {
            width: 100%;
            @include flex(row, start, center, 16px);
            &__label {
                width: 100%;
                @include flex(column, center, start, 8px);
                &__input {
                    width: 100%;
                }
            }
        }
    }
}
</style>