var d = document.getElementById("dibujoCanvas");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = "color";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var lineas = 30;
var l = 0;
var yi, xf;
var yf, xi;

/*
while (l < lineas) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  console.log("Linea " + l);
  l++;
}
*/
//bordes
dibujarLinea("#AFA", 1, 1, 1, 299);
dibujarLinea("#AFA", 1, 299, 299, 299);

// same idea but with a FOR LOOP

for (l = 0; l < lineas; l++) {
  // Dibuja esquina inferior izquierda
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);

  // Dibuja esquina Superior Derecha:
  yf = 10 * l;
  xi = 10 * (l + 1);
  dibujarLinea("#AAF", xi, 0, 300, yf);

  //
  nxf = 300 - xf;
  nyf = 300 - yf;
  // Dibuja esquina Superior izquierda:
  dibujarLinea("#AAF", 0, xf, nxf, 0);
  // Dibuja esquina inferior derecha
  dibujarLinea("#AAF", xi, 300, 300, nyf);
}
