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
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: $border-card;
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
        border-radius: $border-card;
        transition: $transition;
        &:hover {
            opacity: 1;
        }
        &__title {
            height: 100%;
            width: 100%;
            color: $white;
            padding: 16px;
            opacity: 0;
            transition: $transition;
            @include font(18px, 600);
            @include flex(row, start, end, 0);
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>