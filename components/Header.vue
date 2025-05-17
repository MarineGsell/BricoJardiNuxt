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
    @include font(18px, 500);
    &__bar{
        background-color: $white;
        height: 64px;
        padding: 0 32px;
        box-shadow: 0px 2px 4px rgba(56, 113,135 , 0.25);
        color: $main-color;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        @include flex (row, space-between, center, 0);
        &__logo {
            &__img {
                height: 40px;
                width: auto;
            }
        }
        &__hamburger {
            display: none;
            @include responsive-mobile {
                display: flex;
                width: 30px;
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
                    height: 24px;
                    width: auto;
                    color: $main-color;
                }
            }
        }
    }
}
</style>


