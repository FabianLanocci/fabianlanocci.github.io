/*Script navbar*/
const navSlide = () => {
  const navButton = document.querySelector(".nav-button");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  navButton.addEventListener("click", () => {
    //Función Toggle
    nav.classList.toggle("nav-active");

    //Animación de los links al abrirse el boton con el toggle
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });

    //Animación del navButton
    navButton.classList.toggle("toggle");
  });
};

navSlide();
/*End of Script navbar*/

/*Script boton turno*/
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

/*End of Script boton turno */
