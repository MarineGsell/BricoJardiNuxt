<script setup>
</script>
<template>
    <section class="contact">
        <div class="contact__header">
            <div class="contact__header__head">
                <h2 class="contact__header__head__title">Contactez Brico Jardi</h2>
                <h3 class="contact__header__head__subtitle">Devis gratuits sur le Bassin d'Arcachon</h3>
            </div>
            <p class="contact__header__text">Vous avez un projet en tête ou des questions sur nos services ? N'hésitez pas à nous contacter. Que ce soit pour un devis personnalisé, un conseil technique ou pour planifier une visite, nous sommes à votre écoute pour transformer vos idées en réalité. Remplissez simplement le formulaire ci-dessous ou utilisez nos coordonnées directes pour nous joindre. Nous vous répondrons dans les plus brefs délais avec des solutions adaptées à vos besoins spécifiques.</p>
        </div>
        <div class="contact__content">
            <div class="contact__content__info">
                <ul class="contact__content__info__items">
                    <li class="contact__content__info__items__item">
                        <SvgIconPhone class="contact__content__info__items__item__icon"/>
                        <p class="contact__content__info__items__item__text">06.76.66.04.66</p>
                    </li>
                    <li class="contact__content__info__items__item">
                        <SvgIconEmail class="contact__content__info__items__item__icon"/>
                        <p class="contact__content__info__items__item__text">dgsell@hotmail.fr</p>
                    </li>
                </ul>
                <ul class="contact__content__info__items">
                    <li class="contact__content__info__items__item">
                        <NuxtLink to="/" class="contact__content__info__items__item__link">
                            <SvgIconFb class="contact__content__info__items__item__link__icon"/>
                            <p class="contact__content__info__items__item__link__text">Brico Jardi</p>
                        </NuxtLink>
                    </li>
                    <li class="contact__content__info__items__item">
                        <NuxtLink to="/" class="contact__content__info__items__item__link">
                            <SvgIconInsta class="contact__content__info__items__item__link__icon"/>
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
    @include padding-div;
    @include flex(column, center, center, $gap-second-desktop);
    @include hover-underline-title('.contact__header__head__title');
    @include responsive-tablette {
        @include flex(column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, center, $gap-second-mobile);
    }
    &__header {
        width: 100%;
        @include flex(column, center, start, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, start, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, start, $gap-second-mobile);
        }
        &__head {
            width: 100%;
            @include flex(column, center, start, $gap-third-desktop);
            @include responsive-tablette {
                @include flex(column, center, start, $gap-third-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, start, $gap-third-mobile);
            }
            &__title {
                width: 100%;
                @include font-h2($main-color);
            }
            &__subtitle {
                @include font-h3($text-color-main);
            }
        }
        &__text {
            @include font-p($text-color-main);
        }
    }
    &__content {
        width: 100%;
        @include flex(row, center, start, $gap-main-desktop);
        @include responsive-tablette {
            @include flex(row, center, start, $gap-main-tablette);
        }
        @include responsive-mobile {    
            @include flex(column, center, center, $gap-main-mobile);
        }
        &__info {
            width: 40%;
            @include flex(column, center, start, $gap-second-desktop);
            @include responsive-tablette {
                width: 40%;
                @include flex(column, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                width: 100%;
                @include flex(column, center, center, $gap-second-mobile);
            }
            &__items {
                width: 100%;
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
                        color: $main-color;
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
                            color: $main-color;
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