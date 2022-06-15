/*______

documento con tareas auxiliares (como los fetch). Externas.

_______*/


const fetch = require('node-fetch')

//SI SE METE UN ID EN LA PETICIÓN
const getProductById = async (id) => {

    try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`); // {} devuelve un producto
        let products = await response.json() //{}
        return [products]
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        return [];
    }
}

// SI NO SE METE EL ID, SALEN TODOS.
const getAllProducts = async () => {

    try {
        let response = await fetch(`https://fakestoreapi.com/products`); // [] devuelve todos los productos
        let products = await response.json() // []
        return products;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return [];
    }
}


// CREA UN NUEVO PRODUCTO y lo añade a la lista internamente
const createProduct = async (product) => {

    try {
        let response = await fetch('https://fakestoreapi.com/products', { 
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        let answer = await response.json(); // objeto de vuelta de la petición
        return answer; //devuelve un objeto con ID, title, price, description...

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return {};
    }
}

//PARA EXPORTAR
const product = {
    getProductById,
    getAllProducts,
    createProduct
}

module.exports = product;






// Pruebas de ejecución
// getAllProducts().then(data=>console.log(data))
 //getProductById(2).then(data=>console.log(data))

/* const newProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
createProduct(newProduct).then(data=>console.log(data)) */