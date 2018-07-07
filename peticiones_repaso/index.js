// Con esta línea importamos el código que necesitamos dentro de la variable "request"
const request = require('request');

/*
---------------------------------------------
          Peticion de tipo GET
---------------------------------------------
*/

request.get("https://swapi.co/api/people/1/",
  (error, response, body) => {
      // Mostramos en consola lo que se guarde en "error"
      console.log(error);
      // Mostramos en consola el status code
      console.log(response.statusCode);
      // Imprimimos el cuerpo de la respuesta, que contiene lo que deseamos
      console.log(body);
      // "Parseamos" el body a un JSON, lo guardamos en una variable llamada "json"
      let json = JSON.parse(body);
      // Mostramos en consola el contenido de la variable "json"
      console.log(json);
});


/* Para combinar PROMESAS con peticiones,
   podemos hacerlo de la siguiente manera
*/
let peticionConPromesa = () => {
  return new Promise( (resolve, reject) => {

    request.get("https://swapi.co/api/people/1", (error, response, body) => {
      if (response.statusCode == 200){
        let json = JSON.parse(body);
        resolve(json)
      } else reject(error)
    })
  })
}

/* Al ejecutar la arrow function "peticionConPromesa",
   debemos encadenar la ejecución con un .then() y un .catch()
   para mostrar lo que nos devuelva la promesa al terminar.
*/
peticionConPromesa()
        .then( respuesta => console.log(respuesta.name) )
        .catch( error => {console.log(error)} )

/*
---------------------------------------------
           Peticion de tipo POST
---------------------------------------------
*/

// URL -> UNIFORM RESOURCE LOCATOR
// URL_BASE -> Hasta donde se termina de definir la URL de la API
// URI -> UNIFORM RESOURCE IDENTIFIER
// URI -> Donde se encuentra un recurso en particular

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";
let URI = "/authors/";
let URL = URL_BASE + URI;

let json_send = {
  "name": "Mauricio",
  "last_name": "Saavedra",
  "nacionalidad": "MX",
  "biography": "Siempre saludando a toda la razita que la sigue cotorreando",
  "gender": "M",
  "age": 23
}

request.post( {url: URL, form: json_send} , (error, response, body) => {
    // console.log("error: ", error);
    // console.log("response: ", response);
    console.log("body:\n", body);
    let nuevoJSON = JSON.parse(body);
    console.log("body parseado:\n", nuevoJSON);
})

/*
---------------------------------------------
           Peticion de tipo PATCH
---------------------------------------------
*/

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1";
let URI = "/authors/966/"; //Indicamos en la URI el ID del autor que deseamos modificar
let URL = URL_BASE + URI;

let options = {
  url: URL,
  form: {
    "age": 23,
    "is_alive": true
  }
}

request.patch( options, (error, response, body) => {
  console.log("error: ", error);
  console.log("response: ", response.statusCode);
  console.log("body: ", body);
});
