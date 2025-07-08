<script setup>
</script>

<template>
    <div class="footer">
        <SvgLogoMain class="footer__logo"/>
        <p class="footer__text">
            @copyright {{ new Date().getFullYear() }} BricoJardi - 
            <NuxtLink class="footer__text__link" target="_blank" to="/mentions">Mentions légales</NuxtLink>
            - Site réalisé par
            <a href="https://marine.chopingsell.com/" class="footer__text__link" target="_blank">Marine DevWeb</a>
        </p>
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
        &__link {
            cursor: pointer;
            text-decoration: none;
            @include font-p($white);
            &:hover {
                @include font-p($second-color);
            }
        }
    }
}
</style>


