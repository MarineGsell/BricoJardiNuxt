<template>
    <div class="realisations" id="formAdmin">
        <h2 class="realisations__title">Ajouter une réalisation</h2>
        <DashboardFormRealisations />
    </div>
</template>
<style lang="scss" scoped>
.realisations {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.realisations__title');
    @include responsive-tablette {
        @include flex(column, center, start, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, start, $gap-second-mobile);
    }
    &__title {
        width: 100%;
        @include font-h2($main-color);
    }
}
</style>