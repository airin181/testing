/**
 * Descripción: Esta función es un middleware dice si hay un 404
 * @method error404
 * @async 
 * @param {Object} req peticion http
 * @param {Object} res respuesta http
 * @param {Object} next función de callback para que el middleware termine de manera exitosa
 */

function notFound(req,res,next){
    res.status(404).json({message:"Ruta inexistente",code:404})
}

module.exports = notFound;