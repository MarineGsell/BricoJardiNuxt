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
        <!-- <div class="img__overlay"></div> -->
    </section>
</template>
<style lang="scss">
.img {
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    &__overlay {
        width: 100%;
        height: 100%;
        background-color: $overlay;
    }
}
</style>