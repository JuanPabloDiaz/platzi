//function constructora:

function auto(MARCA, MODELO, COLOR, ANNO) {
  this.marca = MARCA;
  this.modelo = MODELO;
  this.color = COLOR;
  this.anno = ANNO;
}
var autos = [];

//generar un ciclo q pregunte 30 veces:
for (var i = 0; i < 30; i++) {
  var askMarca = prompt(i + " Cual es la marca:");
  var askModelo = prompt(i + " Cual es el modelo:");
  var askColor = prompt(i + " Cual es el color:");
  var askAno = prompt(i + " Cual es el ano:");
  console.log(askAno + askColor + askMarca + askModelo);
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
