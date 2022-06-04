//   STEP 1:
// manual values

// const lista1 = [100, 200, 300, 500];

// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//   sumaLista1 = sumaLista1 + lista1[i];
//   console.log("lista1: " + lista1[i]);
//   console.log("la suma de los elementos es: " + sumaLista1);
// }
// const promedioLista1 = sumaLista1 / lista1.length;
// console.log("Promedio: " + promedioLista1);

//****************************************************** */
//   STEP 2:
//  ASK USER FOR THE ITEMS OF THE LIST

// function calcularMediaAritmetica(lista) {
//   let sumaLista = 0;
//   for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];

//     // console.log("lista: " + lista1[i]);
//     // console.log("la suma de los elementos es: " + sumaLista);
//   }
//   const promedioLista = sumaLista / lista.length;

//   return promedioLista;
// }

//****************************************************** */
//   STEP 3:
// use REDUCE METHOD:
//  ASK USER FOR THE ITEMS OF THE LIST

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
