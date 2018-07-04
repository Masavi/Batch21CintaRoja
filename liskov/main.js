// Crear una clase Largometraje que herede a dos clases
// Documental y Pelicula.

class Largometraje{
  constructor(nombre, duracion, director){
    this.nombre = nombre
    this.duracion = duracion
    this.director = director
  }

  //Getters
  getNombre(){
    return this.nombre
  }

  getDuracion(){
    return this.duracion
  }

  getDirector(){
    return this.director
  }

  //Setters
  setNombre(nuevoNombre){
    if (nuevoNombre == 'popo'){
      return new Error("Ocurrio un error, esa palabra es prohibida");
    } else this.nombre = nuevoNombre;
  }

  setDuracion(nuevaDuracion){
    return this.duracion = nuevaDuracion;
  }

  setDirector(nuevoDirector){
    return this.director = nuevoDirector;
  }

  //Metodos
  reproducir(largometraje){
                                      //largometraje.nombre;
    return "Se está reproduciendo " + largometraje.getNombre();
  }
}

// let laLeyDelMonte = new Largometraje("La Ley del Monte", 0 ,"Mario Almada");
// console.log(laLeyDelMonte);

class Documental extends Largometraje{
  constructor(nombre, duracion, director, clasificacion){
    super(nombre, duracion, director)
    this.clasificacion = clasificacion;
  }

  getClasificacion(){
    return this.clasificacion;
  }

  setClasificacion(nuevaClasificacion){
    return this.clasificacion = nuevaClasificacion;
  }

  reproducirDocumental(){
                                                  //documental.nombre
    return "Se está reproduciendo el documental " + this.getNombre()
  }
}

class Pelicula extends Largometraje{
  constructor(nombre, duracion, director, festival){
    super(nombre, duracion, director);
    this.festival = festival;
  }

  getFestival(){
    return this.festival;
  }

  setFestival(nuevoFestival){
    return this.festival = nuevoFestival;
  }

  reproducirPelicula(){
    return "Se está reproduciendo la pelicula " + this.getNombre();
  }
}

let toyStory = new Pelicula("Toy Story", 90, "Pedro Paco", "Cannes");
let bellasDeNoche = new Documental("Bellas de Noche", 75, "Luisa Maria", "B15");

// console.log( toyStory.reproducirPelicula() );
// console.log( bellasDeNoche.reproducirDocumental() );

class Cine{
  constructor(largometraje){
    this.largometraje = largometraje
  }

  reproducirLargometraje(){
    return "El largometraje " + this.largometraje.getNombre()
          + " va a durar " + this.largometraje.getDuracion() + " minutos."
  }
}

let cine = new Cine(bellasDeNoche);
let cosaQueVoyAImprimir = cine.reproducirLargometraje();
console.log(cosaQueVoyAImprimir);

// let persona = {
//   nombreDeUsuario: "juan",
//   peso: 80
// }
//
// console.log(persona.nombreDeUsuario);
// persona.nombreDeUsuario = "chona";
// console.log(persona.nombreDeUsuario);
