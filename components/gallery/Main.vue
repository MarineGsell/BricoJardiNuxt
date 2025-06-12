<script setup>
import realisations from '@/data/realisations';

// Filter Bar
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

// Modale
const modale = ref(false)
const selectedRealisation = ref(null)
const openModale = (realisation) => {
    selectedRealisation.value = realisation
    modale.value = true
}
const closeModale = () => {
    modale.value = false
}

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
                @click="openModale(realisation)"
            />
            <GalleryModale 
                v-if="modale" 
                @close="closeModale()"
                :realisation="selectedRealisation"
            />

        </div>
    </div>
</template>
<style lang="scss" scoped>
.gallery {
    width: 100%;
    margin-bottom: 64px;
    @include flex(column, center, center, $gap-main-desktop);
    @include responsive-tablette {
        @include flex(column, center, center, $gap-main-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, center, $gap-main-mobile);
    }
    &__content {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $gap-second-desktop;
        @include responsive-tablette {
        gap: $gap-second-tablette;
        }   
        @include responsive-mobile {
            grid-template-columns: repeat(1, 1fr);
            gap: $gap-second-mobile;
        }
    }
}
</style>