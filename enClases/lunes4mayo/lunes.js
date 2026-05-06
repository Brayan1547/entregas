// Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.

// let nombre = prompt('ingresa tu nombre');
// let edad = Number(prompt('ingresa tu edad'));
// let genero = prompt('ingresa tu genero');



class Persona {
    nombre;
    edad;
    genero;

    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

let total = prompt('cuantos registros quieres hacer');
const personas = [ ];

for (let i = 0; i < total; i++) {
    let nombre = prompt('ingresa tu nombre');
    let edad = Number(prompt('ingresa tu edad'));
    let genero = prompt('ingresa tu genero');
    
    let persona = new Persona(nombre,edad,genero)
  personas.push(persona)

}
    let contadorM = 0;
    let contadorf = 0;

    for (let i = 0; i < personas.length; i++) {
        
    if (personas[i].genero === 'masculino' ){
        contadorM++;
    }else if (personas[i].genero ==='femenino') {
        contadorf++;
    }
}

console.log('hombres:', contadorM);
console.log('mujer', contadorf);
console.log(personas);

