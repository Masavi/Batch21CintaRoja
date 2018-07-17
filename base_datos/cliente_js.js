const mongoose = require('mongoose');
let url = 'mongodb://prueba:c1234567890@ds259079.mlab.com:59079/cinta-roja'
mongoose.connect(url)


var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId

const programaSchema = new Schema({
    programa:ObjectId,
    descripcion:String,
    duracion:String
})


//Genera ids de mongo
var Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId

const alumnoSchema = new Schema({
    alumno:ObjectId,
    nombre:String,
    apellidos:String,
    edad:Number,
    programa:{type: Schema.ObjectId,ref:'Programa'}
})


var Alumno = mongoose.model('Alumno',alumnoSchema)
var Programa = mongoose.model('Programa',programaSchema)

module.exports = {Alumno,Programa}