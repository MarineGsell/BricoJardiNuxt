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
    background-color: $main-color;
    @include flex(column, center, center, $gap-text);
    &__header {
        @include flex(column, center, center, $gap-text);
        &__title {
            text-transform: uppercase;
            @include font-h1($white);
        }
        &__subtitle {
            text-align: center;
            @include font-h2($white);
        }
    }
    &__text {
        text-align: center;
        @include font-p($white);
    }
}
</style>