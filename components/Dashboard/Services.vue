<template>
    <div class="services">
        <h2 class="services__title">Services</h2>
        <div class="services__content">
            <p class="services__content__text">Modifier les services</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.services {
    @include padding-div;
    @include flex(column, center, start, $gap-second-desktop);
    @include hover-underline-title('.services__title');
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
    &__content {
        margin: auto;
        @include flex(column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, center, $gap-second-mobile);
        }
        &__text {
            @include font-p($text-color-main);
        }
        &__buttons {
            @include flex(row, center, center, $gap-second-desktop);
            @include responsive-tablette {
                @include flex(row, center, center, $gap-second-tablette);
            }
            @include responsive-mobile {
                @include flex(column, center, center, $gap-second-mobile);
            }
        }
    }
}
</style>