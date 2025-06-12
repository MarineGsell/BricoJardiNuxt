<script setup>
</script>

<template>
    <div class="footer">
        <SvgLogoMain class="footer__logo"/>
        <p class="footer__text">@copyright {{ new Date().getFullYear() }} - BricoJardi</p>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    height: 400px;
    background-color: $main-color;
    color: $white;
    @include flex(column, center, center, $gap-second-desktop);
    @include responsive-tablette {
        @include flex(column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, center, $gap-second-mobile);
    }
    &__logo {
        height: $logo-height;
        width: auto;
    }
    &__text {
        @include font-p($white);
    }
}
</style>


