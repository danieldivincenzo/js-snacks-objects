const persone = [
    {
        nome: "Giacomo",
        cognome: "Rossi",
        eta: 25
    },

    {
        nome: "Martina",
        cognome: "Bianchi",
        eta: 16
    },

    {
        nome: "Luca",
        cognome: "Verdi",
        eta: 31
    },

    {
        nome: "Marco",
        cognome: "Gialli",
        eta: 18
    },

    {
        nome: "Francesco",
        cognome: "Violi",
        eta: 17
    }
]
console.log(persone)

let persone2 = []

for (let i = 0; i < persone.length; i++) {
    const persona = persone[i];
    console.log(i, persona)
    if (persona.eta >= 18) {
        persone2.push(`${persona.nome} ${persona.cognome} può guidare poichè ha ${persona.eta} anni`)
    } else {
        persone2.push(`${persona.nome} ${persona.cognome} non può guidare poichè ha ${persona.eta} anni`)
    }
}
console.log(persone2)