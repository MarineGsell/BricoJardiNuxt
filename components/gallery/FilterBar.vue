<template>
    <div class="filterBar">
        <GalleryButton>Tous</GalleryButton>
        <GalleryButton>Travaux intérieurs</GalleryButton>
        <GalleryButton>Travaux Extérieurs</GalleryButton>
    </div>
</template>
<style lang="scss" scoped>
.filterBar {
    margin: 32px 0; 
    @include flex(row, center, center, 48px)
}
</style>