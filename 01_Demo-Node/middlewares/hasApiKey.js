/**
 * Middleware que comprueba si se pasa una api key
 * @method hasApiKey
 * @async 
 * @param {Object} req peticion http
 * @param {Object} res respuesta http
 * @param {Object} next función de callback para que el middleware termine de manera exitosa
 */

function hasApiKey(req, res, next) {
    // Buscar en la "BBDD" la API_KEY que se ha mandado
    const API_KEY = 123456;
    // http://localhost:3000/api/entries ---> rechazar
    // http://localhost:3000/api/entries?api_key=123456 ---> pasar

    if(req.query.api_key == API_KEY){
        next();
    }else {
        res.status(401).json({message:"Error. No se ha facilitado la api_key"})
    }
}

module.exports = hasApiKey; 



//http://localhost:3000/api/entries --> deberia rechazar
//http://localhost:3000/api/entries?api_key=123456 --> deberia pasar