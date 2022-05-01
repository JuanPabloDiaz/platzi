function rectangle() {
  //========================================
  // Get elemetns
  const btn = document.getElementById("rectangle_btn"),
    a = document.getElementById("base_r"),
    b = document.getElementById("height_r"),
    A = document.getElementById("area_rec"),
    P = document.getElementById("perimeter_rec");

  // Clear option
  if (btn.textContent == "Clear") {
    a.value = null;
    b.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    P.innerHTML = null;
    return;
  }

  // Operation
  area = a.value * b.value;
  perimeter = a.value * 2 + b.value * 2;

  // Print results
  A.innerHTML = area.toFixed(2);
  P.innerHTML = perimeter.toFixed(2);
  btn.textContent = "Clear";
}
//===========================================================

function triangle() {
  //========================================
  // Get elements
  const btn = document.getElementById("triangle_btn"),
    s = document.getElementById("side_b"),
    h = document.getElementById("height_t"),
    A = document.getElementById("area_tri");

  // Clear option
  if (btn.textContent == "Clear") {
    s.value = null;
    h.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    return;
  }

  // Operation
  area = (Number(s.value) * Number(h.value)) / 2;

  // Print results
  A.innerHTML = area.toFixed(2);
  btn.textContent = "Clear";
}
//===========================================================

function rhombus() {
  //========================================
  // Get elemetns
  const btn = document.getElementById("rhombus_btn"),
    x = document.getElementById("d1"),
    y = document.getElementById("d2"),
    A = document.getElementById("area_rho"),
    P = document.getElementById("perimeter_rho");

  // Clear option
  if (btn.textContent == "Clear") {
    x.value = null;
    y.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    P.innerHTML = null;
    return;
  }

  // Operation
  area = (x.value * y.value) / 2;
  lado = Math.sqrt(Math.pow(x.value, 2) + Math.pow(y.value, 2));
  console.log(lado);
  perimeter = 4 * lado;
  // Print results
  A.innerHTML = area.toFixed(2);
  P.innerHTML = perimeter.toFixed(2);
  btn.textContent = "Clear";
}
//===========================================================

function circle() {
  //========================================
  // Get elemetns
  const btn = document.getElementById("circle_btn"),
    a = document.getElementById("diameter"),
    A = document.getElementById("area_cir"),
    C = document.getElementById("Circumference");

  // Clear option
  if (btn.textContent == "Clear") {
    a.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    C.innerHTML = null;
    return;
  }

  // Operation
  area = Math.PI * (a.value / 2) ** 2;
  perimeter = Math.PI * a.value;

  // Print results
  A.innerHTML = area.toFixed(2);
  C.innerHTML = perimeter.toFixed(2);
  btn.textContent = "Clear";
} //===========================================================

function trapeze() {
  //========================================
  // Get elements
  const btn = document.getElementById("trapeze_btn"),
    a = document.getElementById("top_tp"),
    b = document.getElementById("base_tp"),
    h = document.getElementById("height_tp"),
    A = document.getElementById("area_trap");

  // Clear option

  if (btn.textContent == "Clear") {
    a.value = null;
    b.value = null;
    h.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    return;
  }

  // Operation
  area = ((Number(a.value) + Number(b.value)) * Number(h.value)) / 2;

  // Print results
  A.innerHTML = area.toFixed(2);
  btn.textContent = "Clear";
} //===========================================================

function parallelogram() {
  //========================================
  // Get elements
  const btn = document.getElementById("parallelogram_btn"),
    a = document.getElementById("base_pa"),
    b = document.getElementById("height_pa"),
    A = document.getElementById("area_para");

  // Clear option
  if (btn.textContent == "Clear") {
    a.value = null;
    b.value = null;
    btn.textContent = "Calculate";
    A.innerHTML = null;
    return;
  }

  // Operation
  area = Number(a.value) * Number(b.value);

  // Print results
  A.innerHTML = area.toFixed(2);
  btn.textContent = "Clear";
}
