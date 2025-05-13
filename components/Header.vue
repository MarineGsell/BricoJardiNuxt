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
            <!-- <div class="hamburger-menu">
                <img src="img/icones/couleur-principale/menu-hamburger.svg" alt="">
            </div> -->
            <ul class="nav__bar__menu">
                <li class="nav__bar__menu__item">
                    <NuxtLink to="/" class="nav__bar__menu__item__link">Accueil</NuxtLink>
                </li>
                <li class="nav__bar__menu__item">
                    <NuxtLink to="/services" class="nav__bar__menu__item__link">Services</NuxtLink>
                </li>
                <li class="nav__bar__menu__item">
                    <NuxtLink to="/realisations" class="nav__bar__menu__item__link">Réalisations</NuxtLink>
                </li>
                <li class="nav__bar__menu__item">
                    <NuxtLink to="/contact" class="nav__bar__menu__item__link">Contact</NuxtLink>
                </li>
            </ul>   
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
        &__menu {
            width: auto;
            padding: 0;
            @include flex (row, center, center, 0);
            &__item {
                padding: 0 16px;
                @include flex (row, center, center, 0);
                &__link {
                    display: block;
                    width: auto;
                    text-decoration: none;
                    position: relative;
                    color: $main-color;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin: 0 16px;
                    font-size: 16px;
                    line-height: 26px;
                    &:hover {
                        color: $second-color;
                        border-bottom: $second-color;
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        background: $second-color;
                        height: 3px;
                        width: 100%;
                        left: 0;
                        bottom: -8px;
                        transform: scale(0);
                        transition: transform 0.3s ease-in-out;
                    }
                    &:hover::after {
                        transform: scale(1);
                    }
                }
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


