<script setup>
</script>
<template>
    <section class="headerhero" id="headerAdmin">
        <div class="headerhero__title">
            <h1 class="headerhero__title__text">Tableau de bord</h1>
            <div class="headerhero__title__anim">
                <h2 class="headerhero__title__anim__line">Coucou Papa !</h2> 
                <h2 class="headerhero__title__anim__line">Met à jour ...</h2> 
                <h2 class="headerhero__title__anim__line">... tes réalisations !</h2> 
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.headerhero {
    margin-top: $margin-top;
    background-image: $round-gradient;
    color: $white;
    min-height: 50vh;
    @include flex (column, center, center, $gap-second-desktop);
    @include responsive-tablette {
        padding: $padding-header-hero-tablette;
        min-height: 50vh;
        @include flex (column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        padding: $padding-header-hero-mobile;
        min-height: 50vh;
        @include flex (column, center, center, $gap-second-mobile);
    }
    &__title {
        width: 70%;
        @include flex (column, center, center, $gap-title);
        @include responsive-tablette {
            width: 100%;
        }
        @include responsive-mobile {
            width: 100%;
        }
        &__text {
            text-align: center;
            @include font-h1($white);
        }
        &__anim {
            height: 88px;
            overflow: hidden;
            background-color: $second-color;
            padding: $padding-header-hero-title;
            @include flex (column, normal, center, 0);
            @include responsive-tablette {
                height: 64px;
                padding: 0 16px;
            }
            @include responsive-mobile {
                height: 48px;
                padding: 0 8px;
            }
            &__line {
                @include font-anim (88px, 64px, 700);
                @include responsive-tablette {
                    @include font-anim (64px, 48px, 700);
                }
                @include responsive-mobile {
                    @include font-anim (48px, 32px, 700);
                }
                &:first-child {
                    animation: title-anim-dashboard 6s infinite;
                    @include responsive-tablette {
                        animation: title-anim-dashboard-tablette 6s infinite;
                    }
                    @include responsive-mobile {
                        animation: title-anim-dashboard-mobile 6s infinite;
                    }
                }
            }
        }
    }
}
</style>