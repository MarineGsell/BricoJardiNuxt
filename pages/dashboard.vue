<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>
<template>
    <div class="dashboard">
        <DashboardHeaderHero />
        <div class="dashboard__content">
            <!-- <DashboardServices /> -->
            <DashboardRealisations />
            <DashboardAjoutRealisations />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dashboard {
    &__content {
        margin-top: $margin-top;
        margin-bottom: $margin-bottom;
        @include flex(column, center, center, $gap-main-desktop);
        @include responsive-tablette {
            margin-top: $margin-top-tablette;
            margin-bottom: $margin-bottom-tablette;
            @include flex(column, center, center, $gap-main-tablette);
        }
        @include responsive-mobile {
            margin-top: $margin-top-mobile;
            margin-bottom: $margin-bottom-mobile;
            @include flex(column, center, center, $gap-main-mobile);
        }
    }
}
</style>