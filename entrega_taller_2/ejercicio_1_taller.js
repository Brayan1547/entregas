let numeros = [1, 2, 3, 4, 5, 6,];
let resultados = sumarArray(numeros);

function sumarArray(numeros) {
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
console.log("esta es la suma", resultados);