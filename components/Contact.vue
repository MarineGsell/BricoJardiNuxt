<script setup>
const props = defineProps({
    colorTitle: {
        type: String, 
    },
    colorText: {
        type: String, 
    },
    bgColor: {
        type: String, 
    }
})
</script>
<template>
    <section class="contact" :style="{ backgroundColor: bgColor }">
        <div class="contact__header">
            <h2 class="contact__header__title" :style="{ color: colorTitle }">Contactez Brico Jardi</h2>
            <h3 class="contact__header__subtitle" :style="{ color: colorTitle }">Devis gratuits sur le Bassin d'Arcachon</h3>
            <p class="contact__header__text" :style="{ color: colorText }">Vous avez un projet en tête ou des questions sur nos services ? N'hésitez pas à nous contacter. Que ce soit pour un devis personnalisé, un conseil technique ou pour planifier une visite, nous sommes à votre écoute pour transformer vos idées en réalité. Remplissez simplement le formulaire ci-dessous ou utilisez nos coordonnées directes pour nous joindre. Nous vous répondrons dans les plus brefs délais avec des solutions adaptées à vos besoins spécifiques.</p>
        </div>
        <div class="contact__content" :style="{ color: colorText }">
            <div class="contact__content__info">
                <ul class="contact__content__info__items">
                    <li class="contact__content__info__items__item">
                        <SvgIconPhone class="contact__content__info__items__item__icon" :style="{ color: colorTitle }"/>
                        <p class="contact__content__info__items__item__text">06.76.66.04.66</p>
                    </li>
                    <li class="contact__content__info__items__item">
                        <SvgIconEmail class="contact__content__info__items__item__icon" :style="{ color: colorTitle }"/>
                        <p class="contact__content__info__items__item__text">dgsell@hotmail.fr</p>
                    </li>
                    <li class="contact__content__info__items__item">
                        <NuxtLink to="/" class="contact__content__info__items__item__link">
                            <SvgIconFb class="contact__content__info__items__item__link__icon" :style="{ color: colorTitle }"/>
                            <p class="contact__content__info__items__item__link__text">Brico Jardi</p>
                        </NuxtLink>
                    </li>
                    <li class="contact__content__info__items__item">
                        <NuxtLink to="/" class="contact__content__info__items__item__link">
                            <SvgIconInsta class="contact__content__info__items__item__link__icon" :style="{ color: colorTitle }"/>
                            <p class="contact__content__info__items__item__link__text">Brico Jardi</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <ContactForm class="contact__content__form" :colorLabel="colorTitle"/>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.contact {
    &__header {
        width: 80%;
        margin: auto;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__title {
            @include font-h2($main-color);
        }
        &__subtitle {
            @include font-h3($main-color);
        }
        &__text {
            @include font-p($text-color-main);
        }
    }
    &__content {
        width: 80%;
        margin: auto;
        padding: 64px 0;
        @include flex(row, center, start, $gap-main-desktop);
        @include responsive-tablette {
            @include flex(row, center, start, $gap-main-tablette);
        }
        @include responsive-mobile {    
            @include flex(column, center, center, $gap-main-mobile);
        }
        &__info {
            width: 100%;
            @include flex(column, center, center, 0);
            &__items {
                @include flex(column, center, start, $gap-second-desktop);
                @include responsive-tablette {
                    @include flex(column, center, start, $gap-second-tablette);
                }   
                @include responsive-mobile {
                    @include flex(column, center, start, $gap-second-mobile);
                }
                &__item {
                    @include flex(row, start, center, $gap-row);
                    &__icon {
                        height: $icons-height;
                        width: auto;
                    }
                    &__text {
                        @include font-p($text-color-main);
                    }
                    &__link {
                        text-decoration: none;
                        color: currentColor;
                        @include flex(row, start, center, $gap-row);
                        &__icon {
                            height: $icons-height;
                            width: auto;
                        }
                        &__text {
                            @include font-p($text-color-main);
                        }
                    }
                }
            }
        }
    }
}
</style>