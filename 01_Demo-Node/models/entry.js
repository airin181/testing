/**
 * @author Alejandro Reyes <alejandroreyes.com> 
 * @exports entries
 * @namespace SQLQueries 
 */

const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
  user: 'postgres',
  database: 'postgres',
  password: "1234"
})



/**
  * Descripción de la función: Esta función busca todas las entries de cierto autor por email
  * @memberof SQLQueries 
  * @method getEntriesByEmail 
  * @async 
  * @param {String} email email del autor
  * @return {Object} Devuelve las entries encontradas en un array []
  * @throws {Error} Error de consulta a la BBDD
  */

// GET
const getEntriesByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
                SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
                FROM entries AS e
                INNER JOIN authors AS a
                ON e.id_author=a.id_author
                WHERE a.email=$1
                ORDER BY e.title;`,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}


/**
 * Esta función crea una entry nueva
@author Sirve para indicar el autor de la documentación creada
@exports indica si hay alguna exportación en el documento
@namespace el nombre del objeto que se utiliza
@memberof a qué pertenece (objeto, función...)
@method el nombre de la función --> createEntry
@param {} el tipo de argumento que admite la función 
@return {} el tipo de valor que devuelve.
@returns 
 */


// GET
const getAllEntries = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
        FROM entries AS e
        INNER JOIN authors AS a
        ON e.id_author=a.id_author
        ORDER BY e.title;`)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release(); 
    }
    return result
}



/**
 * Esta función crea una entry nueva
 * @memberof SQLQueries 
 * @method createEntry
 * @async 
 * @param {Object} entry La nueva entry a crear
 * @return {Number} Devuelve el número de entries creadas 
 * @throws {Error} Error de consulta a la BBDD
 */
//CREATE
const createEntry = async (entry) => {
    const {title,content,email,category} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`INSERT INTO entries(title,content,id_author,category)
                                    VALUES ($1,$2,
                                    (SELECT id_author FROM authors WHERE email=$3),$4)`
                                    ,[title,content,email,category])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}




//DELETE
const deleteEntry = async (entry) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
        DELETE FROM entries
        WHERE title = $1`,[entry])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}



//UPDATE
const updateEntries = async (entry) => {
    const {title, content, category, new_title} = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(`
                                        UPDATE entries 
                                        SET content = $1, category = $2, title = $3
                                        WHERE title = $4`,
                                        [content, category, new_title, title])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntries
}
module.exports = entries;
// Pruebas

    /* getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */

/*
getAllEntries()
.then(data=>console.log(data))
*/


/* let newEntry = {
    title:"noticia desde Node",
    content:"va a triunfar esto3",
    email:"alejandru@thebridgeschool.es",
    category:"sucesos"}

createEntry(newEntry)
.then(data=>console.log(data))  */