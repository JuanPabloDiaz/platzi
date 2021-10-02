/*

Banco Cliente
cuenta Cliente
saldo Cliente
banco destino
cuenta destino
horario transferencia [0-24]

Necesito transferir 3000 USD

 - condiciones obligatorias de transferencia:
    *cliente debe ser verificado ( true or false )
    *Destino debe ser verificado ( true or false )
 - Saldo debe de ser mayor al monto a transferir mas costo de transaccion

 - Parametros del costo de transaccion:
    * Mismo banco, transaccion es gratis
    * diferente banco, transaccion cuesta 100 USD

*/

//BancoCliente = true;
cuentaCliente = true;
saldoCliente = 4000;
montoTransferir = 3000;
costoTransferecia = 100;
bancoDestino = false;
cuentaDestino = false;
hora = 9;

var resultado = document.getElementById("resultado");

// horarioTransferencia = 9-12 or 15-20.
//horarioTransferencia = hora.
//  hora >=9 && hora <= 12 || hora >=15 && hora <= 20 ?
/*
if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20)) {
  console.log("We are open");
} else {
  console.log("we are close");
}*/

//verify time:
if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20)) {
  console.log("We are open");

  //cliente debe ser verificado ( true or false )
  if (cuentaCliente) {
    console.log("Hi Juan");

    // Destino debe ser verificado ( true or false )
    if (bancoDestino) {
      // verificar que tenga el dinero:
      if (!saldoCliente >= costoTransferecia + montoTransferir) {
        console.log("tengo la plata");
      } else {
        console.log("I am broke");
      }

      console.log(
        "You are senting money to the same Bank. There is NO transaction fee"
      );

      // Parametros del costo de transaccion:
      console.log("Monto total es: $" + montoTransferir);
      console.log("Nuevo saldo: $" + (saldoCliente - montoTransferir));
      resultado.innerHTML =
        "Monto total es: $" +
        montoTransferir +
        "<br> Nuevo saldo: $" +
        (saldoCliente - montoTransferir);
    } else {
      console.log("Senting $$ to other Bank");

      // Parametros del costo de transaccion:
      montoTransferir += costoTransferecia;
      console.log("Transsaction fee $" + costoTransferecia);
      console.log("Monto total es: $" + montoTransferir);
      console.log("Nuevo saldo: $" + (saldoCliente - montoTransferir));
      resultado.innerHTML =
        "Monto total es: $" +
        montoTransferir +
        "<br> Nuevo saldo: $" +
        (saldoCliente - montoTransferir);
    }
  } else {
    resultado.innerHTML = "UnVerified Customer";
  }
} else {
  resultado.innerHTML = "We are close!";
}

// verificar que tenga el dinero:
/*
 if (saldoCliente >= costoTransferecia + montoTransferir) {
  console.log("tengo la plata");
} else {
  console.log("I am broke");
}
*/
