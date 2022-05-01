// Declarar variables

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

/*

clase 1:


lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
*/

/* clase 2:

    ahora como seria con una function...

*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = "color";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//  invocar function

dibujarLinea("red", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 310, 20, 110);
