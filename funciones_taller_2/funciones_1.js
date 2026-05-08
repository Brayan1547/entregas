function paresEnRango(inicio, fin){
    let pares = [];
    
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        } 
    }
    return pares;
}

console.log(paresEnRango(1,10));