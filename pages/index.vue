<script setup>
// Data
import servicesList from '~/data/servicesList';

</script>
<template>
    <div class="home">
        <HeaderHero />
        <ImgSection photoSection="/photos/terrasse-3.webp"/>
        <section class="services">
            <h2 class="services__title">Des services qui s'adaptent à vos besoins</h2>
            <p class="services__subtitle">Brico Jardi, votre spécialiste au Bassin d'Arcachon, vous accompagne dans tous vos projets d'aménagement. De la rénovation intérieure à la création d'espaces extérieurs uniques : Rénovation, terrasses bois, clôtures bois, entretien de jardin. Confiez-nous vos envies, nous les réalisons.</p>
            <div class="services__cards">
                <Card
                    v-for="service in servicesList"
                    :key="service.id"
                    :icon="service.icon"
                    :title="service.title"
                    :subtitle="service.subtitle"
                />
            </div>
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


    </div>
</template>
<style lang="scss" scoped>
.services {
    width: 80%;
    margin: auto;
    padding: 64px 0;
    @include flex(column, center, center, 40px);
    &__title {
        color: $main-color;
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
        @include flex(column, center, center, 40px);
        &__title {
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


</style>
