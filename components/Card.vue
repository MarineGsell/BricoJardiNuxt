<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
})
</script>
<template>
    <div class="card">
        <div class="card__title">
            <component :is="icon" class="card__title__icon"/>
            <h3 class="card__title__text">{{title}}</h3>
        </div>
        <div class="card__content">{{subtitle}}</div>
        <ButtonsLittle to="/services">Services</ButtonsLittle>
    </div>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    width: 100%;
    height: 74px;
    overflow: hidden;
    padding: $paddin-card;
    background-color: $white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: $transition;
    cursor: pointer;
    @include flex(column, normal, normal, 32px);
    &:hover {
        height: 240px;
        border-radius: 0;
        .card__title {
            color: $second-color;
        }
    }
    &::after {
        content: "";
        position: absolute;
        background: $second-color;
        height: 3px;
        width: 100%;
        left: 0;
        top: 0;
        transform: scale(0);
        transition: transform 0.3s ease-in-out;
    }
    &:hover::after {
        transform: scale(1);
    }
    &__title {
        color: $main-color;
        @include flex(row, left, center, 16px);
        &__icon {
            height: 40px;
        }
        &__text {
            @include font(18px, 700) 
        }
    }
    &__content {
        @include font(16px, 400)
    }
}
</style>