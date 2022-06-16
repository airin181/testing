// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
/* const mime = require('mime'); */

const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static(__dirname + '/public'));


/* mime.getType('txt');                    // ⇨ 'text/plain'
mime.getExtension('text/plain'); */        // ⇨ 'txt'

app.get('/home', (req, res) => {

    const welcome = "¿Qué hacemos en esta escuela?"
    
    //res.send(msj) // Devolviendo la respuesta HTTP
    const product = ["JavaScript", "Node", "CSS", "HTML", "Comemos tortilla"]
    res.render('home.pug',{welcome, product})
})

app.get('/contact', (req, res) => {
    res.render('contact.pug')
})

app.post('/form', (req, res) => {
    let name = req.body.name

    if (name == null || name == "") {
        res.send("Name must be filled out");
    }

    if (email.match(at)) {
        res.send("Must be a valid e-mail")
    }

    if (message == "") {
        res.send("You must type something")
    }

})

app.get('/about', (req, res) => {
    res.render('about.pug')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})