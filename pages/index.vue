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
        <HeaderHero />
        <ImgSection photoSection="/photos/terrasse-3.webp"/>
        <section class="about">
            <div class="about__header">
                <h2 class="about__header__title">Brico Jardi</h2>
                <h3 class="about__header__subtitle">Votre expert multiservices en aménagements et rénovation</h3>
            </div>
            <p class="about__text">Fort d'une expérience solide dans l'aménagement et l'entretien d'espaces extérieurs comme intérieurs, Brico Jardi vous propose des solutions sur mesure pour embellir votre cadre de vie. Notre engagement : un travail soigné, des délais respectés et une écoute attentive de vos besoins. Qu'il s'agisse de créer une terrasse en bois, de rénover votre intérieur ou d'entretenir votre jardin, nous mettons notre savoir-faire à votre service pour concrétiser vos projets, petits ou grands, sur le Bassin d'Arcachon et ses environs.</p>
            <ButtonsAccent>Devis Gratuit</ButtonsAccent>
        </section>
        <section class="services">
            <h2 class="services__title">Des services qui s'adaptent</h2>
            <p class="services__subtitle">Brico Jardi, votre spécialiste au Bassin d'Arcachon, vous accompagne dans tous vos projets d'aménagement. De la rénovation intérieure à la création d'espaces extérieurs uniques : Rénovation, terrasses bois, clôtures bois, entretien de jardin. Confiez-nous vos envies, nous les réalisons.</p>
            <div class="services__cards">
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
                <!-- <Card
                    v-for="service in servicesList"
                    :key="service.id"
                    :icon="service.icon"
                    :title="service.title"
                    :subtitle="service.subtitle"
                /> -->
            </div>
            <BigCard
                v-if="perso.length"
                :title="perso[0].title"
                :text="perso[0].description"
                class="services__perso"
                ctaLink="/contact"
                ctaText="Parlez-nous de votre projet"
            ></BigCard>
            <div class="services__buttons">
                <ButtonsAccent to="/contact">Devis gratuit</ButtonsAccent>
            </div>
        </section>
                <section class="realisations">
            <div class="realisations__container">
                <h2 class="realisations__container__title">Des réalisations sur mesures</h2>
                <p class="realisations__container__subtitle">Découvrez nos projets terminés qui témoignent du savoir-faire et de l'engagement qualité de Brico Jardi. Chaque réalisation illustre notre capacité à transformer vos idées en réalité, qu'il s'agisse d'aménagements extérieurs, d'entretien de jardin ou de travaux intérieurs. Laissez-vous inspirer par ces exemples concrets de notre expertise au service de votre satisfaction.</p>
                <Carousel class="realisations__container__carrousel"/>
                <div class="realisations__container__buttons">
                    <ButtonsAccent to="/contact">Devis Gratuit</ButtonsAccent>
                    <ButtonsRegular to="/realisations">Réalisations</ButtonsRegular>
                </div>
            </div>
        </section>
        <section class="contact">
            <Contact 
            />
        </section>
    </div>
</template>
<style lang="scss" scoped>
.about {
    width: 80%;
    margin: auto;
    padding: 64px 0;
    @include flex(column, center, center, 56px);
    &__header {
       @include flex(column, center, center, 16px);
        &__title {
            color: $main-color;
            text-transform: uppercase;
            @include font(48px, 700)
        }
        &__subtitle {
            color: $main-color;
            @include font(32px, 700)
        }
    }
    &__text {
        text-align: center;
        @include font(18px, 400)
    }
}
.services {
    width: 80%;
    margin: auto;
    padding: 64px 0;
    @include flex(column, center, center, 56px);
    &__title {
        color: $main-color;
        text-transform: uppercase;
        @include font(48px, 700)
    }
    &__subtitle {
        @include font(18px, 400)
    }
    &__cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }
}
.realisations {
    background-color: $main-color;
    &__container {
        width: 80%;
        margin: auto;
        padding: 64px 0;
        color: $white;
        @include flex(column, center, center, 56px);
        &__title {
            text-transform: uppercase;
            @include font(48px, 700)
        }
        &__subtitle {
            @include font(18px, 400)
        }
        &__buttons {
            @include flex (row, center, center, 56px);
        }
    }
}
.contact {
    background-color: $main-color;
    color: $white;
}

</style>
