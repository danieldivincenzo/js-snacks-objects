const stringhe = ["pippo", "PLUTO", "Paperino", "topolino", "MINNIE"]
console.log(stringhe)
let stringheFormattate = []

for (let i = 0; i < stringhe.length; i++) {
    const nome = stringhe[i];
    console.log(i, nome)
    const primaLettera = nome[0]
    const corpoParola = nome.slice(1, nome.length)
    console.log(primaLettera, corpoParola)
    const primaLetteraMaiuscola = primaLettera.toUpperCase()
    const corpoParolaMinuscolo = corpoParola.toLowerCase()
    const parolaFormattata = primaLetteraMaiuscola + corpoParolaMinuscolo
    console.log(parolaFormattata)
    stringheFormattate.push(parolaFormattata)
}
console.log(stringheFormattate)