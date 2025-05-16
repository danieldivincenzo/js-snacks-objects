const stringhe = ["pippo", "PLUTO", "Paperino", "topolino", "MINNIE"]
let stringheFormattate = []

for (let i = 0; i < stringhe.length; i++) {
    const nome = stringhe[i];
    console.log(nome)
    for (let i = 0; i < nome.length; i++) {
        const char = nome[i];
        if (char === 0) {
            const letteraMaiuscola = char.toUpperCase()
        } else {
            const letteraMinuscola = char.toLowerCase()
        }

    }

    stringheFormattate.push(nome)
    // const nomeMinuscolo = nome.toLowerCase()






    // for (let i = 0; i < nome.length; i++) {
    //     const char = nome[i];
    //     console.log(char)
    // }
}
console.log(stringheFormattate)