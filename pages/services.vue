<script setup>
// Images
import AmenagementExtImg from "/photos/jardin-4.webp"
import EntretienExtImg from "/photos/jardin-1.webp"
import TravauxIntImg from "/photos/peinture-1.webp"

// Data
import servicesList from '@/data/servicesList';
const amenagementExt = servicesList.filter(service => service.categorie === "amenagementExt");
const entretienExt = servicesList.filter(service => service.categorie === "entretienExt");
const travauxInt = servicesList.filter(service => service.categorie === "travauxInt");
const perso = servicesList.filter(service => service.categorie === "autre");

// Hero content
const title = "Nos services";
const subtitle = "Votre maison et votre jardin entre de bonnes mains";
const text = "De la rénovation de votre intérieur à l'aménagement de vos espaces extérieurs, Brico Jardi vous accompagne dans tous vos projets sur le Bassin d'Arcachon. Travail soigné, délais respectés, écoute attentive.";


</script>
<template>
    <div class="services">
        <HeaderHero 
            :title="title"
            :text="text"
            :subtitle="subtitle"
            to="/realisations"
            button="Voir nos réalisations"
            class="services__header"
        />
        <div class="services__content">
            <ServiceSection 
                sectionTitle= "Aménagez votre extérieur"
                sectionText= "Transformez votre espace extérieur en un lieu de vie à votre image, où confort et esthétique se conjuguent harmonieusement pour créer votre havre de paix personnalisé."
                :imgService= "AmenagementExtImg"
                imgAlt= "photo aménagement extérieur"
                :services= amenagementExt
            />
            <ServiceSection 
                sectionTitle= "Entretenez votre jardin"
                sectionText= "Confiez l'entretien régulier de votre espace vert à des professionnels passionnés qui préserveront la beauté de votre jardin saison après saison, vous libérant du temps pour en profiter pleinement."
                :imgService= "EntretienExtImg"
                imgAlt= "photo entretien extérieur"
                :services= entretienExt
            />
            <ServiceSection 
                sectionTitle= "Travaux intérieurs"
                sectionText= "Donnez une nouvelle dimension à votre intérieur grâce à notre savoir-faire en rénovation et embellissement, pour un habitat qui vous ressemble et dans lequel vous vous sentirez parfaitement bien."
                :imgService= "TravauxIntImg"
                imgAlt= "photo travaux intérieurs"
                :services= travauxInt
            />
            <BigCard
                v-if="perso.length"
                :title="perso[0].title"
                :text="perso[0].description"
                class="services__perso"
                ctaLink="/contact#contactForm"
                ctaText="Parlez-nous de votre projet"
            ></BigCard>
        </div>
    </div>
</template>
<style lang="scss">
.services {
    margin-bottom: $margin-bottom;
    &__content {
        @include flex(column, center, center, $gap-main-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-main-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-main-mobile);
        }
    }
}
</style>