<script setup>
const emit = defineEmits(['close'])
const handleClose = () => {
    emit('close')
}

const props = defineProps({
    realisation: {
        type: Object
    }
})

// Utilisation de blob
const { getBlobUrl } = useBlobUrl()

const title = computed(() => props.realisation.title) 
const img = computed(() => props.realisation.image) 
const works = computed(() => props.realisation.travaux) 
const place = computed(() => props.realisation.place) 

</script>
<template>
    <div class="modale">
        <div class="modale__overlay" @click="handleClose"></div>
        <div class="modale__window">
            <div class="modale__window__button" @click="handleClose">X</div>
            <h3 class="modale__window__title">{{ title }}</h3>
            <div class="modale__window__place">
                <SvgIconPin class="modale__window__place__icon"/>
                <p class="modale__window__place__text">{{ place }}</p>
            </div>
            <div class="modale__window__img" :style="{ backgroundImage: getBlobUrl(realisation.imgSrc)}"></div>
            <p class="modale__window__text">{{ realisation.description }}</p>
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
        width: 50vw;
        max-height: 70vh;
        overflow-y: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border-radius: 5px;
        padding: 32px 64px;
        @include flex(column, start, start, $gap-list);
        @include responsive-tablette {
            width: 80vw;
        }
        @include responsive-mobile {
            padding: 12px 24px;
        }
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
            min-height: 400px;
            height: auto;
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            margin: auto;
            flex-shrink: 0;
            @include responsive-mobile {
                min-height: 300px;
            }
        }
        &__title {
            width: 100%;
            text-align: center;
            @include font-h3($main-color);
        }
        &__place {
            @include flex(row, center, center, $gap-row);
            &__icon {
                color: $text-color-main;
                height: 24px;
            }
            &__text {
                @include font-p($text-color-main);
            }
        }
        &__text {
            @include font-p($text-color-main);
        }
    }
}
</style>