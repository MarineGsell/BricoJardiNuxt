<template>
    <div class="realisations">
        <Banner 
            title= "Nos réalisations"
            subtitle= "Votre projet, notre savoir-faire"
            text="Bienvenue dans notre galerie de projets réalisés. Chaque photo raconte l'histoire d'une transformation réussie et d'un client satisfait. Des terrasses en bois aux rénovations intérieures, en passant par l'entretien d'espaces verts, ces réalisations témoignent de notre savoir-faire, de notre attention aux détails et de notre engagement à concrétiser vos projets avec professionnalisme. Parcourez ces exemples pour vous inspirer et imaginer ce que nous pourrions créer ensemble pour votre habitat."
        />
        <GalleryMain />
    </div>
</template>
<style lang="scss" scoped>
.realisations {
    margin-top: $margin-top;
    padding: $padding-section;
    // @include flex(column, center, center, $gap-section);
    // @include responsive-tablette {
    //     padding: $padding-section-tablette;
    //     @include flex(column, center, center, $gap-section-tablette);
    // }
    // @include responsive-mobile {
    //     padding: $padding-section-mobile;
    //     @include flex(column, center, center, $gap-section-mobile);
    // }
}
</style>