<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="banner">
        <div class="banner__header">
            <h2 class="banner__header__title">{{title}}</h2>
            <h3 class="banner__header__subtitle">{{subtitle}}</h3>
        </div>
        <p class="banner__text">{{ text }}</p>
    </div>
</template>
<style lang="scss" scoped>
.banner {
    min-height: 400px;
    color: $white;
    background-color: $main-color;
    padding: 0 120px;
    @include flex(column, center, center, 40px);
    &__header {
        @include flex(column, center, center, 16px);
        &__title {
            text-transform: uppercase;
            @include font(48px, 700)
        }
        &__subtitle {
            text-align: center;
            @include font(32px, 700);
        }
    }
    &__text {
        text-align: center;
        @include font(18px, 400);
    }
}
</style>