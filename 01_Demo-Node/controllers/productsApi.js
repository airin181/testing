// AQUÍ CONTROLADOR DE LA API DE PRODUCTOS

//quien tiene la lógica de negocio. 


const Product = require("../models/products") // BBDD


const getProduct = async (req, res) => {
    try{
        if (req.params.id) { //

            const product = await
            Product
            .find({id:req.params.id},'-_id') //me devuelve uno
            .populate("company")
            .exec(function (err, Product){ //me vas a ejecutar to lo que te he dicho
            res.status(200).json(Product)
    })

        } else {
            const allProducts = await
            Product
            .find({})
            .populate("company")
            .exec(function (err, allProducts){ //me vas a ejecutar to lo que te he dicho
            res.status(200).json(allProducts)
})
    }
}
    catch(err){
        res.status(400).json({message:err})
    }
 
}


//status 200: get OK
// status 201: create OK

const createProduct = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = new Product(req.body); // {} nuevo producto a guardar
 try{
    const response = await newProduct.save();
    res.status(201).json({message:`Producto ${response.title} guardado en el sistema con ID: ${response.id}`});
 }

 catch(err){
     res.status(400).json({message:err})
 }
    
}


/* const productCompany = async (req, res) => {
    Product
    .find({})
    .populate("company")
    .exec(function (err, Product){ //me vas a ejecutar to lo que te he dicho
        res.status(200).send(Product)
    })
} */


/* //CREATE
const createProductCompany = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {}
    
    dbo.collection("products").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
}); */

//PARA EXPORTAR
const product = {
    getProduct,
    createProduct,
}


module.exports = product;

