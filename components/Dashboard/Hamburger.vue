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
const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <div class="hamburger" :class="{ 'hamburger--open': isMenuOpen }">
        <div class="hamburger__menu" @click="toggleMenu">
            <div class="hamburger__menu__line"></div>
            <div class="hamburger__menu__line"></div>
            <div class="hamburger__menu__line"></div>
        </div>
        <Transition 
            name="menu-slide"
        >
        <DashboardMenu 
            v-if="isMenuOpen"
            flexDirection="column"
            @close-menu="closeMenu"
        />
        </Transition>
    </div>
</template>
<style lang="scss" scoped>
.hamburger {
    &--open {
        .hamburger__menu__line {
            &:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    }
    &__menu {
        cursor: pointer;
        @include flex (column, center, center, 4px);
        &__line {
            height: 4px;
            width: 30px;
            border-radius: 25%;
            background-color: $main-color;
        }
    }
}
.menu-slide-enter-active {
    transition: all 0.3s ease-out;
}
.menu-slide-leave-active {
    transition: all 0.3s ease-in;
}
.menu-slide-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}
.menu-slide-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>