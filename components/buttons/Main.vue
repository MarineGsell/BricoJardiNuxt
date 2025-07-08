<script setup>
const props = defineProps ({
    to: {
        type: [String, Object],
    },
    type: {
        type: String,
        default: ''
    }
});

</script>
<template>
    <NuxtLink v-if="type === ''" class="button" :to="to">
        <slot></slot>
    </NuxtLink>
    <button v-else :type="type" class="button">
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>
.button {
    color: $white;
    text-decoration: none;
    @include button-main ($padding-button);
    @include responsive-tablette {
        @include button-main ($padding-button-tablette);
    }
    @include responsive-mobile {
        @include button-main ($padding-button-mobile);
    }
}
</style>