// Media Armonica
// Suele utilizarse principalmente para calcular la media de velocidades, tiempos o en electrónica.
// Esta media es poco efectiva en los valores grandes y los infravalora respecto a la media aritmética, pero muy efectiva a los valores próximos a cero, ya que los inversos o fracciones 1/X son muy altos, por lo que les da más peso que en las medias aritmética y geométrica. Y es la ideal a usar en esos casos.

// Como por ejemplo : Un tren realiza un trayecto de 400km. La vía tiene mal estado que no permitían correr. Los primeros 100 km los recorre a 120km/h, los siguientes 100km la vía está en mal estado y va a 20km/h, los terceros 100km a 100km/h y los 100 últimos a 130km/h. Para calcular el promedio de velocidades, calculamos la media armónica. Asi:

//  Paso 1: Definir el conjunto de distancias junto a sus velocidades.

const movement = [
  {
    distanceKm: 100,
    velocity: 120,
  },
  {
    distance: 100,
    velocity: 20,
  },
  {
    distanceKm: 100,
    velocity: 100,
  },
  {
    distanceKm: 100,
    velocity: 130,
  },
];

// Paso 2: Crear un array con la Inversa de las velocidades.

// const velocityInvert = movement.map(function (movementObject) {
//     return (1 / movementObject.velocity);
// });

// Paso 3: Hacer una sumatoria de las Velocidades Invertidas

// const velocityprom = velocityinvert.reduce (
//     function ( sum = 0, newVal) {
//         return sum + newVal;
//     }
// );

// Paso 4: Division de "Promedio de Velocidades Invertidas" entre "cantidad de Velocidades", y almacenarlas en una "variable a reutilizar".

// const mediaArmonica = (velocityInvert.length / velocityprom);

// Paso 5: Creamos una funcion que acepte com parametro cualquier objeto movimiento que incluya distancias y velocidades. Y que ademas permite calcular la media armonica automaticamente.Creamos

function calcularMediaArmonica(dataObject) {
  const velocityInvert = dataObject.map(function (dataObject) {
    return 1 / dataObject.velocity;
  });

  const velocityprom = velocityInvert.reduce(function (sum = 0, newVal) {
    return sum + newVal;
  });

  const mediaArmonica = velocityInvert.length / velocityprom;

  return mediaArmonica;
}
