const animali = [
    {
        nome: "leone",
        famiglia: "felidi",
        classe: "mammiferi"
    },

    {
        nome: "gallina",
        famiglia: "fasianidi",
        classe: "uccelli"
    },

    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi"
    },

    {
        nome: "lucertola",
        famiglia: "ornitorinchidi",
        classe: "rettili"
    },

    {
        nome: "mantide",
        famiglia: "mantidi",
        classe: "insetti"
    },

    {
        nome: "gatto",
        famiglia: "felidi",
        classe: "mammiferi"
    },

    {
        nome: "scorpione",
        famiglia: "scorpionidi",
        classe: "aracnidi"
    },

    {
        nome: "ornitorinco",
        famiglia: "ornitorinchidi",
        classe: "mammiferi"
    }

]
console.log(animali)
let mammiferi = []

for (let i = 0; i < animali.length; i++) {
    const animale = animali[i];
    console.log(animale)
}