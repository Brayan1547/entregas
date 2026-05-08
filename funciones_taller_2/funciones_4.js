function contarVocales(frase) {
    let vocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for (let i = 0; i < frase.length; i++) {
        let letras = frase[i];
        if (letras === 'a') {
            vocales.a++

        } if (letras === 'e'){
            vocales.e++

        } if (letras === 'i'){
            vocales.i++

        } if (letras === 'o') {
            vocales.o++
        
        } if (letras === 'u'){
            vocales.u++
        }

    }
    return vocales;
}

console.log(
    contarVocales("Hola mundo")
)