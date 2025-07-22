<script setup>
const props = defineProps({
cover: {
    type: String, 
    required: true
    },
title: {
    type: String, 
    required: true
}
})
</script>
<template>
    <div class="card" :style="{ backgroundImage:`url(${cover})`}">
        <div class="card__overlay">
            <h3 class="card__overlay__title">{{ title }}</h3>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    height: 240px;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: $border-radius-card;
    cursor: pointer;
    transition: $transition;
    &:hover {
        transform: scale(1.1);
    }
    &__overlay {
        height: 100%;
        width: 100%;
        opacity: 0;
        background-color: $overlay;
        border-radius: $border-radius-card;
        transition: $transition;
        &:hover {
            opacity: 1;
        }
        &__title {
            height: 100%;
            width: 100%;
            padding: $padding-card;
            opacity: 0;
            transition: $transition;
            @include font-p($white);
            @include flex(row, start, end, 0);
            @include responsive-tablette {
                padding: $padding-card-tablette;
            }
            @include responsive-mobile {
                padding: $padding-card-mobile;
            }
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>