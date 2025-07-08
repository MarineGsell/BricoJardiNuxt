<template>
    <div class="mentions">
        <div class="mentions__header">
            <h1 class="mentions__header__title">Mentions Légales</h1>
        </div>
        <div class="mentions__content">
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Informations légales</h2>
                <p class="mentions__content__infos__text">
                    Le présent site est édité par [NOM DE L'ENTREPRISE], 
                    [Auto-entrepreneur / SARL / SAS / etc.] 
                    dont le siège social est situé [ADRESSE COMPLÈTE]. 
                    L'entreprise est immatriculée sous le numéro SIRET [NUMÉRO SIRET] 
                    et le numéro SIREN [NUMÉRO SIREN]. 
                    Le capital social s'élève à [MONTANT] euros. 
                    Vous pouvez nous contacter par téléphone au [NUMÉRO DE TÉLÉPHONE] 
                    ou par email à l'adresse dgsell@hotmail.fr.
                    Le directeur de publication du site est [NOM DU DIRIGEANT].
                </p>
            </div>
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Hébergement</h2>
                <p class="mentions__content__infos__text">
                    Ce site est hébergé par Cloudflare, Inc., 
                    société basée au 101 Townsend St, 
                    San Francisco, CA 94107, USA. 
                    Pour plus d'informations, 
                    vous pouvez consulter leur site web à l'adresse 
                    <a class="mentions__content__infos__text__link" href="https://www.cloudflare.com">https://www.cloudflare.com.</a>             
                </p>
            </div>
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Développement</h2>
                <p class="mentions__content__infos__text">
                    Ce site a été conçu et développé par Marine Chopin Gsell. 
                    Vous pouvez découvrir son portfolio à l'adresse suivante : 
                    <a class="mentions__content__infos__text__link" href="https://marine.chopingsell.com/">https://marine.chopingsell.com/</a>            
                </p>
            </div>
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Propriété intellectuelle</h2>
                <p class="mentions__content__infos__text">
                    L'ensemble de ce site relève de la législation 
                    française et internationale sur le droit d'auteur 
                    et la propriété intellectuelle. Tous les droits 
                    de reproduction sont réservés.            
                </p>
            </div>
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Protection des données personnelles</h2>
                <p class="mentions__content__infos__text">
                    Conformément au Règlement Général sur la 
                    Protection des Données (RGPD), vous disposez 
                    d'un droit d'accès, de rectification et de 
                    suppression des données vous concernant.
                </p>
                <h3 class="mentions__content__infos__subtitle">Données collectées</h3>
                <ul class="mentions__content__infos__list">
                    <li class="mentions__content__infos__list__item">Nom, prénom, email, téléphone via le formulaire de contact</li>
                    <li class="mentions__content__infos__list__item">Finalité : traitement des demandes de devis</li>
                    <li class="mentions__content__infos__list__item">Durée de conservation : 3 ans</li>
                    <li class="mentions__content__infos__list__item">Destinataire : Brico Jardi</li>
                </ul>
                <p class="mentions__content__infos__text">Pour exercer vos droits, contactez-nous à : dgsell@hotmail.fr</p>
            </div>
            <div class="mentions__content__infos">
                <h2 class="mentions__content__infos__title">Cookies</h2>
                <p class="mentions__content__infos__text">
                    Ce site n'utilise pas de cookies de tracking ou de publicité.            
                </p>
            </div>
            <p class="mentions__content__text">Dernière mise à jour : Juillet 2025</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mentions {
    margin-top: $margin-top;
    margin-bottom: $margin-bottom; 
    @include flex(column, center, center, $gap-main-desktop);
    @include responsive-tablette {
        @include flex(column, center, center, $gap-main-tablette);
    }
    @include responsive-mobile {
        @include flex(column, center, center, $gap-main-mobile);
    }
    &__header {
        width: 100%;
        height: 400px;
        background-image: $round-gradient;
        color: $white;
        @include flex (column, center, center, $gap-second-desktop);
        @include responsive-tablette {
            padding: $padding-header-hero-tablette;
            height: 320px;
            @include flex (column, center, center, $gap-second-tablette);
        }
        @include responsive-mobile {
            height: 200px;
            @include flex (column, center, center, $gap-second-mobile);
        }
        &__title {
            text-align: center;
            padding: $padding-header-hero-title;
            background-color: $second-color;
            @include font-h1($white);
        }
    }
    &__content {
        @include padding-div;
        @include flex(column, center, start, $gap-second-desktop);
        @include responsive-tablette {
            @include flex(column, center, start, $gap-second-tablette);
        }
        @include responsive-mobile {
            @include flex(column, center, start, $gap-second-mobile);
        }
        &__infos {
            width: 100%;
            @include flex(column, start, start, $gap-third-desktop);
            @include responsive-tablette {
                @include flex(column, start, start, $gap-third-tablette);
            }
            @include responsive-mobile {
                @include flex(column, start, start, $gap-third-mobile);
            }
            &__title {
                @include font-h2($main-color);
            }
            &__subtitle {
                @include font-h3($text-color-main);
            }
            &__text {
                @include font-p($text-color-main);
                &__link {
                    color: $main-color;
                    text-decoration: underline;
                    &:hover {
                        color: $second-color;
                    }
                }
            }
            &__list {
                list-style-type: disc;
                padding-left: 24px;
                &__item {
                    @include font-p($text-color-main);
                    // margin-bottom: 10px;
                }
            }
        }
        &__text {
            @include font-p($text-color-main);
        }
    }
}
</style>