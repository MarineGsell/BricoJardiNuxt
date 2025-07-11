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
    description: {
        type: String, 
        required: true
    }
})

const emit = defineEmits(['open', 'delete'])
const handleOpen = () => {
    emit('open')
}
const handleDelete = () => {
    emit('delete')
}

</script>
<template>
    <div class="card">
        <h3 class="card__title">{{ title }}</h3>
        <div class="card__place">
            <SvgIconPin class="card__place__icon"/>
            <p class="card__place__text">{{ place }}</p>
        </div>
        <NuxtImg class="card__img" :src="img"></NuxtImg>
        <p class="card__text">{{ description }}</p>
        <div class="card__buttons">
            <ButtonsMain @click="handleOpen">Modifier</ButtonsMain>
            <ButtonsMain @click="handleDelete">Supprimer</ButtonsMain>
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
        height: 72px;
        width: 100%;
        @include font-h3($main-color);
        @include center;
    }
    &__place {
        width: 100%;
        @include flex(row, start, center, $gap-list);
        &__icon {
            color: $text-color-main;
            height: $icons-height;
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