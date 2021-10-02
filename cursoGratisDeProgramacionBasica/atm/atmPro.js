//DECLARACION DE VARIABLES
class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
  mostrar() {
    document.body.appendChild(this.imagen);
  }
}

var sonidos = {
  tecla: document.getElementById("tecla_id"),
  alerta: document.getElementById("alerta_id"),
  entrega: document.getElementById("entrega_id"),
};

var imagenes = [];
imagenes[100] = "imagen/100.png";
imagenes[50] = "imagen/50.png";
imagenes[20] = "imagen/20.png";
imagenes[10] = "imagen/10.png";

var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 4));
caja.push(new Billete(20, 4));
caja.push(new Billete(10, 3));

var resultado = document.getElementById("resultado");
var carga = document.getElementById("carga_id");
var pantalla = document.getElementById("pantalla_texto");
var boton_extraccion = document.getElementById("botonExtraccion");
var papeles;
var div;
var dinero;
var dinero_disponible = 0;
var entregado = [];

// OTROS EVENTOS Y FUNCIONES
contador();

boton_extraccion.addEventListener("click", insertarDinero);
document.addEventListener("keydown", sonido_tecla);

//DECLARACION DE FUNCIONES
function sonido_tecla() {
  sonidos.tecla.play();
}

function contador() {
  //dinero total de  la caja
  for (v of caja) {
    dinero_disponible = dinero_disponible + v.valor * v.cantidad;
  }
}

function insertarDinero() {
  entregado.splice(0, entregado.length); //Reseteo el array entregado
  dinero = parseInt(pantalla.value);
  compatibilidad();
}

function compatibilidad() {
  //solo tomará multiplos positivos de 10 y distintos de 0
  if (dinero > dinero_disponible) {
    // SI NO HAY SUFICIENTE DINERO
    sonidos.alerta.play();
    resultado.innerHTML = "No tenemos tantos Freddólares!";
  } else {
    if (dinero % 10 == 0 && dinero > 0) {
      entregarDinero();
    }
    elseif(dinero == 0);
    {
      sonidos.alerta.play();
      resultado.innerHTML = "Para que vienes al cajero?";
    }
    elseif(dinero % 10 !== 0 && dinero > 0);
    {
      sonidos.alerta.play();
      resultado.innerHTML = "Inserte solo múltiplos de 10!";
    }
    elseif(dinero < 0);
    {
      sonidos.alerta.play();
      resultado.innerHTML = "No se pueden insertar valores negativos";
    }
  }
}

function entregarDinero() {
  for (v of caja) {
    if (dinero > 0) {
      div = parseInt(dinero / v.valor); //NUMERO DE BILLETES NECESARIOS

      if (div > v.cantidad) {
        //CUANDO NO ALCANZAN LOS BILLETES MAS GRANDES
        papeles = v.cantidad;
        dinero_disponible = dinero_disponible - v.valor * v.cantidad;
        dinero = dinero - v.valor * v.cantidad;
        entregado.push(new Billete(v.valor, papeles));
        v.cantidad = 0; //SE AGOTAN LOS BILLETES AL TERMINAR
        check();
      } //CUANDO SI ALCANZAN LOS BILLETES MAS GRANDES
      else {
        papeles = div;
        dinero_disponible = dinero_disponible - v.valor * div;
        dinero = dinero - v.valor * div;
        entregado.push(new Billete(v.valor, papeles));
        v.cantidad = v.cantidad - div;
        check();
      }
    }
  }
}

function check() {
  //VERIFICA SI LA SUMA ES VÁLIDA RESPECTO A LOS BILLETES DISPONIBLES
  if (dinero == 0) {
    //ENTREGA EL DINERO
    sonidos.entrega.play();
    carga.innerHTML += "<br /> Usted retiró: <br />";
    for (e of entregado) {
      resultado.innerHTML = "Retire su dinero abajo ↓";
      for (var i = 0; i < e.cantidad; i++) {
        carga.innerHTML += "<img src=" + e.imagen.src + " />";
      }
    }
  } else {
    sonidos.alerta.play();
    resultado.innerHTML = "No tenemos los billetes para esa suma";
  }
}
