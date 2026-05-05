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

const personas = [ ];

for (let i = 0; i < 2; i++) {
    let nombre = prompt('ingresa tu nombre');
    let edad = Number(prompt('ingresa tu edad'));
    let genero = prompt('ingresa tu genero');
    
    let persona = new Persona(nombre,edad,genero)
  personas.push(persona)
}

console.log(personas)

