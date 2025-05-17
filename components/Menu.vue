<script setup>
const props = defineProps({
    flexDirection: {
        type: String,
        required: true
    }
})
</script>
<template>
    <ul class="menu" :style="{ flexDirection:`${flexDirection}` }">
        <li class="menu__item">
            <NuxtLink to="/" class="menu__item__link">Accueil</NuxtLink>
        </li>
        <li class="menu__item">
            <NuxtLink to="/services" class="menu__item__link">Services</NuxtLink>
        </li>
        <li class="menu__item">
            <NuxtLink to="/realisations" class="menu__item__link">Réalisations</NuxtLink>
        </li>
        <li class="menu__item">
            <NuxtLink to="/contact" class="menu__item__link">Contact</NuxtLink>
        </li>
    </ul>   
</template>
<style lang="scss" scoped>
.menu {
    width: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
