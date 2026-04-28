import { estudiantes } from "./students.js";

// calcular promedio 

export function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
for (let i = 0; i < estudiantes.length; i++) {
    const promedio = calcularPromedio(estudiantes[i].notas)
    console.log(`${estudiantes[i].nombre} ${promedio.toFixed(2)}`)
}

// reprobado 

function obtenerEstado(promedio){
    if (promedio >=3) {
        return "aprovado";
    } else {
        return "reprovado"
    }
}

for (let i = 0; i < estudiantes.length; i++) {
    const promedio = calcularPromedio(estudiantes[i].notas);
    const estado = obtenerEstado(promedio);
    console.log(`${estudiantes[i].nombre} ${promedio.toFixed(1)} ${estado}`)
}

// el mejor estudiante

function encontrarMejorEstudiante(estudiantes){
    let mejor = estudiantes[0];
    for (let i = 0; i < estudiantes.length; i++) {
        
 
    }
}