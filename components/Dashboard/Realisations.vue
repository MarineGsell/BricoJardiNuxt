<script setup>
// Data
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

// Suppression de projet
const deleteWork = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
        $fetch(`/api/works/${id}`, {
            method: 'DELETE'
        })
        .then(async () => {
            await refreshNuxtData()
            alert('Projet supprimé avec succès')
        })
        .catch((e) => alert(e))
    }
}

// Modale
const modale = ref(false)
const currentWorkId = ref(null)
const openModale = (id) => {
    currentWorkId.value = id
    modale.value = true
}
const closeModale = () => {
    modale.value = false
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
                    v-for="work in filteredWorks"
                    :title="work.title"
                    :place="work.place"
                    :img="work.imgSrc"
                    :description="work.description"
                    :key="work.id"
                    @delete="deleteWork(work.id)"
                    @open="openModale(work.id)"
                />
                <DashboardModale 
                    v-if="modale"
                    :workId="currentWorkId"
                    @close="closeModale()"
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