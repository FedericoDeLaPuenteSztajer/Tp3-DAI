function AnalizarTexto(texto) {
    //
    let caracteres = texto.length
    let palabras = (texto.split(" ")).length

    //
    let caracteresSeparadas = [];
    
    (texto.split(" ")).forEach(palabra => {
        (palabra.split("")).forEach(letter => {
            caracteresSeparadas.push(letter)
        })
    })

    //
    let vocales = 0
    let consonantes = 0
    const VOCALES = ["a", "e", "i", "o", "u"];

    caracteresSeparadas.forEach(c => {
        if (c >= "a" && c <= "z") {
            VOCALES.forEach(v => {
                if (c == v) {
                    vocales++
                } else {
                    consonantes++
                }
            })
        }
    })

    //
    console.log(`Caracter: ${caracteres}\nPalabras: ${palabras}\nVocales: ${vocales}\nConsonantes: ${consonantes}`)
}

AnalizarTexto("Palabras Interesantes para Jose Jose")
