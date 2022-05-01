//  programacion orientada a objetos!

// declarar una clase llamada pakiman:
class Pakiman {
  //crear una funcion llamada constructor
  constructor(n, v, a) {
    //"this" es un indicador de la instancia donde estoy
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  //crear una funcion llamada hablar:
  hablar() {
    alert(this.nombre);
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}
