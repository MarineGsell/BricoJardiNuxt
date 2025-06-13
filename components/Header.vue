<script setup>
</script>

<template>
    <nav class="nav">
        <div class="nav__bar">
            <div class="nav__bar__logo">
                <SvgLogoMain
                    class="nav__bar__logo__img"
                    alt="logo bricojardi"
                />
            </div>
            <HamburgerMenu class="nav__bar__hamburger"/>
            <Menu
                class="nav__bar__menu"
                flexDirection="row"
            />
            <div class="nav__bar__socials">
                <NuxtLink class="nav__bar__socials__link" to="/">
                    <SvgIconInsta class="nav__bar__socials__link__icon"/>
                </NuxtLink>
                <NuxtLink class="nav__bar__socials__link" to="/">
                    <SvgIconFb class="nav__bar__socials__link__icon"/>
                </NuxtLink>
            </div> 
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    &__bar{
        background-color: $white;
        height: $nav-height;
        padding: $padding-nav;
        box-shadow: $shadow-nav;
        color: $main-color;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        @include flex (row, space-between, center, 0);
        &__logo {
            &__img {
                height: $icons-height;
                width: auto;
                @include center;
            }
        }
        &__hamburger {
            display: block;
            @include center;
            @include responsive-desktop {
                display: none;
            }
        }
        &__menu {
            @include responsive-mobile {
                display: none
            }
        }
        &__socials {
            @include flex (row, center, center, 12px);
            &__link {
                &__icon {
                    height: $icons-height;
                    width: auto;
                    color: $main-color;
                    @include center;
                }
            }
        }
    }
}
</style>


