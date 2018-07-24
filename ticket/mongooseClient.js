// Guardamos el código del módulo "mongoose" en una constante
const mongoose = require('mongoose');
// En una variable "url" pasamos la dirección de nuestra base de datos de mLab.
// En esta direccion cambiamos lo que se encuentra entre "<>" por nuestro 
// nombre de usuario de la base de datos de mLab y su contraseña
let url = 'mongodb://Masavi:abc123@ds018258.mlab.com:18258/papeleria';
// Usando el metodo "connect" solo debemos pasarle la url que especificamos arriba
mongoose.connect(url, {
    useNewUrlParser: true //OPCIONALMENTE podemos pasarle como segundo parámetro a nuestro método connect un objeto "{}"
                          // que contenga el atributo "useNewUrlParser" con valor "true".  
});

// Guardamos los atributos "Schema" y "ObjectId" del objeto mongoose 
// en variables para poder acceder a estas más facilmente.
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Definimos los "Schemas", que serían 
// el "molde" de cada colección que 
// tendremos en nuesta base de datos

// Schema de Artículos
const articuloSchema = new Schema({
    articulo: ObjectId,
    nombre: String,
    precio: Number,
    existencia: Number,
    descripcion: String
});

// Schema de Tickets
const ticketSchema = new Schema({
    ticket: ObjectId,
    RFC: String,
    articulos: [{type: ObjectId, ref:'Articulo'}], // Cada ticket deberá incluir una lista de artículos.
                                                   // Agregamos corchetes "[]" antes de las llaves "{}" para indicar
                                                   // que guardaremos en el atributo "articulos" un arreglo de articulos.
                                                   // En caso de que no quisieramos guardar una lista de articulos, y solo 
                                                   // quisieramos guardar 1 articulo, solo debemos quitar los corchetes "[]"
    subtotal: Number,
    IVA: Number,
    total: Number
});

// Guardamos en variables los "modelos", que son los que empleamos  
// para acceder a sus respectivas colecciones dentro de la base de datos.
var Articulo = mongoose.model('Articulo', articuloSchema);
var Ticket = mongoose.model('Ticket', ticketSchema);

// Finalmente, "exportamos" nuestras variables para poder  
// utilizarlas en cualquier otro archivo de este proyecto;
// en este caso, para usarlo en el archivo "servidor.js"
module.exports = {Articulo, Ticket}

