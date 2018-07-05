/* Hacemos uso de la palabra reservada "require"
   para obtener el código que vamos a emplear
   desde otro archivo javascript.

   Para indicarle a la función "require()" que
   deseamos obtener el contenido de un archivo,
   debemos escribir "./" seguido del nombre del
   archivo del que queremos obtener su código.

   En este caso escribimos "require(./modulo2)"

   Lo que nos devuelva "require" se guardará en
   una variable que llamaremos "m2".
*/
let m2 = require('./modulo2');

/* Para imprimir el contenido de m2
   podemos usar un "console.log(m2)"
*/

//console.log(m2);

/* Si lo que nos devuelve el "require()"
   resulta ser una función, podemos ejecutarla
   usando el nombre de la variable y le agregamos
   unos paréntesis. En este caso es "m2 ()"
*/

//m2();


/* NOTA: para ejecutar este archivo, primero
   debes posicionarte dentro de tu consola
   en el directorio que contenga este codigo.

   Una vez posicionado ahí, puedes escribir:
              node modulo1.js
   para ejecutar el código de este javascript
*/
