const express = require('express');
const router = express.Router();

const entries = require('../controllers/entry');

//Middlewares
const hasApiKey = require('../middlewares/hasApiKey.js');


/***********SECCIÓN ENTRIES**********/

// GET entries by Email : GET http://localhost:3000/entries?email=alejandru@thebridgeschool.es


// GET all entries
/* router.get('/entries',entries.getEntries); */
router.get('/entries/:email?',entries.getEntries);

// POST --> Create Entry
// POST http://localhost:3000/entries --> endpoint para mandar objeto entry nueva
router.post('/entries',hasApiKey,entries.createEntry);


// DELETE
router.delete('/entries/:title',hasApiKey,entries.deleteEntries);


// UPDATE
router.put('/entries',hasApiKey, entries.updateEntries);


module.exports = router;