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
    background-color: $main-color-dark;
    color: $white;
    @include flex(column, center, center, 24px);
    &__logo {
        height: 64px;
        width: auto;
    }
    &__text {
        @include font(18px, 400)
    }
}
</style>


