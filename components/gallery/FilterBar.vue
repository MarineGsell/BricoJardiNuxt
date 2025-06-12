<template>
    <div class="filterBar">
        <GalleryButton>Tous</GalleryButton>
        <GalleryButton>Travaux intérieurs</GalleryButton>
        <GalleryButton>Travaux Extérieurs</GalleryButton>
    </div>
</template>
<style lang="scss" scoped>
.filterBar {
    @include flex(row, center, center, $gap-second-desktop);
    @include responsive-tablette {
            @include flex(row, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(row, center, center, $gap-second-mobile);
        }
}
</style>