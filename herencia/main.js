/*
---------------------------------------------
            Clases: Ejercicios
---------------------------------------------
*/

/*
	Haz una clase llamada Persona que siga las siguientes condiciones:
	Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	calcularIMC()
	esMayorDeEdad()
	El constructor pide nombre, edad,sexo,peso y altura
	Generar el RFC a partir de el nombre, edad y sexo
*/

class Persona{
	constructor(nombre, edad, sexo, peso, altura){
		this.nombre = nombre
		this.edad = edad
		this.sexo = sexo
		this.peso = peso
		this.altura = altura
	}

	calcularIMC(){
		return this.peso/(this.estatura*this.estatura);
	}

	esMayorDeEdad(){
		if(this.edad > 17){
			return "Es mayor de edad";
		} else return "No es mayor de edad";
	}

	obtenerRFC(){
		this.rfc =  (this.nombre + this.edad + this.sexo);
	}
}

let mauricio = new Persona("Mauricio", 22, "H", 73.5, 1.72);

console.log(mauricio.esMayorDeEdad());
/* El atributo "rfc" se genera hasta que se ejecuta por primera vez el
   método "obtenerRFC()". Podemos observar que, si intentamos mostrar
   en consola el atributo "rfc", aparecerá un UNDEFINED en consola.
*/
console.log(mauricio.rfc);
console.log(mauricio.obtenerRFC());

/* Ahora sí, tras ejecutar el método "obtenerRFC()", podemos mostrar
   en consola el atributo. Es decir, el atributo ahora existe.
*/
console.log(mauricio.rfc);

/*
	Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	Titular y cantidad
	ingresar(cantidad)
	retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta{
	constructor(titular, cantidad){
		this.titular = titular
		this.cantidad = cantidad
	}

	ingresar(cantidad){
		if (this.cantidad + cantidad > 900){
			return "Estas superando el limite de $900; operacion cancelada";
		} else {
			this.cantidad += cantidad;
			return "Operacion exitosa: Tu saldo es de " + this.cantidad;
		}
	}

	retirar(cantidad){
		if (this.cantidad - cantidad < 10){
			return "No tienes fondos suficientes; el minimo es de $10";
		} else {
			this.cantidad -= cantidad;
			return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
		}

	}
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);

console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100));*/


/*
---------------------------------------------
                 Herencia
---------------------------------------------
*/


/* Podemos definir una clase padre que pasará sus
   atributos y métodos a clases derivadas de ésta,
   mejor conocidas como "clases hijas".
*/
class Animal{
	constructor(name, peso){
		this.name = name
		this.peso = peso
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida
	}
}

/* Usamos la palabra reservada "extends" para indicar que esta
   clase Perro está heredando o "extendiendo" de la clase Animal
*/
class Perro extends Animal{
	constructor(raza,name,peso){
		super(name,peso)
		this.raza = raza
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
	}

	correr(){
    // Esta es otra forma de mostrar mensajes, usando comillas invertidas y
    // colocando las variables que deseemos mostrar dentro de algo como esto -> ${}
		return `El perro de la raza ${this.raza} esta corriendo`
	}
}

// Lo mismo ocurre con la clase Pájaro; esta extiende de Animal
class Pajaro extends Animal{
	constructor(color,name,peso){
		super(name,peso)
		this.color = color
	}

	volar(){
		return `El pajarito de color ${this.color} esta volando`
	}
}

var pug = new Perro("Pug","Fido",40)
console.log(pug)

var perico = new Pajaro("Azul","Periquito",5)
console.log(perico)

/* Podemos pasar un objeto de tipo "Animal", es decir,
   una instancia de la clase Animal como parámetro de
   una función.

   pug y perico son instancias de las clases Perro y Pájaro,
   las cuales, a su vez, son clases hijas de la clase Animal.

   Por lo tanto, pug y perico no solo son instancias de la
   clase Perro y Pájaro, también son instancias de la clase Animal.
*/
function comerComida(Animal){
	console.log(Animal.comer("Comida"))
}

// Así, la siguiente función sirve con cualquier objeto derivado
// de la clase Animal. En este caso, podemos usar el objeto "perico"
// o el objeto "pug" y en ambos casos la función se ejecutará sin problemas.
comerComida(perico)

/*
---------------------------------------------
            Herencia: Ejercicio
---------------------------------------------
*/

Crear una clase comida, que herede a tres clases
comidamexicana, comidajaponesa, comidatailandesa,
la clase padre debe tener los
atributos: nombre, precio, sazon, tamanio
  metodos: hervir(), emitirOlor()

Con clases que hereden de Comida:
comidamexicana:
  -picor
  enchilar()
comidajaponesa:
  -saladez
  queTanSalado()
comidatailandesa:
  -color
  deQueColor()
