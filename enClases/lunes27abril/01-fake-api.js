const API = "https://fakeapi.net/products"

async function getProducts() {
    try {
        const response = await fetch(API);
        const data = await response.json();

        let total = 0
        for  ( const producto of data.data){
            total = total + producto.price;
        }

       console.log(total);

    } catch (error) {
        console.error("error al conectarse al FakeAPI");
    }
}
getProducts();

