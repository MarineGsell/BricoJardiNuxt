<script setup>
const props = defineProps({
    photoSection: {
        type: String, 
        required: true
    }
})
</script>
<template>
    <section class="img" :style="{ backgroundImage:`url(${photoSection})` }">
    </section>
</template>
<style lang="scss">
.img {
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @include responsive-tablette {
        height: 50vh;
        background-position: center 30%;
        background-attachment: scroll;
    };
    @include responsive-mobile {
        height: 40vh;
        background-position: center 20%;
        background-attachment: scroll;
    }
    &__overlay {
        width: 100%;
        height: 100%;
        background-color: $overlay;
    }
}
</style>