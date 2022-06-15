//rutas para la API

const express = require('express');
const router = express.Router();

const products = require('../controllers/productsApi');

const hasApiKey = require('../middlewares/hasApiKey');

router.get('/products/:id?', products.getProduct) //métodos del controlador
router.post('/products', hasApiKey, products.createProduct) 
    
        
module.exports = router;

/*SIEMPRE haces el populate sobre el modelo que tiene el ref
porque es el que mongoose sabe cómo popular basandose en el ref*/



