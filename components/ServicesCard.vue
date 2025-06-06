<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    services: {
        type: Array,
        required: true
    },
})
</script>
<template>
    <div class="card">
        <div class="card__header">
            <h3 class="card__header__title">{{title}}</h3>
        </div>
        <ul class="card__content">
            <li class="card__content__item" 
                v-for="service in services" 
                :key="service.id"
            >
                <component :is="service.icon" class="card__content__item__icon"/>
                <p class="card__content__item__text">{{service.title}}</p>
            </li>
        </ul>
        <div 
            class="box__service__content__item"
            v-for="service in services"
            :key="service.id"
        ></div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    width: 100%;
    height: 119px;
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
        height: 320px;
        border-radius: 0;
        .card__header__title {
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
    &__header {
        @include flex(column, center, center, 0);
        flex-shrink: 0;
        height: 119px;
        &__title {
            color: $main-color;
            text-align: center;
            @include font(24px, 700);
        }
    }
    &__content {
        list-style: none;
        @include flex(column, left, normal, 16px);
        &__item {
            @include flex(row, left, center, 16px);
            &__icon {
                color: $second-color;
                height: 32px;
            }
            &__text {
                @include font(18px, 400);
            }
        }
    }
}
</style>