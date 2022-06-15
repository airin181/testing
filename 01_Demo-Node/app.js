// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
require('./utils/dbMongo.js'); // esto solo ejecuta lo que hay dentro (dentro establece la conexión con Mongo)

const products = require('./models/products');

//Rutas
const entryRouter = require('./routes/entry'); //API
const productRouter = require('./routes/products'); //WEB ROPA
const productApiRouter = require('./routes/productsApi'); 

const notFound=require('./middlewares/notFound')


const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000;


// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // Esto es para habilitar recepción de datos JSON en una request


/* app.use(hasApiKey) */ //middleware para todas las rutas


//Rutas
app.use('/',productRouter) //API ROPA - PRODUCTS (web)
app.use('/apinews',entryRouter); //API Entries NEWS
app.use('/api',productApiRouter); //API products
//----> prefijos. Todo lo que empiece por 'X'(el 1er parametro) le chutas la funcion del segundo parametro. 


//middleware de rutas inexistentes
app.use(notFound);

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = server;