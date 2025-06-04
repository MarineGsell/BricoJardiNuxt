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
        <h1 class="card__title">{{title}}</h1>
        <p class="card__text">{{text}}</p>
        <ButtonsAccent class="card__button" :to="ctaLink">{{ ctaText }}</ButtonsAccent>
    </div>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    width: 80%;
    margin: auto;
    padding: $padding-big-card;
    background-color: $white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: $transition;
    cursor: pointer;
    @include flex(column, center, center, 56px);
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
        color: $main-color;
        text-align: center;
        text-transform: uppercase;
        transition: $transition;
        @include font(48px, 700);
    }
    &__text {
        @include font(16px, 400)
    }
    &__button {
        width: fit-content;
    }
}
</style>