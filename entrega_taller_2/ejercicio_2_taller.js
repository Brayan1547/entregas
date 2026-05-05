let numeros = [5, 2, 6, 8,];
let grande = numerosMayor(numeros)


function numerosMayor(numeros) {

    let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        } 
    }
    return mayor;
}
console.log("el numero mayor es", grande);