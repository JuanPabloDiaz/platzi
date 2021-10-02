//test if js evern works
console.log("todo bien");

//variables
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

// Detecta el input del techado en el html
document.addEventListener("keyup", dibujarTechado);

function dibujarTechado(evento) {
  console.log("detectamos una tecla");

  console.log(evento.keyCode);
  /*  CODIGO USANDO IF:

  if (evento.keyCode == teclas.UP) {
    console.log("tecla arriba");
  }
  if (evento.keyCode == teclas.DOWN) {
    console.log("tecla abajo");
  }
  if (evento.keyCode == teclas.LEFT) {
    console.log("tecla izquierda");
  }
  if (evento.keyCode == teclas.RIGHT) {
    console.log("tecla derecha");
  }
*/

  switch (evento.keyCode) {
    case teclas.UP:
      console.log("UP");
      break;
    case teclas.DOWN:
      console.log("DOWN");
      break;
    case teclas.LEFT:
      console.log("LEFT");
      break;
    case teclas.RIGHT:
      console.log("RIGHT");
      break;
    default:
      console.log("otra tecla");
  }
}
