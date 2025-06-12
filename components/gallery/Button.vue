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
    @include button-gallery ($padding-button);
    @include responsive-tablette {
        @include button-gallery ($padding-button-tablette);
    }
    @include responsive-mobile {
        @include button-gallery ($padding-button-mobile);
    }
    &__link {
        text-decoration: none;
    }
}
</style>