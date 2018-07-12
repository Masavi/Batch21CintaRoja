const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

function createAuthor(nombre,apellidos,nacionalidad,biografia,genero,edad){
    const URI = 'authors/'
    var urlFinal = URL_BASE + URI

    var jsonSend = {
        "name":nombre,
        "last_name":apellidos,
        "nacionalidad":nacionalidad,
        "biography":biografia,
        "gender":genero,
        "age":edad
    }

    return new Promise((resolve,reject)=>{
        request.post({url:urlFinal,form:jsonSend},(err,response,body)=>{
            let json = JSON.parse(body)
            response.statusCode == 201
            ? resolve(json)
            : reject('Error al crear un nuevo autor')
        })
    })
}

function readAutor(id,){
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    return new Promise((resolve, reject)=>{
        request.get(urlendpoint2, (error, response, body)=>{
            response.statusCode==200
            ?resolve(JSON.parse(body))
            :reject("Error en GET")
        });
    });
}

// readAutor(1007)
//     .then(autor=>console.log(autor))
//     .catch(error =>console.log(error))


function updateAuthor(id,name,last_name,nacionalidad,biography,gender,age){
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject)=>{
        request.put({url:urlendpoint2,form:jsonUpdate},(error, response, body)=>{
            response.statusCode==200
            ?resolve(JSON.parse(body))
            :reject("Error en update")
        });
    });
}

// updateAuthor(1007,"Don Spamer 3","SpamSpamSpam","MX","Borrar por favor","M",56,true)
//     .then(autor=>console.log(autor))
//     .catch(error =>console.log(error))


    function eliminarAuthor(id){
        const URI = `authors/${id}/`;
        var urlendpoint3 = URL_BASE + URI;
        return new Promise((resolve, reject)=>{
            request.delete(urlendpoint3,(error, response, body)=>{
                response.statusCode==204
                ?resolve("funcionó")
                :reject("Error en eliminar")
            });
        });
    }

    // eliminarAuthor(1028)
    //     .then(autor=>console.log(autor))
    //     .catch(error =>console.log(error))


crearautor("prueba crear","last name primera","MX","bio primera","M",53)
    .then(autor=>{
            console.log(autor);
            updateAuthor(autor.id,"prueba actualizar","last name 22","MX","bio","M",54)
        .then(modificado=>{
            console.log("\nAutor modificado\n",modificado)
            eliminarAuthor(modificado.id)
                .then(respuesta=>console.log(respuesta))
        })
    })
    .catch(error=>console.log(error))
