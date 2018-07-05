/*
---------------------------------------------
              ¿Qué es NodeJS?
---------------------------------------------
*/

/*
  Los creadores de NodeJS tomaron JS (que solo puede correr en el navegador)
  y permitieron que Javascript corra en tu computadora
  Le das el motor V8 de Google a tu máquina para poder correr JS
  - Puedes correr javascript en tu pc
  - Puedes escuchar tráfico de la red
  - Acceder a bases de datos
  - Hacer peticiones HTTP o escuchar a que ocurra una de estas.
*/

 // Por ejemplo...
// En el caso de Frontend - NodeJS lo usa gente que usa plugins para recargar SASS o cosas así
// En el caso de Backend - la gente lo emplea para escribir código para conectarse a una base de datos

/*
---------------------------------------------
            Usando node en consola
---------------------------------------------
*/

/* Podemos escribir código directamente en
   consola si escribimos la palabra "node"
*/

/* Podemos ejecutar código de Javacript directamente
   en nuestra consola usando node:
*/

/*
---------------------------------------------
         ¿Cómo funcionan los módulos?
---------------------------------------------
*/


/* Primero creamos dos nuevos archivos:
  - modulo1.js
  - modulo2.js

  Hacemos uso de "require" para indicar de dónde
  cargaremos un javascript
  Y hacemos uso de "module.exports" para indicar
  qué cosas se pasaran al archivo que contenga el
  "require()"
*/

/*
---------------------------------------------
                ¿Qué es npm?
---------------------------------------------
*/

/* Nos permite instalar módulos para que podamos
   hacer uso de ellos en nuestro javascript

   Permite descargar y administrar paquetes

   Para continuar con los ejercicios de abajo,
   debemos inicializar npm en nuestro directorio actual.

   Para esto escribimos, una vez posicionados en
   el directorio que contenga este codigo, lo siguiente:

                        npm init

   Una vez hecho esto, solo debemos dar enter hasta que nos
   deje de preguntar cosas :)

   Una vez inicializado npm en tu directorio, deberas ver un
   archivo llamado
                      package.json

   Si esto se realizó exitosamente, ahora podremos instalar
   "modulos".

   Para realizar el ejercicio de abajo necesitamos tener instalado
   el modulo "request", el cual nos permite hacer peticiones sencillas.
   Lo instalamos escribiendo lo siguiente en nuestra terminal:

                  npm install request --save

    Si todo sale correctamente, ahora debería aparecer una carpeta llamada
    "node modules". Dentro de esta carpeta debería aparecer otra carpeta
    llamada "request". Además, si ahora revisas tu package.json, verás que
    ahora sale algo llamado "dependencies", y dentro de este, aparece "request".
*/


/*
---------------------------------------------
                  Request
---------------------------------------------
*/

/* Haciendo uso de "request" podemos hacer peticiones a un servidor
   de manera sencilla. Solo debemos instalar la dependencia con npm,
   que fue lo que hicimos en el paso anterior.
*/

/* Todo el código de "request" que descargamos será guardado
   en una constante llamada "request". La llamamos así por buena práctica.
*/
const request = require('request');

/* Una vez inicializada y asignada nuestra constante "request",
   podemos hacer uso de todos sus metodos.

   Veamos cómo:
*/

/* Usando "request.get()" debemos mandarle dos cosas como parámetro
   1) una URL del lugar al que queremos hacer la petición
   2) una función callback que recibe como parámetros error, response y body.

   Al realizar la petición, en caso de haber un error, este se guardará
   en la variable "error". En caso de que la petición resulte exitosa,
   en "response" se guardará el mensaje de respuesta, si es que hay uno,
   y el código de respuesta. Finalmente, en "body" se guarda tooooda la información
   que hayamos pedido en la petición.

   En este caso, al ejecutar el código de abajo, en "error" obtendremos null,
   ya que no hay error. En "response" solo obtendremos el codigo de respuesta "200",
   que significa que todo está OK. Finalmente, en "body" se manda tooodo el html
   de la página de google.com (por eso el contenido de "body" se ve todo feo).

   Si entras a google.com y das click derecho y seleccionas "ver codigo fuente",
   podrás observar lo mismo que obtenemos aquí al ejecutar esta petición.
*/
request.get('https://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

/* No solo podemos hacer peticiones a paginas sencillas, tambien
   podemos hacer peticiones a una API. Si entras a
                          swapi.co
   verás que tienes frente a ti una API de Star Wars.

   Usando el siguiente código, y cambiando el número después de "people",
   podemos obtener cualquier personaje del mundo de star wars:
*/

request.get('https://swapi.co/api/people/1/', function (error, response, body) {
  /* Lo que nos manda la API es un JSON.
     Podemos guardarlo en una variable "respuesta"
     haciendo uso de la siguiente línea de código:
  */
  let respuesta = JSON.parse(body);

  // Y usamos un console log para observar el contenido:
  console.log(respuesta);
});
