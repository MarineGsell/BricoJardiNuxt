<script setup>
const props = defineProps({
    bgImg: {
        type: [String, Object]
    }
})
</script>
<template>
    <div class="slide" :style="{ backgroundImage:`url(${bgImg})` }"></div>
</template>
<style lang="scss" scoped>
.slide {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
}
</style>