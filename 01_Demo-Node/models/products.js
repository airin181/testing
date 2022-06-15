//AQUÍ CÓDIGO PARA HABLAR CON LA BASE DE DATOS
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            },
            message: "Porfa, sólo imágenes JPG"
        }
    },
    company: {type: mongoose.Types.ObjectId, ref: "company"}
});


const companySchema = new mongoose.Schema( {
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    firstParty: {
        type: Boolean,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

// Crear el modelo
const product = mongoose.model('products', productSchema);
const company = mongoose.model('company', companySchema);





module.exports = product, company; /* createProductCompany */

/*5. Modificar la API para poder crear nuevos productos, donde cada producto ya especifique la Company.
Para este punto, se deben tener cargados antes algunas compañias en la BBDD. Si no existe la compañía,
no se debe dejar crear producto en la BBDD*/



/*const productsApi = {
    product,
    company
}
module.exports = productsApi;*/