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

</script>
<template>
    <div class="services">
        <ServiceSection 
            bannerTitle= "Aménagez votre extérieur"
            bannerText= "Transformez votre espace extérieur en un lieu de vie à votre image, où confort et esthétique se conjuguent harmonieusement pour créer votre havre de paix personnalisé."
            :flexDirection= "'row'"
            :imgService= "AmenagementExtImg"
            imgAlt= "photo aménagement extérieur"
            :services= amenagementExt
        />
        <ServiceSection 
            bannerTitle= "Entretenez votre jardin"
            bannerText= "Confiez l'entretien régulier de votre espace vert à des professionnels passionnés qui préserveront la beauté de votre jardin saison après saison, vous libérant du temps pour en profiter pleinement."
            :flexDirection= "'row-reverse'"
            :imgService= "EntretienExtImg"
            imgAlt= "photo entretien extérieur"
            :services= entretienExt
        />
        <ServiceSection 
            bannerTitle= "Travaux intérieurs"
            bannerText= "Donnez une nouvelle dimension à votre intérieur grâce à notre savoir-faire en rénovation et embellissement, pour un habitat qui vous ressemble et dans lequel vous vous sentirez parfaitement bien."
            :flexDirection= "'row'"
            :imgService= "TravauxIntImg"
            imgAlt= "photo travaux intérieurs"
            :services= travauxInt
        />
        <BigCard
            v-if="perso.length"
            :title="perso[0].title"
            :text="perso[0].description"
            class="services__perso"
            ctaLink="/contact"
            ctaText="Parlez-nous de votre projet"
        ></BigCard>
    </div>
</template>
<style lang="scss">
.services {
    margin-top: $margin-top;
    margin-bottom: $margin-bottom;
}

</style>