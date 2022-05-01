// console.log("Hello World");

// ***************  Codigo Del Cuadrado
console.group("cuadrados");
//LADO CUADRADO
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

// PERIMETRO CUADRADO
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm.");

// AREA CUADRADO
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();

// ***************  Codigo Del Triangulo
console.group("Triangulos");
//LADO TRIANGULO
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm."
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");

// PERIMETRO TRIANGULO
const perimetroRectangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroRectangulo + "cm.");

// AREA TRIANGULO
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");
console.groupEnd();

// ***************  Codigo Del Circulo
console.group("Circulo");
const radio = 4;
console.log("El radio del circulo mide: " + radio + "cm.");
const diametro = 8;
console.log("El diametro del circulo mide: " + diametro + "cm.");
// const pi = 3.1415;
const pi = Math.PI;

// CIRCUNFERENCIA DEL CIRCULO
const perimetroCirculo = diametro * pi;
console.log("La circunferencia del circulo mide: " + perimetroCirculo + "cm.");

// AREA RECTANGULO
const areaCirculo = radio * radio * pi;
console.log("El area del circulo mide: " + areaCirculo + "cm^2");
console.groupEnd();
