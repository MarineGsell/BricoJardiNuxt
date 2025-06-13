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
    @include center;
    @include responsive-tablette {
        width: 100%;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        background-color: $white;
        @include flex (column, center, center, $gap-list);
        padding: 16px;
    }
    &__item {
        padding: 0 16px;
        @include flex (row, center, center, 0);
        &__link {
            @include font-link;
        }
    }
}
</style>
