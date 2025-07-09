<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    works: {
        type: Array,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }
})
const works = props.works
</script>
<template>
    <div class="card">
        <h3 class="card__title">{{ title }}</h3>
        <div class="card__place">
            <SvgIconPin class="card__place__icon"/>
            <p class="card__place__text">{{ place }}</p>
        </div>
        <NuxtImg class="card__img" :src="img"></NuxtImg>
        <!-- <ul class="card__list">
            <li 
                class="card__list__item"
                v-for="work in works"
                :key="work"
            >
                <SvgIconCheck class="card__list__item__icon"/>
                <p class="card__list__item__text">{{ work }}</p>
            </li>
        </ul> -->
        <p class="card__text">{{ description }}</p>
        <div class="card__buttons">
            <ButtonsMain>Modifier</ButtonsMain>
            <ButtonsMain>Supprimer</ButtonsMain>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    @include card;
    @include flex(column, center, start, $gap-third-desktop);
    @include responsive-tablette {
        @include flex(column, center, start, $gap-third-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, start, $gap-third-mobile);
    }
    &__title {
        width: 100%;
        text-align: center;
        @include font-h3($main-color);
    }
    &__place {
        @include flex(row, start, center, $gap-list);
        &__icon {
            color: $text-color-main;
        }
        &__text {
            @include font-p($text-color-main);
        }
    }
    &__img {
        width: 100%;
        border-radius: 5px;
        margin: auto;
        height: 300px;
        object-fit: cover;
        object-position: center;
    }
    &__list {
        @include flex(column, center, start, $gap-list);
        &__item {
            @include flex(row, start, center, $gap-list);
            &__icon {
                color: $second-color;
            }
            &__text {
                @include font-p($text-color-main)
            }
        }
    }
    &__text {
        @include font-p($text-color-main)
    }
    &__buttons {
        width: 100%;
        @include flex(row, center, center, $gap-list)
    }
}
</style>