const express = require('express');
const router = express.Router();

const products = require('../controllers/products');
const hasApiKey = require('../middlewares/hasApiKey');

const cowsay = require("cowsay"); // Importando módulo NPM (libería)

// Módulo propio
const calculator = require("../modules/calculator");

router.get('/products/:id?', products.getProduct) //métodos del controlador
router.post('/products',hasApiKey, products.createProduct);

//           desayuno + vaca              //
router.get('/', (req, res) => {
    const msj = cowsay.say({
        text: "Hola desde la Home!!!!!! 2+2 son:" + calculator.sum(2, 2),
        e: "oO",
        T: "U "
    })
    console.log(msj)
    //res.send(msj) // Devolviendo la respuesta HTTP
    const breakfast = ["tortilla", "barrita", "cafe", "zumo de naranja"]
    res.render('home.pug', {
        msj,
        breakfast
    })
})



module.exports = router;