import Terrasse from "~/components/svg/icon/services/Terrasse.vue"
import Abri from "~/components/svg/icon/services/Abri.vue"
import Pelle from "~/components/svg/icon/services/Pelle.vue"
import Pinceau from "~/components/svg/icon/services/Pinceau.vue"
import Tondeuse from "~/components/svg/icon/services/Tondeuse.vue"
import TailleHaie from "~/components/svg/icon/services/TailleHaie.vue"
import Perceuse from "~/components/svg/icon/services/Perceuse.vue"
import Marteau from "~/components/svg/icon/services/Marteau.vue"
import Perso from "~/components/svg/icon/services/Perso.vue"

const servicesList = [
    {
        id: "1",
        title: "Terrasses et clôtures bois",
        subtitle: "Créations durables alliant esthétique et fonctionnalité.",
        description: "Créez un espace extérieur convivial avec nos terrasses et clôtures en bois de qualité. Brico Jardi vous propose des designs personnalisés qui valorisent votre propriété tout en respectant votre environnement.",
        icon: Terrasse,
        categorie: "amenagementExt"
    },
    {
        id: "2",
        title: "Abris de jardin",
        subtitle: "Constructions sur mesure pour optimiser votre espace extérieur.",
        description: "Besoin d'espace supplémentaire dans votre jardin ? Un abri de jardin sur mesure allie fonctionnalité et esthétisme. Construction, installation et finitions - Brico Jardi prend en charge l'intégralité de votre projet pour un résultat durable.",
        icon: Abri,
        categorie: "amenagementExt"
    },
    {
        id: "3",
        title: "Plantations",
        subtitle: "Embellissez votre jardin avec des plantations adaptées à votre terrain et vos envies.",
        description: "Donnez vie à votre jardin. Arbres, arbustes, massifs fleuris ou potagers – nous sélectionnons avec vous des végétaux adaptés pour créer un jardin équilibré qui évolue harmonieusement au fil des saisons.",
        icon: Pelle,
        categorie: "amenagementExt"
    },
    {
        id: "4",
        title: "Peinture extérieure",
        subtitle: "Protégez et embellissez les surfaces extérieures de votre propriété.",
        description: "Préservez la beauté et prolongez la durée de vie de vos aménagements extérieurs grâce à nos services de peinture et lasure. Brico Jardi utilise des produits de qualité adaptés aux conditions extérieures pour protéger efficacement vos surfaces tout en sublimant l'aspect de votre propriété.",
        icon: Pinceau,
        categorie: "entretienExt"
    },
    {
        id: "5",
        title: "Entretien de jardin",
        subtitle: "Un espace vert impeccable toute l'année grâce à nos soins réguliers.",
        description: "Confiez-nous l'entretien complet de vos espaces verts pour un jardin toujours soigné. Tonte régulière, désherbage, ramassage des feuilles mortes et autres débris végétaux – Brico Jardi s'occupe de toutes les tâches saisonnières pour que votre extérieur reste accueillant et bien entretenu à chaque saison.",
        icon: Tondeuse,
        categorie: "entretienExt"
    },
    {
        id: "6",
        title: "Entretien des haies",
        subtitle: "Des haies parfaitement taillées pour structurer et embellir votre jardin.",
        description: "Gardez vos haies en parfait état avec notre service d'entretien régulier. Taille nette, mise en forme et nettoyage des abords – Brico Jardi intervient avec soin pour maintenir vos haies à la hauteur souhaitée tout en préservant l'esthétique de votre jardin et en garantissant un résultat propre et ordonné.",
        icon: TailleHaie,
        categorie: "entretienExt"
    },
    {
        id: "8",
        title: "Rénovation",
        subtitle: "Donnez une seconde vie à vos espaces intérieurs grâce à notre expertise en rénovation.",
        description: "Transformez votre habitat avec nos services de rénovation adaptés à vos besoins. Rafraîchissement des pièces, remise à neuf des surfaces ou modifications plus importantes – Brico Jardo modernise votre intérieur pour un cadre de vie plus agréable et fonctionnel, parfaitement en accord avec vos attentes.",
        icon: Perceuse,
        categorie: "travauxInt"
    },
    {
        id: "9",
        title: "Aménagement intérieur",
        subtitle: "Optimisez et personnalisez vos espaces de vie pour plus de confort et de fonctionnalité.",
        description: "Réinventez votre espace intérieur avec des solutions d'aménagement sur mesure. Cloisons, rangements, réorganisation des volumes – Brico Jardi conçoit et réalise des transformations adaptées à votre mode de vie pour créer un intérieur ergonomique qui vous correspond parfaitement.",
        icon: Marteau,
        categorie: "travauxInt"
    },
    {
        id: "7",
        title: "Peinture intérieure",
        subtitle: "Transformez l'ambiance de votre intérieur avec une mise en peinture professionnelle.",
        description: "Apportez une nouvelle atmosphère à votre intérieur grâce à notre savoir-faire en peinture. De la préparation minutieuse des surfaces à l'application soignée, Brico Jardi réalise des finitions parfaites qui valorisent vos espaces et reflètent votre style personnel.",
        icon: Pinceau,
        categorie: "travauxInt"
    },
    {
        id: "10",
        title: "Un projet unique en tête ?",
        subtitle: "Un projet unique ? Nous réalisons vos idées sur mesure.",
        description:"Votre projet ne correspond à aucune de nos catégories ? Pas de problème ! Chez Brico Jardi, nous aimons les défis et nous adaptons à vos besoins spécifiques. Qu'il s'agisse d'une création originale, d'une intervention technique particulière ou d'un assemblage de plusieurs services, nous étudions chaque demande avec attention.",
        icon: Perso,
        categorie: "autre"
    },
]
export default servicesList