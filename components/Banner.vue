<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
})
</script>
<template>
    <div class="banner">
        <h2 class="banner__title">{{title}}</h2>
        <p class="banner__subtitle">{{subtitle}}</p>
    </div>
</template>
<style lang="scss" scoped>
.banner {
    height: 400px;
    color: $white;
    background-color: $main-color;
    padding: 0 120px;
    @include flex(column, center, center, 40px);
    &__title {
        @include font(48px, 700)
    }
    &__subtitle {
        text-align: center;
        @include font(18px, 400)
        
    }
}
</style>