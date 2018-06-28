/*
---------------------------------------------
                  Funciones
---------------------------------------------
*/

/* Una función ejecuta todo el código contenido
   entre llaves {}. La palabra reservada "return"
   nos permite devolver algún valor para utilizarlo
   en algún otro lugar.
*/
function miFuncion(){
  return "¡Hola!";
}

/* Podemos ejecutar la función y guardar el resultado
   en una variable. "Return" devuelve el mensaje "¡Hola!",
   este será almacenado en la variable "mensaje"
*/
let mensaje = miFuncion();

// Mostramos el contenido de "mensaje" en consola.
console.log(mensaje);

/* También podemos mostrar el valor de devolución
   de la función mediante un console.log, es decir,
   cachamos lo que manda el "return" de la función
   y lo mostramos en consola.

   Es importante aclarar que, si solo ejecutamos
   nuestra función, es decir, hacemos lo siguiente:
                    miFuncion();
   no se mostrará nada en ningún lugar, ya que no
   estamos haciendo nada con lo que devuelve la función.
*/
console.log(miFuncion());


/* Las funciones llevan paréntesis () porque éstas
   pueden llevar "parámetros". Los parámetros se
   escriben dentro de los paréntesis.

   Aún si la función no usará parámetros, siempre
   debemos escribir los paréntes, aunque queden vacíos.
*/
function miFuncion2(mensaje){
  console.log(mensaje);
}

/* Algo interesante ocurre al ejecutar la función que definimos
   en la línea de arriba (miFuncion2). En consola Podemos
   observar el siguiente resultado:

   -> "este es el mensaje"
   -> undefined

   Además de mostrarnos el console.log que se ejecuta al llamar
   a la función miFuncion2(), también obtenemos un UNDEFINED.
   Esto ocurre porque en esta ocasión no hicimos uso de la palabra
   reservada RETURN. Al no usar un return, nos devuelve un mensaje
   de "undefined", esto porque no está definido un valor de devolución.

   En otras palabras, si no usamos RETURN dentro de nuestras funciones,
   obtendremos un UNDEFINED. El que te aparezca este UNDEFINED no afecta en nada.
*/
miFuncion2("este el mensaje");

/* Las funciones pueden tener cero, uno o muchos parámetros.
   En este caso, la función "suma" recibe dos parámetros, que
   son dos números que serán sumados.
*/
function suma(num1, num2){
  return num1 + num2;
}

console.log(suma(5,3));

/* Es posible escribir tantas líneas de código como nosotros deseemos dentro
   de las llaves {} de nuestra función. Por ejemplo, podemos hacer una función
   utilizando el código del ejercicio que realizamos en la primera sesión, donde
   convertíamos cualquier palabra en cAmElCaSe, es decir, alternamos los caracteres
   de una palabra entre mayúsculas y minúsculas.
*/
function minusMayus(palabra){

  let miNuevaCadena = ""

  for (var i = 0; i < palabra.length; i++) {
    if(i%2 == 0){
      miNuevaCadena = miNuevaCadena + palabra.charAt(i).toLowerCase();
    } else miNuevaCadena = miNuevaCadena + palabra.charAt(i).toUpperCase();
  }

  return miNuevaCadena;
}

/* Para hacer uso de nuestra nueva función, simplemente ejecutamos
   la función minusMayus() y mandamos dentro de los paréntesis la
   palabra que deseemos convertir.
*/
console.log(minusMayus("coco"));

/*
---------------------------------------------
                  Arreglos
---------------------------------------------
*/

/* Podemos definir una variable como tipo "arreglo"
   si le asignamos a nuestra variable un par de corchetes -> []
*/
let miArreglo = [];

/* Podemos emplear la función typeof() para mostrar en consola
   cuál es el tipo de dato que contiene nuestra variable.

   Aquí ocurre algo muy particular de Javascript; nos dice que
   el tipo de dato de nuestra variable "miArreglo" es OBJECT

   Javascript reconoce arreglos y objetos como tipo OBJECT.
*/
console.log( typeof(miArreglo) );

/* La característica fundamental de los arreglos es que
   almacenan datos mediante un ÍNDICE; es decir, los datos
   se almacenan en POSICIONES dentro del arreglo.

   Podemos llenar un arreglo de forma manual de la siguiene manera:
*/
miArreglo = [1,2,3,4,5];
/* En este caso, el valor 1 está en la posición 0 del arreglo.
   el valor 2 está en la posición 1 del arreglo.
   el valor 3 está en la posición 2 del arreglo.
   el valor 4 está en la posición 3 del arreglo.
   el valor 5 está en la posición 4 del arreglo.

   Para obtener el contenido de alguna de las posiciones de nuestro arreglo,
   se hace de la siguiente manera:
                      miArreglo[posición]
   Debemos escribir el nombre de nuestro arreglo seguido de corchetes [].
   Dentro de los corchetes escribimos el número de la posición que
   deseamos obtener.
*/

/* Podemos recorrer todas las posiciones de nuestro arreglo
   haciendo uso de un ciclo for.

   En nuestro ejemplo observamos que el índice i comienza en 0 y termina en 4,
   por lo que con el siguiente código podemos mostrar mediante un console.log,
   dentro de nuestro for, el valor contenido en cada posición de nuestro arreglo.
*/
for (let i=0; i < miArreglo.length; i++){
  console.log(miArreglo[i]);

}


/* Los ciclos FOR no solo nos sirven para recorrer el arreglo e
   imprimir su contenido. También podemos llenar un arreglo haciendo
   uso de un for.

   Veamos el siguiente ejemplo:
*/
let nuevoArreglo = [];

for (let i = 0; i < 6; i++) {
  nuevoArreglo[i] = i;        // Cada posición del arreglo, de 0 a 5,
}                             // será llenada con el valor que tenga i

/* En este caso, al iterar, en la posición 0 del arreglo se asignará un 0
   en la posición 1 del arreglo se asignará un 1
   en la posición 2 del arreglo se asignará un 2
   ... y así hasta llegar al 5.
*/

/* Usando un console.log podemos imprimir todo nuestro arreglo para
   verificar que éste se haya llenado correctamente.
*/
console.log(nuevoArreglo);


/*
---------------------------------------------
                  Objetos
---------------------------------------------
*/

/* Podemos definir una variable como tipo "objeto"
   asignándole un par de llaves {} a nuestr a variable.
*/
let miObjeto = {};    //<- variable que contiene un objeto

/* La característica primordial de los objetos, a diferencia
   de los arreglos, es que almacenan los datos mediante
                      clave: valor
   Aquí no existen posiciones para ubicar los valores almacenados,
   aquí usamos "claves", que sería el nombre con el que identificaremos
   un valor que deseemos almacenar.

   Los objetos, al igual que los arreglos, pueden almacenar lo que sea.
   Por ejemplo:
*/

let miObjeto = {
  mensaje: "que pedo banda",
  numero: 10,
  suma: function(num1,num2){
    return num1 + num2;
  },
  booleano: true
};

/* El objeto anterior contiene texto, número, función y booleano.
   Usemos un console.log para mostrar el contenido de nuestro objeto:
*/
console.log(miObjeto);

/* Para acceder a cualquiera de los ATRIBUTOS, es decir, cualquiera de
   los valores asociados a una clave, se hace de la siguiente manera:
                           miObjeto.mensaje;
   Comenzamos escribiendo el nombre de nuesto objeto, luego colocamos
   un punto, y después del punto escribimos la clave del atributo al que
   deseemos acceder.

    Para imprimir este atributo en consola podemos hacerlo así:
                      console.log(miObjeto.mensaje);
*/

/* La gran utilidad de los objetos es que podemos
   abstraer las características de cualquier cosa
   de la vida real y ponerlas en un objeto.

   Por ejemplo, podemos hacer una clase "persona":
*/
let persona = {
  nombre: "Juanita",
  edad: 18,
  nacionalidad: "Irlanda del Norte",
  dimeQuienEres: function(){
    /*Hacemos uso de "this" para referirnos al objeto dentro de él mismo;
      usando "this" podemos acceder a cualquiera de los atributos del objeto.
    */
    return "Mi nombre es " + this.nombre + " tengo " + this.edad + " años";
  }
}

console.log(persona.dimeQuienEres());

// //        EJERCICIO
//
// Crear tres objetos:
//
// 1) Triangulo
//    Atributos: base, altura
//    Metodo: perimetro, area
//
// 2) Cuadradro
//    Atributos: base, altura
//    Metodo: perimetro, area
//
// 3) Rectangulo
//    Atributos: base, altura
//    Metodo: perimetro, area

/*
---------------------------------------------
              Arrow Functions
---------------------------------------------
*/

/* Las arrow functions son una novedad de
   ECMAScript6. Nos permiten definir funciones de otra
   manera.

   Puedes definir funciones como gustes, ya sea de
   esta forma o de la forma convencional que vimos
   al inicio de esta sesión.
*/
let saludo = (nombre) => {
  return "¡Hola " + nombre + "!";
}

/*
---------------------------------------------
                  Scope
---------------------------------------------
*/

/* Dónde definimos nuestras variables importa,
   e importa mucho.

   Por ejemplo, si definimos una variable "resultado"
   dentro de nuestra funcion "suma", esta variable
   no será visible para todo el código que se encuentra
   fuera de la función.
*/

let suma = (num1, num2) =>
{
  let resultado = (num1 + num2);
  return resultado;
}

/* Dentro de la función, nosotros podemos llamar a la variable "resultado"
   y hacer uso de ella de la manera que deseemos. Sin embargo, si intentamos
   acceder a nuestra variable "resultado" desde fuera de la función, nos
   saldrá un error.
   En consola nos dirá que la variable "resultado" no existe.
*/

console.log(resultado);
//En consola diría -> UNDEFINED: La variable "resultado" no está definida

/* Así, podemos concluir que cualquier variable definida fuera de un bloque
   de código, es decir, cualquier variable que haya sido definida fuera de
   llaves {} es una variable que puede ser usada en cualquier lugar de nuestro
   código, sin importar dónde. A esto se le conoce como VARIABLES GLOBALES.

   Por el contrario, las variables definidas dentro de un bloque de código,
   es decir, dentro de llaves, son variables a las que solo se puede acceder
   estando dentro del mismo bloque de código.
   Es como si estas variables no existieran fuera del bloque donde fueron definidas.
*/


/*
---------------------------------------------
                  Clases
---------------------------------------------
*/

/* Los objetos son muy útiles, pero resulta tedioso tener que
   escribir muchas veces el mismo código para crear muchos objetos
   similares.

   Para resolver este problema tenemos a las CLASES.
   Las clases son como un molde que contiene parámetros
   generales para crear objetos similares, tantos como querramos.

   Cada vez que creamos un nuevo objeto a partir de una clase,
   se le conoce como INSTANCIAR.

   De esta forma, un objeto es una INSTANCIA de una clase.
*/

/* Para definir una clase, hacemos uso de la palabra
   reservada CLASS, seguido del nombre de nuestra clase.

   OJO: por convención, las clases siempre se nombran comenzando
        con una mayúsculas

        por esto las variables siempre se nombran comenzando
        con una minúscula.
*/
class Animal{

  /* El CONSTRUCTOR es la parte más importante de las clases;
     aquí definimos los atributos básicos que tendrán nuestros
     objetos
  */
  constructor(tamanio, color, patas){
    this.tamanio = tamanio
    this.color = color
    this.patas = patas

    /* Como buena práctica, para proteger los datos de nuestra
       clase podemos hacer uso de los GETTERS Y SETTERS

       En teoría, cuando alguien hace uso de nuestros objetos
       creados a partir de una de nuestras clases, solo
       debemos permitirles hacer uso de los MÉTODOS de
       nuestra clase.

       Los MÉTODOS son idénticos a las FUNCIONES. La única
       diferencia es que los métodos son parte de un objeto,
       y las funciones no dependen de nadie.
    */

  //Getter
  /* Los GETTERS permiten obtener el valor de
     nuestros atributos sin tener que acceder al
     objeto haciendo uso del punto (objeto.atributo).
  */
  getTamanio(){
    return this.tamanio;
  }

  //Setter
  /* Los SETTERS permiten cambiar el valor de
     nuestros atributos sin tener que acceder al
     objeto haciendo uso del punto (objeto.atributo).
  */
  setTamanio(tamanio){
    this.tamanio = tamanio;
  }

  /* Además de los getters y setters, podemos definir
     nuestros propios métodos para la clase.

     Por ejemplo: correr() e irAlBaño()
  */
  correr(){
    return "El animal de color "+ this.color +"está corriendo";
  }

  irAlBaño(){
    console.log("No molestes, está en el trono");
  }
}

/* Una vez definida nuestra clase, ahora podemos crear nuestros
   objetos. Es decir, ahora podremos crear INSTANCIAS de nuestra clase.

   Para instanciar nuestra clase, debemos hacer uso de la palabra
   reservada NEW seguido del nombre de nuestra clase; la clase
   debe llevar paréntesis, y dentro de los paréntesis mandamos
   los parámetros que hayamos colocado en nuestro constructor:
            new Animal("parametro1", "parametro2", ...)
   Para guardar nuestra instancia y poder utilizarla después, la línea de
   código debe ir precedida por una variable en donde querramos almacenar
   nuestra nueva instancia.
   Se hace de la siguiente manera:
*/
let pajaroAlien = new Animal("chiquito", "violeta", "2");

/* Para mostrar en consola uno de los métodos de nuestro nuevo objeto,
   lo hacemos de la siguiente manera:
*/
console.log( pajaroAlien.correr() );

/* También podemos hacer uso del setter "setTamanio"
   para cambiar el tamaño de nuestro nuevo objeto.
*/
pajaroAlien.setTamanio("grande");

/* Y para mostrar nuestro nuevo valor de "tamaño" en consola,
   podemos hacer uso del getter "getTamanio"
*/
console.log(pajaroAlien.getTamanio());

// //                     EJERCICIO
// Crear una clase Carro con
//   atributos: color, peso, marca
//   metodos: arrancar, apagar
//
//   arrancar -> El carro Toyota de color azul arranco
//   apagar -> El carro Toyota se apago
//
// Crear tres instancias de la clase Carro e
// imprimir con console.log alguno de sus metodos.
