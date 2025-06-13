<script setup>
const props = defineProps({
    bannerTitle: {
        type: String,
        required: true
    },
    bannerText: {
        type: String,
        default: ''
    },
    flexDirection: {
        type: String,
        required: true
    },
    imgService: {
        type: [String, Object],
        required: true
    },
    imgAlt: {
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
    <div>
        <Banner 
            :title= "bannerTitle"
            :text= "bannerText"
        />
        <div class="box">
            <div class="box__service" :style="{ flexDirection:`${flexDirection}` }">
                <img :src="imgService" :alt="imgAlt" class="box__service__img">
                <div class="box__service__content">
                    <div 
                        class="box__service__content__item"
                        v-for="(service, index) in services"
                        :key="service.id"
                    >
                        <div class="box__service__content__item__title">
                            <component :is="service.icon" class="box__services__content__item__title__icon"/>
                            <h3 class="box__service__content__item__title__text">{{ service.title }}</h3>
                        </div>
                        <div class="box__service__content__item__text">{{ service.description }}</div>
                        <Line v-if="index < services.length - 1" class="box__service__content__item__line"/>
                    </div>
                </div>
            </div>
            <ButtonsAccent to="/contact">Devis gratuit</ButtonsAccent>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.box {
    padding: $padding-section;
    @include flex(column, center, center, $gap-main-desktop);
    @include responsive-tablette {
        padding: $padding-section-tablette;
        @include flex(column, center, center, $gap-main-tablette);
    }
    @include responsive-mobile {
        padding: $padding-section-mobile;
        @include flex(column, center, center, $gap-main-mobile);
    }
    &__service {
    @include center;
    gap: $gap-second-desktop;
    @include responsive-tablette {
        gap: $gap-second-tablette;
    }
    @include responsive-mobile {
        gap: $gap-second-mobile;
    }
    &__img {
        height: 560px;
        width: 560px;
        object-fit: cover;
        object-position: center;
        @include responsive-tablette {
            height: 400px;
            width: 400px;
        }
        @include responsive-mobile {
            height: 300px;
            width: 300px;
        }
    }
    &__content {
        @include flex(column, normal, normal, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, normal, normal, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, normal, normal, $gap-second-mobile);
        }
        &__item {
            &__title {
                    color: $second-color;
                    @include flex(row, left, center, $gap-row);
                    &__icon {
                        height: $icons-height;
                    }
                    &__text {
                        @include font-h3($text-color-main); 
                    }
                }
                &__text {
                    margin-bottom: $gap-second-desktop;
                    @include font-p($text-color-main);
                    @include responsive-tablette {
                        margin-bottom: $gap-second-tablette;
                    }
                    @include responsive-mobile {
                        margin-bottom: $gap-second-mobile;
                    }
                }
                &__line {
                    color: $second-color;
                }
            }
        }
    }
}
</style>