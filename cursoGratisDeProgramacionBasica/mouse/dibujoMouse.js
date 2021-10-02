alert("si sirve");
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseUp);
var texto = document.getElementById("usuario_color");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", mouseUp);

m = document.getElementById("dibujoMouse");
pizarra = m.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var recuadro = "black";
var x;
var y;
var colorcito;
var click;

//Construcción del recuadro dentro del cual se podrá dibujar
dibujarLinea(recuadro, 0, 0, m.width, 0, pizarra);
dibujarLinea(recuadro, m.width, 0, m.width, m.height, pizarra);
dibujarLinea(recuadro, m.width, m.height, 0, m.height, pizarra);
dibujarLinea(recuadro, 0, m.height, 0, 0, pizarra);

function mouseDown(evento) {
  click = 1;
  x = evento.clientX;
  y = evento.clientY;
}

function mouseMove(evento) {
  colorcito = texto.value;
  if (click == 1) {
    if (colorcito != "") {
      //Esta línea se agrega para evitar que js tome el color negro para el pincel por defecto
      dibujarLinea(colorcito, x, y, evento.clientX, evento.clientY, pizarra);
      x = evento.clientX;
      y = evento.clientY;
    }
  }
}

function mouseUp(evento) {
  click = 0;
}
