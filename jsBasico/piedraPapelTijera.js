var jugador;
var computador;

//  Jugar:
jugador = "piedra";
computador = "papel";

if (jugador == "tijeras" && computador == "papel") {
  console.log("Ganaste");
} else if (jugador == "Piedra" && computador == "tijeras") {
  console.log("Ganaste");
} else if (jugador == "papel" && computador == "piedra") {
  console.log("Ganaste");
} else if (jugador == computador) {
  console.log("empate");
} else {
  console.log("Perdiste");
}
