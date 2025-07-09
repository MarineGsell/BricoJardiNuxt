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
    @include card;
    @include flex(column, normal, normal, $second-gap-desktop);
    @include responsive-tablette {
        @include flex(column, normal, normal, $second-gap-tablette);
    }
    @include responsive-mobile {
        @include flex(column, normal, normal, $second-gap-mobile);
    }
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
        transition: $transition;
    }
    &:hover::after {
        transform: scale(1);
    }
    &__title {
        color: $main-color;
        @include flex(row, left, center, $padding-row);
        &__icon {
            height: 40px;
        }
        &__text {
            @include font-h3;
        }
    }
    &__content {
        @include font-p($text-color-main);
    }
}
</style>