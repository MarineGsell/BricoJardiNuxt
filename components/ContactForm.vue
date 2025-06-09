
<template>
    <form action="#" class="form">
        <div class="form__div">
            <label for="" class="form__div__label" >
                Nom
                <input type="text" class="form__div__label__input">
            </label>
            <label for="" class="form__div__label" >
                Prénom
                <input type="text" class="form__div__label__input">
            </label>
        </div>
        <div class="form__div">
            <label for="" class="form__div__label" >
                Email
                <input type="email" class="form__div__label__input">
            </label>
            <label for="" class="form__div__label" >
                Téléphone
                <input type="tel" class="form__div__label__input">
            </label>
        </div>
        <div class="form__div">
            <label for="" class="form__div__label" >
                Message
                <textarea name="" id="" rows="5" placeholder="Votre message..." class="form__div__label__input" />
            </label>
        </div>
        <ButtonsAccent 
            class="form__button"
            type="submit"
        >Envoyer</ButtonsAccent>
    </form>
</template>
<style lang="scss" scoped>
.form {
    width: 100%;
    @include flex(column, center, center, $gap-form);
    @include font-p($text-color-main);
    &__div {
        width: 100%;
        @include flex(row, start, center, $gap-form);
        &__label {
            width: 100%;
            @include flex(column, center, start, $gap-label);
            &__input {
                @include form-input($text-color-main);
            }
        }
    }
    &__button {
        margin-top: $gap-second-desktop;
        @include responsive-tablette {
            margin-top: $gap-second-tablette;
        }
        @include responsive-mobile {
            margin-top: $gap-second-mobile;
        }
    }
}
</style>