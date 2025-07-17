<script setup>
</script>
<template>
    <section class="headerhero">
        <div class="headerhero__title">
            <h1 class="headerhero__title__text">Avec Brico Jardi profitez</h1>
            <div class="headerhero__title__anim">
                <h2 class="headerhero__title__anim__line">Jardin soigné</h2> 
                <h2 class="headerhero__title__anim__line">Terrasses durables</h2>
                <h2 class="headerhero__title__anim__line">Solutions uniques</h2> 
                <h2 class="headerhero__title__anim__line">Espaces réinventés</h2> 
                <h2 class="headerhero__title__anim__line">Murs impeccables</h2> 
            </div>
        </div>
        <p class="headerhero__subtitle">Brico Jardi, votre partenaire privilégié sur tout le Bassin d'Arcachon, vous propose des solutions de rénovation sur-mesure pour vos espaces intérieurs et extérieurs et s'adapte à chacune de vos demandes pour transformer vos projets en réalité.</p>
        <div class="headerhero__buttons">
            <ButtonsCta to="/contact#contactForm">Devis Gratuit</ButtonsCta>
            <ButtonsHero to="/services">Services</ButtonsHero>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.headerhero {
    margin-top: $margin-top;
    background-image: $round-gradient;
    color: $white;
    min-height: 100vh;
    @include flex (column, center, center, $gap-second-desktop);
    @include responsive-tablette {
        padding: $padding-header-hero-tablette;
        min-height: 100vh;
        @include flex (column, center, center, $gap-second-tablette);
    }
    @include responsive-mobile {
        padding: $padding-header-hero-mobile;
        min-height: 100vh;
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
                    animation: title-anim 12s infinite;
                    @include responsive-tablette {
                        animation: title-anim-tablette 12s infinite;
                    }
                    @include responsive-mobile {
                        animation: title-anim-mobile 12s infinite;
                    }
                }
            }
        }
    }
    &__subtitle {
        width: 50%;
        text-align: justify;
        @include font-p($white);    
        @include responsive-tablette {
            width: 100%;
        }
        @include responsive-mobile {
            width: 100%;
        }
    }
    &__buttons {
        @include flex (row, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex (column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex (column, center, center, $gap-second-mobile);
        }
    }
}
</style>