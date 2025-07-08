<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: ''
    },  
    button: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <section class="headerhero">
        <h1 class="headerhero__title">{{ title }}</h1>
        <p class="headerhero__text">{{ text }}</p>
        <div class="headerhero__buttons">
            <ButtonsCta to="/contact#contactForm">Devis Gratuit</ButtonsCta>
            <ButtonsHero :to="to">{{ button }}</ButtonsHero>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.headerhero {
    margin-top: $margin-top;
    background-image: $round-gradient;
    color: $white;
    min-height: 100vh;
    @include flex (column, center, center, $gap-second-desktop);
    @include responsive-tablette {
        padding: $padding-header-hero-tablette;
        min-height: fit-content;
        @include flex (column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex (column, center, center, $gap-second-mobile);
    }
    &__title {
        width: 70%;
        text-align: center;
        padding: $padding-header-hero-title;
        background-color: $second-color;
        @include font-h1($white);
    }
    &__text {
        width: 70%;
        @include font-p($white);    
    }
    &__buttons {
        @include flex (row, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex (column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex (column, center, center, $gap-second-mobile);
        }
    }
}
</style>