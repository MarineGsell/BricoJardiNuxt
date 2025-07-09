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
    @include card;
    @include flex(column, normal, normal, $gap-second-desktop);
    @include responsive-tablette {
        height: auto;
        @include flex(column, normal, normal, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, normal, normal, $gap-second-mobile);
    }
    &:hover {
        height: 350px;
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
        transition: $transition;
    }
    &:hover::after {
        transform: scale(1);
    }
    &__header {
        @include center;
        flex-shrink: 0;
        height: 79px;
        &__title {
            text-align: center;
            @include font-h3($main-color);
        }
    }
    &__content {
        list-style: none;
        @include flex(column, left, normal, $gap-list);
        &__item {
            @include flex(row, left, center, $gap-list);
            &__icon {
                color: $second-color;
                height: $icons-height;
            }
            &__text {
                @include font-p($text-color-main);
            }
        }
    }
}
</style>