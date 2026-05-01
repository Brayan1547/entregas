// const API = "https://fakeapi.net/products?limit=20";

// async function getProducts() {
//     const response = await fetch(API);
//     const data = await response.json();

//     for (const producto of data.data) {
//         if (condicion) {
//             console.log(producto.rating.rate, producto.rating.count)
//         }
        
//     }
       
// };

function obtenerProductos(){
    const API = "https://fakeapi.net/products?limit=20";

    const response = await fetch(API);
    const data = await response.json();
    
    console.log(response);

}

obtenerProductos();