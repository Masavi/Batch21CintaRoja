const express = require('express');
const bodyParser = require('body-parser');
const {Alumno,Programa} = require('./mongooseClient')
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('oki doki')
})

//Crear programas
app.post('/api/programa',(req,res)=>{
    const {descripcion,duracion} = req.body
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    })
    nuevoPrograma.save((err,pr)=>{
        res.status(201).send(pr)
    })
});

//Crear Alumnos
app.post('/api/create',(req,res)=>{
    const {nombre,apellidos,edad,programa} = req.body
    let nuevoAlumno = Alumno({
        nombre,
        apellidos,
        edad,
        programa
    })
    nuevoAlumno.save((err,alumno)=>{
        res.status(201).send(alumno)
    })
});


//Obtener todos los alumnos
app.get('/api/alumnos',(req,res)=>{
    Alumno.find({},(err,alumnos)=>{
        Programa.populate(alumnos,{path:'programa'},(err,result)=>{
            //Logica
            res.send(result);
        });
    });
});

//Obtener un alumno por ID
app.get('/api/alumnos/:uid',(req,res)=>{
    let {uid} = req.params
    Alumno.findById(uid).exec()
        .then(alumno => res.send(alumno))
        .catch(err => res.send(err))
});

//Eliminar alumno por ID
app.delete('/api/alumnos/:uid',(req,res)=>{
    let {uid} = req.params
    Alumno.findByIdAndRemove(uid).exec()
        .then(alumno => res.status(204).send())
        .catch(err => res.send(err))
});

//Modificar informacion de los alumnos
app.put('/api/alumnos/:uid',(req,res)=>{
    let {uid} = req.params
    Alumno.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec()
        .then(alumno => res.send(alumno))
        .catch(err => res.send(err))
});


app.listen(8000,()=>console.log('server on 3000'))