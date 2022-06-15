//lógica que hace un get y un post luego se exportan en módulos.
//Hacemos 2 funciones. 

const products = require("../utils/products.js")


const getProduct = async (req, res) => {

    if (req.params.id) { //
        const product = await products.getProductById(req.params.id) //Devuelve 1
        console.log(product)
        res.status(200).render('products', {"products": product}) // esto que haceeeE???
    } else {
        const allProducts = await products.getAllProducts();
        res.status(200).render('products', {"products": allProducts}) 
}}

//status 200: get OK
// status 201: create OK

const createProduct = async (req, res) => {

    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar

    const answer = await products.createProduct(newProduct);
    res.status(201).send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`)
}

//PARA EXPORTAR
const product = {
    getProduct,
    createProduct
}


module.exports = product;