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
<style lang="scss">
.realisations {
    margin-top: $margin-top;
    @include flex(column, center, center, 64px)
}
</style>