<script setup>
const props = defineProps({
    flexDirection: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['close-menu'])
const handleLinkClick = () => {
    emit('close-menu')
}
</script>
<template>
    <ul class="menu" :style="{ flexDirection:`${flexDirection}` }">
        <li class="menu__item">
            <NuxtLink to="#headerAdmin" class="menu__item__link" @click="handleLinkClick">Accueil</NuxtLink>
        </li>
        <li class="menu__item">
            <NuxtLink  to="#realisationsAdmin" class="menu__item__link" @click="handleLinkClick">Réalisations</NuxtLink>
        </li>
        <li class="menu__item">
            <NuxtLink to="#formAdmin" class="menu__item__link" @click="handleLinkClick">Ajouter une réalisation</NuxtLink>
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
        box-shadow: $shadow-nav;
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
