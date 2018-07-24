// Guardamos en constantes el código de los módulos que emplearemos 
const express = require('express');
const bodyParser = require('body-parser');

// Guardamos la aplicación de express para nuestro servidor en una variable "app"
var app = express();

// Usando el metodo "use" de nuestra aplicación de express, 
// indicamos que haremos uso del módulo body-parser para 
// poder recibir el cuerpo de la respuesta del cliente 
// en formato json; body-parser actúa como middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*
    El archivo "mongooseClient.js" exporta, haciendo uso de 
    "module.exports", dos variables "Articulo" y "Ticket" 
    que ya contienen el codigo que necesitamos para acceder 
    y manipular los datos de nuestras colecciones en 
    la base de datos. Estas variables las guardamos en 
    dos constantes "Articulo" y "Ticket", respectivamente, 
    para utilizarlas aquí en este archivo.
*/
const { Articulo, Ticket } = require('./mongooseClient');

/*  Cuando un cliente haga una peticion de tipo "get"
    a nuestro servidor en la ruta raiz " / ", recibirá
    un "oki doki" como respuesta
*/
app.get( '/', ( req, res) => {
    res.send('oki doki')
});

/* Para probar nuestra base de datos, haremos un CRUD de 
   para cada modelo, es decir, para Articulo y para Ticket.

        Create 
        Read
        Update
        Delete
*/

// ---------------- CRUD ARTICULOS ----------------

//Crear Articulo
app.post('/api/articulos/crear', (req,res)=>{
    const {nombre, precio, existencia, descripcion} = req.body

    let nuevoArticulo = Articulo({
        nombre,
        precio,
        existencia,
        descripcion
    })
    
    nuevoArticulo.save((err, articulo)=>{
        res.status(201).send(articulo)
    })
});

//Obtener un articulo por ID
app.get('/api/articulos/:uid', (req, res) => {
    let {uid} = req.params
    Articulo.findById(uid).exec()
        .then(articulo => res.send(articulo))
        .catch(err => res.send(err))
});

//Obtener todos los Articulos
app.get('/api/articulos', (req, res) => {
    Articulo.find({}, (err, articulos) => {
        res.status(200).send(articulos);
    });
});

//Modificar informacion de Articulo
app.put('/api/articulos/:uid', (req, res) => {
    let { uid } = req.params
    Articulo.findByIdAndUpdate(uid, {
            $set: req.body
        }, {
            new: true
        }).exec()
        .then(articulo => res.send(articulo))
        .catch(err => res.send(err))
});

//Eliminar articulo por ID
app.delete('/api/articulos/:uid', (req, res) => {
    let {
        uid
    } = req.params
    Articulo.findByIdAndRemove(uid).exec()
        .then(articulo => res.status(204).send())
        .catch(err => res.send(err))
});

// ---------------- CRUD FACTURA ----------------

//Crear Ticket
app.post('/api/tickets/crear',(req,res)=>{
    const {RFC, articulos} = req.body

    let nuevoTicket = Ticket({
        RFC,
        articulos,
        subtotal: 0,    // Inicializamos el subtotal, IVA y total en 0
        IVA: 0,
        total: 0
    })
    
    nuevoTicket.save((err, ticket)=>{
        res.status(201).send(ticket)
    })
});

//Obtener un ticket por ID
app.get('/api/tickets/:id', (req, res) => {
    let {id} = req.params
    Ticket
        .findById(id)
        .populate('articulos') // Después de usar el método "find... findById..." ejecutamos el metodo "populate".
        .exec()                // Dentro del metodo "populate" mandamos el nombre del atributo que queremos poblar. 
        .then(ticket => res.send(ticket))  // Al usar "populate", al traer el JSON del ticket especificado por el ID, 
        .catch(err => res.send(err))       // nos regresará dentro del atributo "articulos" los JSONs de cada articulo 
});                                        // que contenga el JSON del ticket

//Obtener todos los Tickets
app.get('/api/tickets', (req, res) => {
    Ticket.find({}, (err, articulos) => {
        Articulo.populate(articulos, {  // Esta es otra manera de usar populate. Funciona igual que el caso de arriba.
            path: 'articulos'
        }, (err, result) => {
            //Logica
            res.send(result);
        });
    });
});

//Modificar informacion de un ticket
app.put('/api/tickets/:id', (req, res) => {
    let {id} = req.params
    Ticket.findByIdAndUpdate( 
        id, 
        {$set: req.body}, 
        {new: true})
        .exec()
        .then(ticket => res.send(ticket))
        .catch(err => res.send(err))
});

//Eliminar ticket por ID
app.delete('/api/tickets/:id', (req, res) => {
    let {id} = req.params
    Ticket.findByIdAndRemove(id).exec()
        .then(ticket => res.status(204).send())
        .catch(err => res.send(err))
});

// --------- CALCULAR IVA, SUBTOTAL Y TOTAL ---------

// Cuando el usuario haga una petición de tipo GET a la URL que se muestra abajo, 
// deberá pasar el ID de la factura de la que desea calcular su subtotal, IVA y total
app.get('/api/tickets/calcular/:id', (req, res) => {

    // Definimos las variables donde guardaremos los calculos necesarios. 
    // Incializamos las variables en 0 para especificar que contendran NUMEROS.
    let subtotal=0, IVA=0, total=0;

    // Primero buscamos el ticket en cuestión, usando el ID que nos manda el usuario
    Ticket
        .findById(req.params.id) // Tomo el ID directamente de los parámetros de la petición
        .populate('articulos')  // Uso POPULATE aquí para obtener los JSONs completos de cada artículo, y no solo su ID 
        .exec()
        .then( ticket => {  // Al ejecutar los métodos anteriores, se devuelve una promesa. La cachamos con un ".then"
            // Dentro del "then", escribimos un callback. Al ejecutarse este callback, haremos lo siguiente: 
            console.log(ticket) // Muestro en consola mi JSON de ticket, solo para checar que todo vaya cool :)
            
            // Recorro mi atributo "articulos" de mi JSON del ticket. El atributo "articulos" es un arreglo, por lo que 
            // debemos recorrer este arreglo para obtener el subtotal. Calculamos el subtotal sumándole a "subtotal" el precio de todos los artículos que hallemos al iterar:
            for (let i=0; i < ticket.articulos.length; i++){
                subtotal += ticket.articulos[i].precio // En cada iteracion, sumaremos el precio del articulo a lo que contenga "subtotal"
            }

            // Calculamos el IVA, el cual sería el 16% de nuestro subtotal (no recuerdo cómo se calcula el IVA, creo que sí era así jejeje)
            IVA = (subtotal * 0.16);

            // Obtenemos el total sumando el subtotal y el IVA
            total = (subtotal + IVA);

            // Muestro en consola mis variables, para revisar que contengan los resultados correctos...
            console.log(`subtotal: ${subtotal}, IVA: ${IVA}, total: ${total}`);

            // Finalizamos este ".then" regresando OTRA PROMESA. 
            // En esta nueva promesa actualizaremos los valores de subtotal, IVA y total de nuestro ticket. 
            // Los parámetros que recibe son: ID, Atributos a modificar, y un objeto que, al agregarlo, me permite regresar el nuevo documento y no el viejo :D
            // Agrego al final el metodo ".exec()" para ejecutar los cambios. Al igual que en el caso anterior, 
            // esta última línea de código, por ser una promesa, también debe ser cachada con un ".then()"
            return Ticket.findByIdAndUpdate(req.params.id, {subtotal: subtotal, IVA: IVA, total: total}, {new: true}).exec()
        })
        .then(ticketActualizado => {  // Cachamos la segunda promesa, la de "Ticket.findByIdAndUpdate" en este .then()
            console.log(ticketActualizado) // Mostramos en consola nuestro ticket actualizado
            res.send(ticketActualizado) // Mandamos al cliente el ticket con los datos actualizados
        })
        .catch(err => res.send(err))    // En caso de que cualquiera de las dos promesas tenga un error, estos errores serán cachados en un solo ".catch()"

});


/* El método listen de nuestra aplicación de
   express es el encargado de "prender" el servidor.

   Sin este metodo nuestro servidor jamás podrá iniciar
*/
app.listen(3000,()=>console.log('server on 3000'))
