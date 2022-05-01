//console.log("test");

// class billetes contiene la denominacion o valor y la cantidad de billetes
class billete {
  constructor(v, c) {
    this.valor = v; //denominacion
    this.cantidad = c;
  }
}

// variable atm almacena los billetes disponibles en el atm:
var atm = [];

//a la clase billetes se le agrega la denominacion y cantidad y esta se almacena en atm
atm.push(new billete(50, 3));
atm.push(new billete(20, 2));
atm.push(new billete(10, 2));

// variable donde se almacenan los billetes q se entregaran
var entregado = [];

//variables:
var dinero = 210;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//test the fuction works
//console.log(bi);
function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of atm) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new billete(bi.valor, papeles));
      dinero = dinero - bi.valor * papeles;
    }
  }

  if (dinero > 0) {
    resultado.innerHTML =
      "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML +=
          e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}
