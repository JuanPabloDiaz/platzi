//variables y valores

var client_bank = "HSBC";
var client_ver = true;
var client_money = 1000000;
var destiny_bank = "HSBC";
var destiny_ver = true;
var transaction = 1000000;
var time = 10;

var resultado = document.getElementById("resultado");

/*
  Intenté hacerlo de la manera más clara posible en un solo if:

    1. En la primera línea comprobamos que sean usuarios verificados y el dinero disponible
    2. En la segunda validamos la transacción, teniendo en cuenta si la misma tiene costo o no
    3. Por último verificamos que el horario sea adecuado y damos paso a la instrucción
*/

if (
  client_ver &&
  destiny_ver &&
  client_money >= (client_bank === destiny_bank ? 0 : 100) + transaction &&
  ((time >= 9 && time <= 12) || (time >= 15 && time <= 20))
) {
  resultado.innerHTML = "Your transaction was successful, thanks.";
} else {
  resultado.innerHTML = "We can't handle your transaction, please try later.";
}
