// REPRESENTA LA CONEXIÓN

const mongoose = require("mongoose");


//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb://127.0.0.1:27017/fakeshop", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
//aqui llama a una función de mongoose que se llama connect().

mongoose.set('debug', true)

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

module.exports = mongoose;

