function obotenerProductosPopulares(productos){
     let populares =[];

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].rating.rate >=4.7 && productos[i].rating.count >=100){
        
            populares.push(productos[i])

        }
    }

    return populares;
}

async function obtenerProductos(){
    const API = "https://fakeapi.net/products?limit=20";

    const response = await fetch(API);
    const data = await response.json();

    const productos = data.data
   
    console.log(obotenerProductosPopulares(productos))
}

obtenerProductos();