<script setup>
const { data: worksData } = await useFetch('/api/works')
const works = computed(() => {
    return worksData.value
})

// Filter Bar
const categories = ['Tous', 'Travaux extérieurs', 'Travaux intérieurs'] 
const activeCategory = ref('Tous')
const filteredWorks = computed(() => {
    if(activeCategory.value === 'Tous'){
        return works.value
    } else {
        return works.value?.filter(work => work.category === activeCategory.value)
    }
})

const filteredByCategory = (category) => {
    activeCategory.value = category
}

// Modale
const modale = ref(false)
const selectedWork = ref(null)
const openModale = (work) => {
    selectedWork.value = work
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
                v-for="work in filteredWorks"
                :key="work.id"
                :cover="work.image"
                :title="work.title"
                class="gallery__card"
                @click="openModale(work)"
            />
            <GalleryModale 
                v-if="modale" 
                @close="closeModale()"
                :realisation="selectedWork"
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
    &__filters {
        @include flex(row, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(row, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
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