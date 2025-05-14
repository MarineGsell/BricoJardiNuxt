<script setup>
import realisations from '@/data/realisations';

const categories = ['Tous', 'Travaux extérieurs', 'Travaux intérieurs'] 
const activeCategory = ref('Tous')
const filteredRealisations = ref([...realisations])

const filteredByCategory = (category) => {
    activeCategory.value = category
    if(category === 'Tous'){
        filteredRealisations.value = [...realisations]
    } else {
        filteredRealisations.value = realisations.filter(realisation => realisation.categorie === category)
    }
    return filteredRealisations
}
console.log(filteredRealisations)

</script>
<template>
    <div class="gallery">
        <div class="gallery__filters">
            <GalleryButton 
                v-for="category in categories"
                :key="category"
                :category="category"
                :isActive="activeCategory === category"
                @filter="filteredByCategory"
            >
            {{ category }}
            </GalleryButton>
        </div>
        <div class="gallery__content">
            <GalleryCard 
                v-for="realisation in filteredRealisations"
                :key="realisation.id"
                :cover="realisation.image"
                :title="realisation.title"
                class="gallery__card"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.gallery {
    width: 100%;
    margin-bottom: 64px;
    @include flex(column, center, center, 64px);
    &__filters {
        @include flex(row, center, center, 48px);
    }
    &__content {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
}
</style>