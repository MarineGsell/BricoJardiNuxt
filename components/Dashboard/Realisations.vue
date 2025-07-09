<script setup>
import realisations from '~/data/realisations';

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

</script>
<template>
    <div class="realisations" id="realisationsAdmin">
        <h2 class="realisations__title">realisations</h2>
        <div class="realisations__filters">
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
        <div class="realisations__content">
            <div class="realisations__content__cards">
                <DashboardCard 
                    v-for="realisation in filteredRealisations"
                    :title="realisation.title"
                    :place="realisation.place"
                    :img="realisation.image"
                    :works="realisation.travaux"
                    :description="realisation.description"
                    :key="realisation.id"
                />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.realisations {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.realisations__title');
    @include responsive-tablette {
        @include flex(column, center, start, $gap-second-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, start, $gap-second-mobile);
    }
    &__title {
        width: 100%;
        @include font-h2($main-color);
    }
    &__filters {
        width: 100%;
        @include flex(row, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(row, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
    }
    &__content {
        margin: auto;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: $gap-third-desktop;
            @include responsive-tablette {
                grid-template-columns: repeat(1, 1fr);
                gap: $gap-third-tablette;
            }
            @include responsive-mobile {
                grid-template-columns: repeat(1, 1fr);
                gap: $gap-third-mobile;
            }
        }
    }
}
</style>