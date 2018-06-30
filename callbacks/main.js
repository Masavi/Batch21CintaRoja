/*
---------------------------------------------
            Callback Functions
---------------------------------------------
*/

let x = function(){
	console.log("Hola, soy la función X\nEstoy siendo llamado desde dentro de la función Y");
}

let y = function(callback){
	console.log("Hola, soy la función Y");
	callback();
}

y(x);

// Una función callback es una función de JavaScript que se pasa a otra función
// como uno de sus parametros y es ejecutada por esa misma función.

function callback() {
  console.log("Este mensaje viene desde la función callback");
}

function altoNivel(unaFuncionX){
  console.log("A punto de llamar a un callback");
  unaFuncionX();
  console.log("Un callback fue invocado");
}

altoNivel(callback);

// Una funcion de alto nivel es una función que acepta como parametro un callback


// Ejemplo de lo que un callback puede solucionar, con codigo duplicado sin callbacks
function enviaMensajeConsola(mensaje) {
  console.log(mensaje);
}

function enviaMensajeAlert(mensaje) {
  alert(mensaje);
}

enviaMensajeAlert("Mucho codigo repetido! :(");

/* Ahora rediseñemos el codigo de arriba, esta vez usando callbacks
   Solo se necesita declarar una sola funcion que reciba un callback
   Es decir, una sola función de alto nivel
*/

function enviaMensaje(mensaje, callback){
  return callback(mensaje);
}

enviaMensaje("Mensaje para la consola", console.log);

enviaMensaje("Mensaje para alert", alert);


//Otro ejemplo de callbacks
function saluda(nombre, formato){
  return "Hola " + formato(nombre);
}

function mayusculas(nombre){
  return nombre.toUpperCase();
}

function minusculas(nombre){
	return nombre.toLowerCase();
}

console.log(saluda("mauricio", mayusculas));
console.log(saluda("mauricio", minusculas));

/* Es muy comun que en vez de pasarle una funcion previamente declarada como
   callback a la funcion de alto nivel, se le pase una funcion ANONIMA.

   Es decir, al ejecutar la función de alto nivel, como parámetro escribiremos
   toda una nueva función. Se le llama ANÓNIMA porque no tiene nombre.
*/

function saluda(nombre, formato){
  return "Hola " + formato(nombre);
}

console.log(
saluda("Mau", function(nombre){
  return nombre.toUpperCase();
})
);
