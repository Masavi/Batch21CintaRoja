/*
---------------------------------------------
                  Variables
---------------------------------------------
*/

// Declaración de Variable
let miVariable;

// Asignación de Variable
miVariable = 10;

// Declaración y asignación de Variable
let nuevaVariable = "hola";

/*





---------------------------------------------
                Tipos de Datos
las variables en Javascript (var, let) pueden
contener cualquier tipo de dato
---------------------------------------------
*/

// String
let cadena = "hola";

// Number
let numero = 10;

// Boolean
let boolean = false;

// Undefined
let indefinido = undefined;

// Null
let vacio = null;

// Haciendo uso de console.log podemos mostrar cosas en consola
console.log(cadena + boolean);

/* Aunque ambas variables contienen el valor 10,
   el tipo de dato es distinto.
*/
let num1 = "10";
let num2 = 10;

/* Podemos aplicar operadores dentro del console log.
   En el caso del operador suma (+) puede concatenar
   los valores de las variables o sumarlas.
   Todo depende del tipo de dato de las variables.
*/
console.log(num1 + num2);
//RESULT: 1010

console.log(num1 - num2);
//RESULT: 0







/*
---------------------------------------------
            Estructuras de Control
Nos permiten modificar la manera en que se
ejecutan las instrucciones de nuestro programa
---------------------------------------------
*/

//           Condicionales IF-ELSE

/* Si se cumple una condición (en este caso si
    5 es mayor que 10), se ejecuta el código dentro
    de las llaves {}. De lo contrario, se ejecuta
    el código después del else
*/
if (5>10){
  console.log("Cinco es mayor que diez");
} else console.log("Cinco no es mayor que diez");

/* Es posible usar tantos if-else como deseemos.
   Esto se conoce como "anidar", es decir, poner
   uno dentro de otro dentro de otro...
*/

let numero = 6;

if (numero > 100){
  console.log("Mayor que cien");
} else if (numero > 50){
    console.log("Mayor que cincuenta");
} else if (numero > 5){
    console.log("Mayor que cinco");
} else console.log("Cualquier otra cosa");

//                Switch

/* Si queremos evaluar una condición contra
   muchos casos, lo recomendable es emplear
   un switch en vez de muchos if-else
*/

let dia = "miercoles";

switch (dia) {

  case "lunes":
    console.log("¡Hoy es lunes!");
    break;

  case "martes":
    console.log("¡Hoy es martes!");
    break;

  case "miercoles":
    console.log("¡Hoy es miercoles!");
    break;

  /* default funciona de la misma forma que "else";
     se ejecuta en caso de no cumplirse cualquiera
     de los casos anteriores
  */
  default:
    console.log("Dia no contiene una cadena valida");
}

/* El signo de igualdad (=) puede
   emplearse de tres formas
*/

// Asignar un valor a una variable
= asignación

// Comparar el valor entre dos cosas
== comparación

/* Comparar si dos cosas son idénticas, es decir,
   si contienen el mismo valor y son del mismo tipo de dato.
*/
=== idénticos

//                 Ciclos For

/*  Cuando deseemos ejecutar un bloque de código
    (es decir, ejecutar todo lo que se encuentra
    entre las llaves {} ) muchas veces, podemos
    usar un loop o ciclo for
*/

/* Este for va a iterar hasta que i deje de ser
   menor que diez. Cada vez que itera, i se
   incrementa en uno usando el operador ++

   Con cada iteración del for, imprimimos el
   contenido de la variable i, la cual se encuentra
   incrementando en cada vuelta o iteración
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/* Podemos combinar distintas estructuras de control,
   como si fueran nuestros bloques elementales, para
   construir lo que sea
*/

/* Este for con if dentro muestra en consola
   todos los números pares del 0 al 50
*/
for (let i = 0; i <= 50; i++){
  if (i%2 == 0) {
    console.log( i + " es par");
  }
}

/*
---------------------------------------------
                Ejercicio
A partir de una variable que contenga una cadena de texto,
se debe mostrar mediante un console log esa misma cadena pero
alternando entre minúsculas y mayúsculas

var = "perritosalchicha"

El resultado en consola debe mostrarse como sigue
= "pErRiToSaLcHiChA"

---------------------------------------------
*/


/*
-----------------SOLUCIÓN--------------------
*/

1) ¿Cómo obtengo el tamaño de mi palabra?
var palabra = "hola";
palabra.length -> devuelve el tamaño

2) ¿Cómo itero sobre mi palabra?
for (i=0; i < palabra.length; i++){
}

3) ¿Cómo sé cuándo es minúscula y cuándo es mayúscula?
var palabra = "hola";

// Los pares (0,2,4..) deben ser minúsculas
palabra.charAt(0);
//RESULT: h

// Los nones (1,3,5..) deben ser minúsculas
palabra.charAt(1);
//RESULT: o

/* Haciendo uso de una condición, evaluamos
   si el residuo de i dividio entre 2 es 0.
   Si es así, se trata de un número par.

   if(i%2 == 0)
*/

4) ¿Cómo muestro en pantalla estas mínusculas y mayúsculas juntas?

/* Mientras el FOR itera, podemos ir guardando
   en una nueva variable cada letra mínscula o
   mayúscula que se encuentre.

   if(i%2 == 0){
     miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
   } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();

   Luego imprimimos nuestra nueva cadena con un console log.

   -> console.log(miNuevaCadena);
*/


//Integrando las respuestas anteriores, tenemos el siguiente código
var str = "HOLITA";
var miNuevaCadena = "";

for (var i = 0; i < str.length; i++) {
  if(i%2 == 0){
    miNuevaCadena = miNuevaCadena + str.charAt(i).toLowerCase();
  } else miNuevaCadena = miNuevaCadena + str.charAt(i).toUpperCase();
}

console.log(miNuevaCadena);
