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
    padding: 80px 120px;
    @include flex(column, center, center, 40px);
    &__service {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
        &__img {
            height: 560px;
            width: 560px;
            object-fit: cover;
            object-position: center;
        }
        &__content {
            @include flex(column, normal, normal, 40px);
            &__item {
                &__title {
                    color: $second-color;
                    margin-bottom: 16px;
                    @include flex(row, left, center, 16px);
                    &__icon {
                        height: 40px;
                    }
                    &__text {
                        @include font(24px, 600) 
                    }
                }
                &__text {
                    margin-bottom: 40px;
                    @include font(18px, 400)
                }
                &__line {
                    color: $second-color;
                }
            }
        }
    }
}
</style>