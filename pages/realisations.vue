<script setup>
const title = "Votre projet, notre savoir-faire";
const text = "Bienvenue dans notre galerie de projets réalisés. Chaque photo raconte l'histoire d'une transformation réussie et d'un client satisfait. Des terrasses en bois aux rénovations intérieures, en passant par l'entretien d'espaces verts, ces réalisations témoignent de notre savoir-faire, de notre attention aux détails et de notre engagement à concrétiser vos projets avec professionnalisme. Parcourez ces exemples pour vous inspirer et imaginer ce que nous pourrions créer ensemble pour votre habitat.";

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
                <ButtonsCta to="/contact">Demandez votre devis gratuit</ButtonsCta>
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
        }
    }
}
</style>