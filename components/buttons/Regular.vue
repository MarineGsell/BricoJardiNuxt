<script setup>
const props = defineProps ({
    to: {
        type: [String, Object],
        required: true
    }
});
</script>
<template>
    <button class="button">
        <NuxtLink class="button__link" :to="to"><slot></slot></NuxtLink>
    </button>
</template>
<style lang="scss" scoped>

.button {
    background-color: $white;
    color: $accent-color;
    padding: $padding-button;
    cursor: pointer;
    @include border-button;
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
    &__link {
        text-decoration: none;
        color: $accent-color;
        @include font(18px, 600);
    }
}
</style>