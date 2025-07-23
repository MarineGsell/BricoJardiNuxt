<script setup>
// Meta
useSeoMeta({
  title: 'Vous avez un projet d’aménagement ou de rénovation ? Contactez Brico Jardi pour un devis gratuit et des conseils personnalisés. Intervention sur le Bassin d’Arcachon.',
  description: 'Vous avez un projet d’aménagement ou de rénovation ? Contactez Brico Jardi pour un devis gratuit et des conseils personnalisés. Intervention sur le Bassin d’Arcachon.'
})

const title = "Contact";
const subtitle = "Parlons de votre projet ensemble";
const text = "Devis gratuit, conseil personnalisé ou simple question : nous sommes là pour vous accompagner dans tous vos projets d'aménagement et de rénovation. Basés à Andernos-les-Bains, nous intervenons rapidement sur tout le Bassin d'Arcachon. Contactez-nous par téléphone ou via notre formulaire, nous vous répondrons sous 24h avec des solutions sur-mesure.";
</script>
<template>
    <div class="contact-page">
        <HeaderHero 
            :title="title"
            :text="text"
            :subtitle="subtitle"
            to="/services"
            button="Voir tous les services"
            class="contact-page__header"
        />
        <div class="contact-page__zone">
            <div class="contact-page__zone__head">
                <h2 class="contact-page__zone__head__title">Zone d'intervention</h2>
                <h3 class="contact-page__zone__head__subtitle">Votre artisan de proximité sur le Bassin d'Arcachon</h3>
            </div>
            <div class="contact-page__zone__main">
                <div class="contact-page__zone__main__content">
                    <p class="contact-page__zone__main__content__text">
                        Installé à Andernos-les-Bains au cœur du Bassin d'Arcachon, Brico Jardi vous accompagne sur toutes les communes du Bassin d'Arcachon et proches bassin. Cette implantation locale nous permet de :
                    </p>
                    <ul class="contact-page__zone__main__content__list">
                        <li class="contact-page__zone__main__content__list__item">
                            <SvgIconCheck class="contact-page__zone__main__content__list__item__icon"/>
                            Intervenir rapidement sur vos chantiers
                        </li>
                        <li class="contact-page__zone__main__content__list__item">
                            <SvgIconCheck class="contact-page__zone__main__content__list__item__icon"/>
                            Vous proposer des tarifs de déplacement réduits
                        </li>
                        <li class="contact-page__zone__main__content__list__item">
                            <SvgIconCheck class="contact-page__zone__main__content__list__item__icon"/>
                            Assurer un suivi de qualité
                        </li>
                    </ul>
                </div>
            <img class="contact-page__zone__main__img" src="assets/zone-intervention.png" alt="">
            </div>
        </div>
        <Contact 
            class="contact__form"
        />

    </div>
</template>
<style lang="scss" scoped>
.contact-page {
    margin-bottom: $margin-bottom;
    @include flex(column, center, center, $gap-main-desktop);
    @include responsive-tablette {
        @include flex(column, center, center, $gap-main-tablette);
    }
    @include responsive-mobile {
        width: 100%;
        @include flex(column, center, center, $gap-main-mobile);
    }
    &__zone {
        @include padding-div;
        @include hover-underline-title('.contact-page__zone__head__title');
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__head {
            width: 100%;
            @include flex(column, center, start, $gap-third-desktop);
            @include responsive-tablette {
                width: 100%;
                @include flex(column, center, start, $gap-third-tablette);
            }
            @include responsive-mobile {
                width: 100%;
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
        &__main {
            @include flex(row, center, center, $gap-second-desktop);
            @include responsive-tablette {
                @include flex(column, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, center, $gap-second-mobile);
            }
            &__content {
                width: 50%;
                @include flex(column, center, start, $gap-third-desktop);
                @include responsive-tablette {
                    width: 100%;
                    @include flex(column, center, start, $gap-third-tablette);
                }
                @include responsive-mobile {
                    @include flex(column, center, start, $gap-third-mobile);
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
                width: 50%;
                max-width: 640px;
                border-radius: 8px;
                @include responsive-tablette {
                    width: 100%;
                }
            }
        }
    }
}
</style>