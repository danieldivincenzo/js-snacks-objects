const stringhe = ["pippo", "PLUTO", "Paperino", "topolino", "MINNIE"]
let stringheFormattate = []

for (let i = 0; i < stringhe.length; i++) {
    const nome = stringhe[i];
    const nomeMinuscolo = nome.toLowerCase()
    console.log(nomeMinuscolo)
    for (let i = 0; i < nome.length; i++) {
        const primaLettera = nome[0];
        primaLettera.toUpperCase()
    }
}
console.log(stringheFormattate)