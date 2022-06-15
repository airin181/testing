//código de controlador para ENTRIES
const db = require("../models/entry.js") //aqui están los metodos a la base de datos


//GET 
const getEntries = async (req, res) => {
//http://localhost:3000/entries?email=alejandru@thebridgeschool.es
console.log(req.params.email);
    if (req.params.email) { //
        const entries = await db.getEntriesByEmail(req.query.email) //Devuelve 1
        console.log(entries)
        res.status(200).json(entries) //en vez de render como era pintando en html, aquí devolvemos el json.
    } else {
        const entries = await db.getAllEntries();
        res.status(200).json(entries)
}}

//status 200: get OK
// status 201: create OK


//CREATE
const createEntry = async (req, res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newEntry = req.body; // {} nuevo producto a guardar

    const response = await db.createEntry(newEntry);
    res.status(201).json({"items_created":response});
} 



//DELETE
const deleteEntries = async (req, res) => {

    console.log(req.params.title); // Objeto recibido de producto nuevo
    const deleteEntry = req.params.title; // {} nuevo producto a guardar

    const response = await db.deleteEntry(deleteEntry);
    res.status(200).json({"message": `Se ha borrado la entry ${deleteEntry}`});
} 


//UPDATE
const updateEntries = async (req,res) => {
    console.log(req.params.title);
    const updatedEntries = req.params.title;
    const response = await db.updateEntries(updatedEntries);
    console.log(response);
    res.status(201).json({"items_updated":response})
}


//PARA EXPORTAR
const entries = {
    getEntries,
    createEntry,
    deleteEntries,
    updateEntries
}


module.exports = entries;