document.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(evento) {
  console.log(evento);
  if (evento.buttons == 1) {
    dibujarLinea(colorcito.value, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}
