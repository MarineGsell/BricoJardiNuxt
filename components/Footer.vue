<script setup>
</script>

<template>
    <div class="footer">
        <SvgLogoMain class="footer__logo"/>
        <p class="footer__text">
            @copyright {{ new Date().getFullYear() }} BricoJardi - 
            <NuxtLink class="footer__text__link" target="_blank" to="/mentions" aria-label="Lien vers les mentions légales" title="Lien vers les mentions légales">Mentions légales</NuxtLink>
            - Site réalisé par
            <a href="https://marine.chopingsell.com/" class="footer__text__link" target="_blank" aria-label="Lien vers Marine webdev" title="Lien vers Marine webdev">Marine DevWeb</a>
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
        padding: $padding-section-tablette;
        @include flex(column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        padding: $padding-section-mobile;
        @include flex(column, center, center, $gap-second-mobile);
    }
    &__logo {
        height: $logo-height;
        width: auto;
    }
    &__text {
        font-family: "Source Sans 3", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.6;
        color: $white;
        text-align: center;
        @include responsive-tablette {
            font-size: 16px;
        }
        @include responsive-mobile {
            font-size: 16px;
        }
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


