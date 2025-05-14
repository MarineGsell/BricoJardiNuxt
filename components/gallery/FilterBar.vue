<template>
    <div class="filterBar">
        <GalleryButton>Tous</GalleryButton>
        <GalleryButton>Travaux intérieurs</GalleryButton>
        <GalleryButton>Travaux Extérieurs</GalleryButton>
    </div>
</template>
<style lang="scss" scoped>
.filterBar {
    @include flex(row, center, center, 48px)
}
</style>