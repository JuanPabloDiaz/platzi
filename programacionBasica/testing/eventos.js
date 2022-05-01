var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

dibujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, x_inicial, x_final, y_inicial, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      console.log("arriba");
      break;
    case teclas.DOWN:
      console.log("abajo");
      break;
    case teclas.LEFT:
      console.log("izquierda");
      break;
    case teclas.RIGHT:
      console.log("derecha");
      break;
    default:
      console.log("otra tecla");
      break;
  }
}
console.log(dibujarLinea);
