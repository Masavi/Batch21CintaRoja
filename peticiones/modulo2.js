/* No importa qué cosas definamos aquí,
   no se pasarán a modulo1.js mediante
   el require:
*/
let a = 10;
let b = "hey";

/* La única manera de regresarle algo
   a modulo1.js es usando el objeto
            module.exports
   Podemos ver un ejemplo a continuación:
*/

// module.exports.a = a;
// module.exports.b = b;
// module.exports.c = () => console.log("hey");

/* Si descomentamos las líneas de arriba y
   ejecutamos en consola el siguiente comando:
              node modulo1.js
   podremos ver en consola que nos devuelve un
   objeto que contiene tres atributos. Es decir,
   nos mostrará algo como esto:
          {a: 10, b: "hey", c: function}

   De esta manera podemos concluir que al ejecutar el
   "require()" en el modulo1.js, lo unico que recibe es
   un objeto llamado "module.exports" el cual contendra
   los atributos que nosotros le asignemos.
*/

/* No solo podemos definir atributos a nuestro
   objeto "module.exports". Podemos asignarle a todo
   este objeto cualquier cosa que nosotros querramos.
   Por ejemplo, podemos asignarle una función a todo
   el objeto, como vemos a continuación:
*/

//module.exports = () => { console.log("Soy una funcion") }
