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
    @include button-cta ($padding-button);
    @include responsive-tablette {
        @include button-cta ($padding-button-tablette);
    }
    @include responsive-mobile {
        @include button-cta ($padding-button-mobile);
    }
    &__link {
        text-decoration: none;
        color: $white;
    }
}</style>