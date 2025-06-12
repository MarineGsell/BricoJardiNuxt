<script setup>
import realisations from '~/data/realisations'

const emit = defineEmits(['close'])
const handleClose = () => {
    emit('close')
}

const props = defineProps({
    realisation: {
        type: Object
    }
})
const title = computed(() => props.realisation.title) 
const img = computed(() => props.realisation.image) 
const works = computed(() => props.realisation.travaux) 

</script>
<template>
    <div class="modale">
        <div class="modale__overlay" @click="handleClose"></div>
        <div class="modale__window">
            <div class="modale__window__button" @click="handleClose">X</div>
            <h4 class="modale__window__title">{{ title }}</h4>
            <div class="modale__window__img" :style="{ backgroundImage:`url(${img})`}"></div>
            <ul class="modale__window__list">
                <li 
                    class="modale__window__list__item"
                    v-for="work in works"
                    :key="work"
                >
                    <SvgIconCheck class="modale__window__list__item__icon"/>
                    <p class="modale__window__list__item__text">{{ work }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modale {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    &__overlay {
        background-color: $overlay-dark;
        width: 100%;
        height: 100%;
    }
    &__window {
        background-color: $white;
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border-radius: 5px;
        padding: 32px 64px;
        @include flex(column, start, start, $gap-list);
        &__button {
            background-color: $second-color;
            color: $white;
            padding: 4px 8px;
            border-radius: 5px;
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
            @include font-p($white);
        }
        &__img {
            width: 100%;
            height: 300px;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            margin: auto;
        }
        &__title {
            width: 100%;
            text-align: center;
            @include font-h3($main-color);
        }
        &__list {
            list-style: none;
            &__item {
                @include flex(row, start, center, $gap-list);
                &__icon {
                    color: $second-color;
                }
                &__text {
                    @include font-p($text-color-main);
                }
            }
        }
    }
}
</style>