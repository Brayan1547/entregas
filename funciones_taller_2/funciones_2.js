function palabrasLargas(palabras, LongitudMinima){
    let resultado = [];

    for (let i = 0; i < palabras.length; i++) {
       if (palabras[i].length >= LongitudMinima) {
            resultado.push(palabras[i]);
       } 
    }
    return resultado;
}

console.log(
    palabrasLargas(["hola", "sol", "elefante", "mar"], 5) 
)