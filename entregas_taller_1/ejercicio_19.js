const aleatorio = Math.floor(Math.random() * 10) + 1;

let intento =Number(prompt("adivina cual es el numero"));

if (aleatorio === intento) {
    console.log("adivinaste el numero :) ")
} else {
    console.log("no es el numero :( ")
}
console.log(aleatorio);