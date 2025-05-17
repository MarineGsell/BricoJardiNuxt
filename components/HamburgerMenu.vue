<script setup>
const props = defineProps({
    customClass: {
        type: String,
        default: ''
    }
})
const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="hamburger">
        <div class="hamburger__menu" @click="toggleMenu">
            <div class="hamburger__menu__line"></div>
            <div class="hamburger__menu__line"></div>
            <div class="hamburger__menu__line"></div>
        </div>
        <Menu 
            v-if="isMenuOpen"
            flexDirection="column"
        />
    </div>
</template>
<style lang="scss" scoped>
.hamburger {
    &__menu {
        @include flex (column, center, center, 4px);
        &__line {
            height: 4px;
            width: 100%;
            border-radius: 25%;
            background-color: $main-color;
        }
    }
}
</style>