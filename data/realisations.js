
const realisations = [
    {
        "id": 1,
        "title": "Aménagement jardin gazon synthétique",
        "place": "Andernos-les-bains",
        "description": "Création d'un espace détente moderne avec gazon synthétique de qualité, plantations exotiques et salon de jardin. Solution d'entretien facile pour profiter de son extérieur toute l'année.",
        "image": "/photos/jardin-1.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Entretien des haies", "Pose de gazon synthétique", "Aménagement paysager"]
    },
    {
        "id": 2,
        "title": "Terrasse bois avec olivier intégré",
        "place": "Andernos-les-bains",
        "description": "Construction de terrasse en bois avec plantation d'olivier intégrée. Design contemporain alliant tradition locale et modernité avec découpe sur-mesure pour végétation existante.",
        "image": "/photos/jardin-4.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Terrasse bois", "Plantation olivier", "Découpe sur-mesure"]
    }, 
    {
        "id": 3,
        "title": "Peinture intérieure salon avec moulures",
        "place": "Audenge",
        "description": "Rénovation complète de salon avec peinture décorative vert sauge, pose de moulures murales et parquet massif. Transformation totale d'espace de vie avec finitions haut de gamme et éclairage d'ambiance.",
        "image": "/photos/peinture-2.webp",
        "categorie": "Travaux intérieurs",
        "travaux": ["Peinture intérieure", "Pose de moulures", "Pose de parquet"]
    }, 
    {
        "id": 4,
        "title": "Aménagement jardin avec piscine",
        "place": "Audenge",
        "description": "Aménagement d'un jardin avec piscine, gazon synthétique premium, terrasse en bois et espace en gravillons autour du barbecue.",
        "image": "/photos/terrasse-3.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Gazon synthétique", "Terrasse bois", "Espace en gravillons", "Bordures de jardin"]
    }, 
    {
        "id": 5,
        "title": "Abri vélo et moto en bois",
        "place": "Andernos-les-Bains",
        "description": "Construction d'un abri moto en bois de qualité avec structure robuste et toiture étanche. Réalisation sur-mesure pour protection optimale des deux-roues contre les intempéries du bassin d'Arcachon.",
        "image": "/photos/abri-1.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Construction abri", "Charpente bois", "Toiture étanche"]
    },
    {
        "id": 6,
        "title": "Clôture bois traditionnelle avec portail",
        "place": "Audenge",
        "description": "Installation complète de clôture en bois naturel. Clôture haute qualité en pin traité, style traditionnel bassin d'Arcachon.",
        "image": "/photos/cloture-1.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Ossature bois", "Pose clôture bois"]
    },
    {
        "id": 7,
        "title": "Clôture moderne en bois",
        "place": "Andernos-les-bains",
        "description": "Ossature et pose de clôture contemporaine en lames de bois. Design moderne adapté à l'architecture du bassin d'Arcachon.",
        "image": "/photos/cloture-2.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Ossature bois", "Pose lames bois"]
    },
    {
        "id": 8,
        "title": "Taille de haie",
        "place": "Andernos-les-bains",
        "description": "Service d'entretien et taille de haie. Taille de formation et d'entretien pour haie dense et uniforme sur grande longueur.",
        "image": "/photos/haie-1.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Taille de haie", "Entretien régulier", "Évacuation des déchets"]
    },
    {
        "id": 9,
        "title": "Taille de haie",
        "place": "Andernos-les-bains",
        "description": "Service d'entretien et taille de haie. Taille de formation et d'entretien pour haie dense et uniforme sur grande longueur.",
        "image": "/photos/haie-2.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Taille de haie", "Entretien régulier", "Évacuation des déchets"]
    },
    {
        "id": 10,
        "title": "Taille de haie",
        "place": "Andernos-les-bains",
        "description": "Service d'entretien et taille de haie. Taille de formation et d'entretien pour haie dense et uniforme sur grande longueur.",
        "image": "/photos/haie-3.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Taille de haie", "Entretien régulier", "Évacuation des déchets"]
    },
    {
        "id": 11,
        "title": "Taille de haie",
        "place": "Andernos-les-bains",
        "description": "Service d'entretien et taille de haie. Taille de formation et d'entretien pour haie dense et uniforme sur grande longueur.",
        "image": "/photos/haie-4.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Taille de haie", "Entretien régulier", "Évacuation des déchets"]
    },
    {
        "id": 12,
        "title": "Jardin moderne avec allée minérale",
        "place": "Andernos-les-bains",
        "description": "Conception et réalisation de jardin contemporain avec gazon synthétique, allée en dalles noires et plantations méditerranéennes. Création d'ambiance moderne et sophistiquée.",
        "image": "/photos/jardin-2.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Allée minérale", "Gazon synthétique", "Plantations exotiques"]
    },
    {
        "id": 13,
        "title": "Plantation olivier jeune",
        "place": "Andernos-les-bains",
        "description": "Plantation d'olivier jeune avec préparation sol.",
        "image": "/photos/jardin-7.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Plantation olivier", "Préparation sol", "Entretien extérieur"]
    },
    {
        "id": 14,
        "title": "Rénovation bureau murs et sol",
        "place": "Audenge",
        "description": "Rénovation d'un bureau avec préparation et peinture murs et plafond, pose tapisserie et parquet",
        "image": "/photos/peinture-1.webp",
        "categorie": "Travaux intérieurs",
        "travaux": ["Préparations murs et plafond", "Peinture murs et plafond", "Pose tapisserie", "Pose de parquet"]
    },
    {
        "id": 15,
        "title": "Terrasse bois avec pergola bioclimatique",
        "place": "Andernos-les-Bains",
        "description": "Construction terrasse bois pin avec installation d'une pergola bioclimatique à lames orientables. Clôture assortie et plantations pour espace extérieur moderne et fonctionnel.",
        "image": "/photos/terrasse-2.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Terrasse bois", "Installation pergola bioclimatique", "Clôture bois", "Plantations"]
    },
    {
        "id": 16,
        "title": "Terrasse bois avec olivier intégré",
        "place": "Andernos-les-bains",
        "description": "Construction de terrasse en bois avec plantation d'olivier intégrée. Design contemporain alliant tradition locale et modernité avec découpe sur-mesure pour végétation existante.",
        "image": "/photos/terrasse-4.webp",
        "categorie": "Travaux extérieurs",
        "travaux": ["Terrasse bois", "Plantation olivier", "Découpe sur-mesure"]
    }
]

export default realisations