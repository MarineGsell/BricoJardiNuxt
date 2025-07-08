<script setup>
const title = "Votre projet, notre savoir-faire";
const text = "Découvrez nos réalisations dans le Bassin d'Arcachon : terrasses en bois, rénovations intérieures et aménagements extérieurs. Chaque projet témoigne de notre savoir-faire et de notre engagement qualité. Laissez-vous inspirer par ces transformations réussies pour imaginer votre futur projet avec Brico Jardi.";

</script>
<template>
    <div class="realisations">
        <HeaderHero 
            :title="title"
            :text="text"
            to="/services"
            button="Voir tous les services"
            class="realisations__header"
        />
        <div class="realisations__content">
            <GalleryMain />
            <div class="realisations__content__buttons">
                <ButtonsSecond to="/realisations">Voir nos réalisations</ButtonsSecond>
                <ButtonsCta to="/contact#contactForm">Demandez votre devis gratuit</ButtonsCta>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.realisations {
    &__content {
        margin-top: $margin-top;
        margin-bottom: $margin-bottom;
        &__buttons {
            @include flex(row, center, center, $gap-row);
            @include responsive-mobile {
                @include flex(column, center, center, $gap-third-mobile);
            }
        }
    }
}
</style>