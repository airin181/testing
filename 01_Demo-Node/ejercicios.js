/* const express = require('express'); // inicializamos el módulo Express
const path = require('path'); // tiene acceso al directorio del proyecto. Te libra de poner toooooda la ruta del ordenador.

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '/pages/home.html')); // encadena el nombre del home con la ruta.
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/about.html'));
  });

  app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/contact.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);
 */

