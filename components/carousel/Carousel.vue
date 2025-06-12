<script setup>
// Data
import carouselItems from '@/data/carouselItems'

const currentItem = ref(0)
const direction = ref('right')

const goToPrev = () => {
    direction.value = 'left'
    if(currentItem.value === 0){
        currentItem.value = carouselItems.length -1
    } else {
        currentItem.value--
    }
}

const goToNext = () => {
    direction.value = 'right'
    if(currentItem.value === carouselItems.length -1) {
        currentItem.value = 0
    } else {
        currentItem.value++
    }
}

</script>
<template>
    <div class="carousel">
        <div class="carousel__container">
            <CarouselArrowsPrev 
                @click="goToPrev"
                class="carousel__container__arrows"
            />
            <div class="carousel__container__current">
                <Transition
                    :name="direction === 'right' ? 'slide-right' : 'slide-left'" 
                    mode="out-in"
                >
                    <CarouselSlide 
                    :key="currentItem"
                    class="carousel__container__current__slide"
                    :bgImg="carouselItems[currentItem].image"
                    />
                </Transition>
            </div>
            <CarouselArrowsNext 
                @click="goToNext"
                class="carousel__container__arrows"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carousel {
    @include flex(row, center, center, 20px);
    &__container {
        @include flex(row, center, center, 20px);
        &__current {
            border-radius: 10px;
            height: 500px;
            width: 80vw;
            position: relative;
            overflow: hidden;
            &__slide {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                transition: $transition;
            }
        }
        &__arrows {
            height: 40px;
            width: 40px;
            opacity: 0.3;
            color: $main-color;
            @include flex(row, center, center, 0);
            &:hover {
                opacity: 1;
                cursor: pointer;
                transition: $transition;
            }
        }
    }
}

// Animation pour la transition vers la droite
.slide-right-enter-active,
.slide-right-leave-active {
  transition: $transition-carousel;
}
.slide-right-enter-from {
    opacity: 0;
}
.slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

// Animation pour la transition vers la gauche
.slide-left-enter-active,
.slide-left-leave-active {
  transition: $transition-carousel;
}
.slide-left-enter-from {
    opacity: 0;
}
.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>