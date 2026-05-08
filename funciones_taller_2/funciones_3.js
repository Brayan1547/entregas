function sumaImpares(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] % 2 !== 0) {
            suma = suma + numeros[i]
        }
        
    }
    return suma;
}

console.log (
    // sumaImpares([1, 2, 3, 4, 5]) 
    sumaImpares([10, 15, 20, 25])
)