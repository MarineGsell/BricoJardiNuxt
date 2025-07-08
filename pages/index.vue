<script setup>
// Data
import servicesList from '~/data/servicesList';
const amenagementExt = servicesList.filter(service => service.categorie === "amenagementExt");
const entretienExt = servicesList.filter(service => service.categorie === "entretienExt");
const travauxInt = servicesList.filter(service => service.categorie === "travauxInt");
const perso = servicesList.filter(service => service.categorie === "autre");

</script>
<template>
    <div class="home">
        <HeaderHeroIndex />
        <ImgSection photoSection="/photos/terrasse-3.webp"/>
        <div class="home__content">
            <section class="about">
                <div class="about__header">
                    <h2 class="about__header__title">Brico Jardi</h2>
                    <h3 class="about__header__subtitle">Votre expert multiservices en aménagements et rénovation</h3>
                </div>
                <p class="about__text">Fort d'une expérience solide dans l'aménagement et l'entretien d'espaces extérieurs comme intérieurs, Brico Jardi vous propose des solutions sur mesure pour embellir votre cadre de vie. Notre engagement : un travail soigné, des délais respectés et une écoute attentive de vos besoins. Qu'il s'agisse de créer une terrasse en bois, de rénover votre intérieur ou d'entretenir votre jardin, nous mettons notre savoir-faire à votre service pour concrétiser vos projets, petits ou grands, sur le Bassin d'Arcachon et ses environs.</p>
            </section>
            <section class="services">
                <h2 class="services__title">Des services qui s'adaptent</h2>
                <p class="services__text">Brico Jardi, votre spécialiste au Bassin d'Arcachon, vous accompagne dans tous vos projets d'aménagement. De la rénovation intérieure à la création d'espaces extérieurs uniques : Rénovation, terrasses bois, clôtures bois, entretien de jardin. Confiez-nous vos envies, nous les réalisons.</p>
                <div class="services__content">
                    <div class="services__content__cards">
                        <ServicesCard 
                        :services="amenagementExt"
                        title="Aménagements extérieurs"
                        ></ServicesCard>
                        <ServicesCard 
                        :services="entretienExt"
                        title="Entretien de jardin"
                        ></ServicesCard>
                        <ServicesCard 
                        :services="travauxInt"
                        title="Travaux intérieurs"
                        ></ServicesCard>
                    </div>
                    <div class="services__content__buttons">
                        <ButtonsSecond to="/services">Voir tous les services</ButtonsSecond>
                        <ButtonsCta to="/contact">Devis gratuit</ButtonsCta>
                    </div>
                </div>
            </section>
            <BigCard
                v-if="perso.length"
                :title="perso[0].title"
                :text="perso[0].description"
                class="services__perso"
                ctaLink="/contact"
                ctaText="Parlez-nous de votre projet"
            ></BigCard>
            <section class="realisations">
                <h2 class="realisations__title">Des réalisations sur mesures</h2>
                <div class="realisations__content">
                    <p class="realisations__content__text">Découvrez nos projets terminés qui témoignent du savoir-faire et de l'engagement qualité de Brico Jardi. Chaque réalisation illustre notre capacité à transformer vos idées en réalité, qu'il s'agisse d'aménagements extérieurs, d'entretien de jardin ou de travaux intérieurs. Laissez-vous inspirer par ces exemples concrets de notre expertise au service de votre satisfaction.</p>
                    <Carousel class="realisations__content__carrousel"/>
                    <div class="realisations__content__buttons">
                        <ButtonsSecond to="/realisations">Voir toutes les réalisations</ButtonsSecond>
                        <ButtonsCta to="/contact">Devis gratuit</ButtonsCta>
                    </div>
                </div>
            </section>
            <Contact/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home {
    &__content {
        margin-top: $margin-top;
        margin-bottom: $margin-bottom;
        @include flex(column, center, center, $gap-main-desktop);
        @include responsive-tablette {
            margin-top: $margin-top-tablette;
            margin-bottom: $margin-bottom-tablette;
            @include flex(column, center, center, $gap-main-tablette);
        }
        @include responsive-mobile {
            margin-top: $margin-top-mobile;
            margin-bottom: $margin-bottom-mobile;
            @include flex(column, center, center, $gap-main-mobile);
        }
    }
}
.about {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.about__header__title');
    @include responsive-tablette {
        margin-top: $margin-top-tablette;
        @include flex(column, center, start, $gap-second-tablette);
    }
    @include responsive-mobile {
        margin-top: $margin-top-mobile;
        @include flex(column, center, start, $gap-second-mobile);
    }
    &__header {
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
        @include font-p($text-color-second);
    }
}
.services {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.services__title');
    @include responsive-tablette {
        @include flex(column, center, start, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, start, $gap-second-mobile);
    }
    &__title {
        width: 100%;
        @include font-h2($main-color);
    }
    &__text {
        @include font-p($text-color-main);
    }
    &__content {
        margin: auto;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: $gap-second-desktop;
            @include responsive-tablette {
                gap: $gap-second-tablette;
            }
            @include responsive-mobile {
                grid-template-columns: 1fr;
                gap: $gap-second-mobile;
            }
        }
        &__buttons {
            @include flex(row, center, center, $gap-second-desktop);
            @include responsive-tablette {
                @include flex(row, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, center, $gap-second-mobile);
            }
        }
    }
}
.realisations {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.realisations__title');
    @include responsive-tablette {
        @include flex(column, center, start, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, start, $gap-second-mobile);
    }
    &__title {
        width: 100%;
        @include font-h2($main-color);
    }
    &__content {
        margin: auto;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__text {
            @include font-p($text-color-main);
        }
        &__buttons {
            @include flex(row, center, center, $gap-second-desktop);
            @include responsive-tablette {
                @include flex(row, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, center, $gap-second-mobile);
            }
        }
    }
}
.contact {
    @include padding-div;
    @include responsive-tablette {
        margin-bottom: $margin-bottom-tablette;
    }
    @include responsive-mobile {
        margin-bottom: $margin-bottom-mobile;
    }
}
</style>
