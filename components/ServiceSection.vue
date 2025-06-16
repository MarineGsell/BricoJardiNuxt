<script setup>
const props = defineProps({
    sectionTitle: {
        type: String,
        required: true
    },
    sectionText: {
        type: String,
        default: ''
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
    <div class="service-section">
        <ImgSection :photoSection="imgService" />
        <div class="service-section__content">
            <div class="service-section__content__header">
                <h2 class="service-section__content__header__title">{{ sectionTitle }}</h2>
                <p class="service-section__content__header__text">{{ sectionText }}</p>
            </div>
            <div class="service-section__content__box">
                <div class="service-section__content__box__service">
                    <div 
                        class="service-section__content__box__service__item"
                        v-for="(service, index) in services"
                        :key="service.id"
                    >
                        <div class="service-section__content__box__service__item__title">
                            <component :is="service.icon" class="service-section__content__box__service__item__title__icon"/>
                            <h3 class="service-section__content__box__service__item__title__text">{{ service.title }}</h3>
                        </div>
                        <div class="service-section__content__box__service__item__text">{{ service.description }}</div>
                    </div>
                </div>
                <div class="service-section__content__box__buttons">
                    <ButtonsSecond to="/realisations">Voir nos réalisations</ButtonsSecond>
                    <ButtonsCta to="/contact">Demandez votre devis gratuit</ButtonsCta>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.service-section {
    width: 100vw;
    @include flex(column, center, center, $gap-second-desktop);
    @include responsive-tablette {
        @include flex(column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, center, $gap-second-mobile);
    }
    &__content {
        @include hover-underline-title('.service-section__content__header__title');
        @include padding-div;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__header {
            @include flex(column, center, start, $gap-third-desktop);
            @include responsive-tablette {
                @include flex(column, center, start, $gap-third-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, start, $gap-third-mobile);
            }
            &__title {
                @include font-h2($main-color);
            }
            &__text {
                @include font-p($text-color-main);
            }
        }
        &__box {
            @include flex(column, center, center, $gap-second-desktop);
            @include responsive-tablette {
                padding: $padding-section-tablette;
                @include flex(column, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                padding: $padding-section-mobile;
                @include flex(column, center, center, $gap-second-mobile);
            }
            &__service {
                @include flex(column, center, center, $gap-second-desktop);
                @include responsive-tablette {
                    @include flex(column, center, center, $gap-second-tablette);
                }
                @include responsive-mobile {
                    @include flex(column, center, center, $gap-second-mobile);
                }
                &__item {
                    transition: $transition;
                    @include card ($padding-card);
                    @include flex(column, center, start, $gap-second-desktop);
                    @include responsive-tablette {
                        @include card ($padding-card-tablette);
                        @include flex(column, center, start, $gap-second-tablette);
                    }
                    @include responsive-mobile {
                        @include card ($padding-card-mobile);
                        @include flex(column, center, start, $gap-second-mobile);
                    }
                    &:hover {
                        transform: scale(1.02);
                        .service-section__content__box__service__item__title__icon {
                            color: $main-color;
                        }
                        .service-section__content__box__service__item__title__text {
                            @include font-h3($main-color);
                        }

                    }
                    &__title {
                        color: $text-color-main;
                        @include flex(row, left, center, $gap-row);
                        &__icon {
                            height: $icons-height;
                            width: auto;
                            @include responsive-tablette {
                                color: $main-color;
                            }
                        }
                        &__text {
                            @include font-h3($text-color-main); 
                            @include responsive-tablette {
                                @include font-h3($main-color); 
                            }
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
            &__buttons {
                @include flex(row, center, center, $gap-second-desktop);
                @include responsive-tablette {
                    @include flex(row, center, center, $gap-second-tablette);
                }
                @include responsive-mobile {
                    @include flex(column, center, center, $gap-second-mobile);
                }
            }
        }
    }
}


</style>