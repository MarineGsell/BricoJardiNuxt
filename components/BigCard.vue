<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    ctaLink: {
        type: String,
        default: ''
    },
    ctaText: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="card">
        <BorderAnimation />
        <h2 class="card__title">{{title}}</h2>
        <p class="card__text">{{text}}</p>
        <ButtonsAccent class="card__button" :to="ctaLink">{{ ctaText }}</ButtonsAccent>
    </div>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    width: 80%;
    margin: auto;
    @include flex(column, center, center, $gap-second-desktop);
    @include card($padding-card);
    @include responsive-tablette {
        @include card($padding-card-tablette);
        @include flex(column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include card($padding-card-mobile);
        @include flex(column, center, center, $gap-second-mobile);
    }
    &:hover {
        border-radius: 0;
        border: none;
        // Déclencher l'animation des bordures
        :deep(.border) {
            transform: scale(1);
        }
        :deep(.border-left),
        :deep(.border-right) {
            transform: scaleY(1);
        }
        .card__title {
            color: $accent-color;
        }
    }
    &__title {
        text-align: center;
        transition: $transition;
        @include font-h2($main-color);
    }
    &__text {
        @include font-p($text-color-main);
    }
    &__button {
        width: fit-content;
    }
}
</style>