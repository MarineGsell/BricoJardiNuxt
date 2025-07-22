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

// Création des évènements
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
        <div class="card__content">
            <h3 class="card__content__title">{{ title }}</h3>
            <div class="card__content__place">
                <SvgIconPin class="card__content__place__icon"/>
                <p class="card__content__place__text">{{ place }}</p>
            </div>
            <NuxtImg class="card__content__img" :src="img"></NuxtImg>
            <p class="card__content__text">{{ description }}</p>
        </div>
        <div class="card__buttons">
            <ButtonsMain @click="handleOpen">Modifier</ButtonsMain>
            <ButtonsMain @click="handleDelete">Supprimer</ButtonsMain>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    @include card;
    @include flex(column, space-between, start, $gap-third-desktop);
    @include responsive-tablette {
        @include flex(column, space-between, start, $gap-third-tablette);
    }
    @include responsive-mobile {
        @include flex(column, space-between, start, $gap-third-mobile);
    }
    &__content {
        @include flex(column, start, start, $gap-third-desktop);
        @include responsive-tablette {
            @include flex(column, start, start, $gap-third-tablette);
        }
        @include responsive-mobile {
            @include flex(column, start, start, $gap-third-mobile);
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
            height: 300px;
            object-fit: cover;
            object-position: center;
        }
        &__text {
            @include font-p($text-color-main)
        }
    }
    &__buttons {
        width: 100%;
        @include flex(row, center, center, $gap-list)
    }
}
</style>