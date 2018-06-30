/*
---------------------------------------------
                  Promesas
---------------------------------------------
*/

/* La sintáxis básica para crear una promesa es la siguiente:
   declaramos una variable "promise" que guardará una instancia
   de la clase Promise (esta existe en Javascript). El constructor
   de la clase Promise recibe un solo parámetro: una función anónima.
   Esta función anónima recibe a su vez dos parámetros: resolve y reject.
   Estos parámetros siempre deben ser llamados así, al igual que la variable
   "promise", por convención y buena práctica.
   Los parámetros "resolve" y "reject" son callbacks, que serán llamados
   cuando nosotros deseemos dentro del cuerpo de la función anónima.
*/
let promise = new Promise(
                          function(resolve, reject){
                          }
                    );

/* El objeto promise contiene dos atributos fundamentales:
    estado: pendiente, completado o rechazado
    resultado: se llena con lo que mandes al completar o rechazar la promesa. Inicia como "undefined".

    Al ejecutar un resolve:
        el estado cambia a completado
        resultado obtiene el valor que yo le mande

    AL ejecutar reject
        el estado cambia a rechazado
        resultado obtiene el valor que yo le mande
*/

/* La función anónima que recibe como parámetros dos métodos callback, resolve y reject,
   se conoce como función ejecutora o EXECUTOR. Esta función se ejecuta al instante en
   que nosotros la guardamos en la variable "promise".
*/
let promise = new Promise(function(resolve, reject){
      // Tras cinco segundos, se ejecuta el método "resolve" que cambia el
      // estado a "resuelto" y el resultado a "Este es el valor de la promesa"
      setTimeout( () => resolve("Este es el valor de la promesa") , 5000);
}
);

let promise = new Promise(function(resolve, reject){
        // Tras cinco segundos, se ejecuta el método "reject" que cambia el
        // estado a "rechazado" y el resultado a "Ocurrio un error"
        setTimeout( () => reject("Ocurrio un error") , 5000);
}
);

/* La función EJECUTORA debe terminar ejecutando uno de los dos métodos callback
   eventualmente. Pero OJO: solo llamará al primero que pueda ejecutar.
   Cualquier método resolve o reject que sea llamado después de ya haber llamado
   a uno de estos será ignorado.
*/

let promise = new Promise(function(resolve, reject){

        //Podemos usar una instancia de la clase "Error" para cambiar el formato en consola
        reject(new Error("Ocurrio un error")); // -> Se ejecuta sin problemas
        resolve("Todo salio bien"); // -> Se ignora
        reject(new Error("¡Ocurrio otro error!"))  // -> Se ignora
});

/* Podemos meter todo el código que querrramos introducir en
   el cuerpo de la función ejecutora para determinar si usamos
   un resolve o debemos usar un reject. Es decir, para determinar
   si la promesa se resolvió, o se rechazó.
*/

let promise = new Promise(function(resolve, reject){

      let dia = "martes"

      if(dia == "lunes"){
        resolve("¡Hecho!"); //Se ejecuta si el día es lunes
      } else reject("No funciono :("); //Se ejecuta en cualquier otro caso
}
);

/*
   Como vimos, la función ejecutora se activa al instante, por lo que
   en un futuro (ya sea al instante, en unos segundos, en un día, o en lo que sea)
   cambiará el estado y el resultado de nuestro objeto "promise" al ejecutarse
   uno de los métodos callback.

   Para acceder al resultado de un "resolve" podemos hacer uso del método "then()"
   de nuestro objeto promise.

   Para acceder al resultado de un "reject" podemos hacer uso del método "catch()"
   de nuestro objeto promise.
*/

promise.then(alert)
promise.catch(alert)

/*
   Recuerden que NO podemos acceder directamente a las propiedades del objeto
   "promise" de la siguiente manera:
                          promise.state;
                          promise.result;
   Esto debido al principio de "encapsulamiento" que vimos al estudiar Clases.
   Por esto la única manera de acceder a las propiedades del objeto es mediante
   los métodos then() y catch().
*/
