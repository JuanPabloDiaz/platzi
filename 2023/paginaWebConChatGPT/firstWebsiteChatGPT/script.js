// JavaScript para la landing page

// testing the page
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("La página ha cargado completamente");
// });

// barra de navegación interactiva
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".nav-item a");

  // Función para resaltar la sección activa en la barra de navegación
  function setActiveSection() {
    // const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems[index].classList.add("active-section");
      } else {
        navItems[index].classList.remove("active-section");
      }
    });
  }

  // Evento para activar la función cuando se desplace la página
  window.addEventListener("scroll", setActiveSection);
});

// Función para manejar el clic en el botón de suscripción
function suscribirse() {
  alert("Gracias por suscribirte a nuestra oferta especial.");
}

// Asociar la función al botón
const btnSuscribirse = document.getElementById("btnSuscribirse");
btnSuscribirse.addEventListener("click", suscribirse);
