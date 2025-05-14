<script setup>
const props = defineProps({
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['filter']) 

const handleClick = () => {
    emit('filter', props.category)
}
</script>
<template>
    <button 
        class="button" 
        :class="{ 'button--active' : isActive }"
        @click="handleClick"
    >
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>
.button {
    background-color: $main-color-light;
    color: $white;
    padding: $padding-button;
    cursor: pointer;
    transition: $transition;
    @include border-button;
    @include font(18px, 400);
    &:hover {
        background-color: $main-color-dark;
    }
    &--active {
        background-color: $main-color-dark;
    }
}
</style>