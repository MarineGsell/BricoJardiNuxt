<script setup>

</script>
<template>
    <section class="headerhero">
        <div class="headerhero__title">
            <h1 class="headerhero__title__text">Avec Brico Jardi profitez</h1>
            <div class="headerhero__title__anim">
                <h2 class="headerhero__title__anim__line">d'un jardin soigné</h2> 
                <h2 class="headerhero__title__anim__line">de terrasses durables</h2>
                <h2 class="headerhero__title__anim__line">de solutions uniques</h2> 
                <h2 class="headerhero__title__anim__line">d'espaces verts parfaits</h2> 
                <h2 class="headerhero__title__anim__line">de murs impeccables</h2> 
            </div>
        </div>
        <p class="headerhero__subtitle">Brico Jardi, votre partenaire privilégié sur tout le Bassin d'Arcachon, vous propose des solutions de rénovation sur-mesure pour vos espaces intérieurs et extérieurs et s'adapte à chacune de vos demandes pour transformer vos projets en réalité.</p>
        <div class="headerhero__buttons">
            <ButtonsAccent to="/contact">Devis Gratuit</ButtonsAccent>
            <ButtonsRegular to="/services">Services</ButtonsRegular>
            
        </div>
    </section>
</template>
<style lang="scss">
@keyframes title-anim {
    0% {
        margin-top: 0;
    }
    12.5% {
        margin-top: -88px;
    }
    25% {
        margin-top: -176px;
    }
    37.5% {
        margin-top: -264px;
    }
    50% {
        margin-top: -352px;
    }
    62.5% {
        margin-top: -264px;
    }
    75% {
        margin-top: -176px;
    }
    87.5% {
        margin-top: -88px;
    }
    100% {
        margin-top: 0;
    }
};
.headerhero {
    margin-top: $margin-top;
    padding: 64px 0;
    background-image: linear-gradient(to top, #387187, #2f667c, #255c71, #1b5167, #10475c);
    color: $white;
    @include flex (column, center, center, 64px);
    &__title {
        width: 70%;
        margin: auto;
        @include flex (column, center, center, 24px);
        &__text {
            text-align: center;
            @include font(64px, 700);
        }
        &__anim {
            height: 88px;
            overflow: hidden;
            background-color: $second-color;
            padding: 0 32px;
            @include flex (column, normal, center, 0);
            &__line {
                @include font-anim (88px, 64px, 700);
                &:first-child {
                    animation: title-anim 12s infinite;
                }
            }


        }
    }
    &__subtitle {
        width: 50%;
        margin: auto;
        text-align: center;
        @include font(18px, 400)
    }
    &__buttons {
        @include flex (row, center, center, 56px)
    }
}
</style>