<template>
    <div class="contact">
        <Banner
            class="contact__banner"
            title="Zone d'intervention"
            subtitle="Votre artisan de proximité sur le Bassin d'Arcachon"
        />
        <div class="contact__zone">
            <div class="contact__zone__content">
                <p class="contact__zone__content__text">
                    Installé à Andernos-les-Bains au cœur du Bassin d'Arcachon, Brico Jardi vous accompagne sur toutes les communes du Bassin d'Arcachon et proches bassin. Cette implantation locale nous permet de :
                </p>
                <ul class="contact__zone__content__list">
                    <li class="contact__zone__content__list__item">
                        <SvgIconCheck class="contact__zone__content__list__item__icon"/>
                        Intervenir rapidement sur vos chantiers
                    </li>
                    <li class="contact__zone__content__list__item">
                        <SvgIconCheck class="contact__zone__content__list__item__icon"/>
                        Vous proposer des tarifs de déplacement réduits
                    </li>
                    <li class="contact__zone__content__list__item">
                        <SvgIconCheck class="contact__zone__content__list__item__icon"/>
                        Assurer un suivi de qualité
                    </li>
                </ul>
            </div>
            <img class="contact__zone__img" src="assets/zone-intervention.png" alt="">
        </div>
        <Contact 
            class="contact__form"
            colorTitle="#387187"
            colorText="#000000"
            bgColor="#FFFFFF"
        />

    </div>
</template>
<style lang="scss" scoped>
.contact {
    margin-top: $margin-top;
    &__banner {
        width: 100%;
    }
    &__zone {
        @include padding-div;
        @include flex(row, center, center, $gap-main-desktop);
        @include responsive-tablette {
            width: 100%;
            @include flex(column, center, center, $gap-main-tablette);
        }
        @include responsive-mobile {
            width: 100%;
            @include flex(column, center, center, $gap-main-mobile);
        }
        &__content {
            @include flex(column, center, start, $gap-second-desktop);
            @include responsive-tablette {
                @include flex(column, center, start, $gap-second-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, start, $gap-second-mobile);
            }
            &__text {
                text-align: justify;
                @include font-p($text-color-main);
            }
            &__list {
                list-style: none;
                @include flex(column, start, start, $gap-list);
                @include font-p($text-color-main);
                &__item {
                    @include flex(row, start, center, $gap-row);
                    &__icon {
                        height: $icons-height;
                        width: auto;
                        color: $second-color;
                    }
                }
            }
        }
        &__img {
            width: 100%;
            max-width: 600px;
            border-radius: 8px;
        }
    }
}
</style>