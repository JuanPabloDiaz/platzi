// ***************  Codigo Del Cuadrado

// PERIMETRO CUADRADO
function perimetroCuadrado(lado) {
  return lado * 4;
}

// AREA CUADRADO
function AreaCuadrado(lado) {
  return lado * lado;
}

// ***************  Codigo Del Triangulo

// PERIMETRO TRIANGULO
function perimetroRectangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// AREA TRIANGULO
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// ***************  Codigo Del Circulo

const pi = Math.PI;

// DIAMETRO DEL CIRCULO
function diametroCirculo(radio) {
  return radio * 2;
}

// CIRCUNFERENCIA DEL CIRCULO

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

// AREA RECTANGULO
function areaCirculo(radio) {
  return radio * radio * pi;
}
