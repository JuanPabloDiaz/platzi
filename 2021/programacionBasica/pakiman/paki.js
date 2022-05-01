var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*
var Cauchin = new Pakiman("Cauchin", 100, 30);
var Pokacho = new Pakiman("Pokacho", 80, 50);
var Tocinauro = new Pakiman("Tocinauro", 120, 40);
*/

// Puedo hacer un arrey y mostrar mi coleccion de Pakimanes:
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var freddito of coleccion) {
  freddito.mostrar();
}

for (var x in coleccion[0]) {
  console.log(x);
}
