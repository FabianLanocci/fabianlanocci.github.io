var LanguageList = {
    "EN" : "English",
    "ES" : "Español",
  };
  
  //languages Objects
  var WORDS_EN = {
    "home" : "Home",
    "about" : "About me",
    "portfolio" : "Portfolio",
    "contact" : "Contact",
    "sub-heading" : "System analyst | Front-end developer",
    "about-description1" : "Hi! I'm a senior student at Instituto Argentino De La Empresa (IADE) - HILET, currently finishing Superior Technician in Systems (Systems Analyst). ",
    "about-description2" : "I've been studying HTML, CSS, Javascript and a few other web development concepts/languages by myself as I'm finishing my career and realized I love Front-end developing as much as to code in .NET or Java and now am trying to make the jump from college to the tech industry.",
    "stack-heading" : "Stack",
    "project-button" : "Go",
    "project1" : "Barber shop project",
    "project1-desc" : "Little side project for a barber shop site, made with HTML/CSS/JS.",
    "project2": "PHP Documentation book",
    "project2-desc" : 'Website connected to a MySql database totally made in PHP with CodeIgniter. Hosted in 000webhostapp.',
    "project3" : "Pacman in Java",
    "project3-desc" : "Pacman game made in Java using Swing.",
    "contact-information" : "If you're interested in chatting or have any questions I'd love for you to reach out!",
    "phone" : "Phone",
    "curriculum" : "Resume",
    "copyright" : "Created by Fabian Lanocci - 2021 All Rights Reserved"
  };
  
  var WORDS_ES = {
    "home" : "Inicio",
    "about" : "Sobre mi",
    "portfolio" : "Portafolio",
    "contact" : "Contacto",
    "sub-heading" : "Analista de sistemas | Desarrollador Front-end",
    "about-description1" : "¡Hola! Soy estudiante de ultimo año en Instituto Argentino De La Empresa (IADE) - HILET, terminando Tecnicatura Superior en Sistemas (Analista de Sistemas).",
    "about-description2" : "He estado explorando/estudiando HTML, CSS, Javascript y algunos otros conceptos/lenguajes por mi mismo mientras terminaba la carrera y me di cuenta que me encanta el desarrollo en Front-end tanto como codear en .NET o Java asi que ahora estoy aqui para pegar el salto de la universidad a la industria de la tecnología.", 
    "stack-heading" : "Stack",
    "project-button" : "Ir",
    "project1" : "Barbería",
    "project1-desc" : "Pequeño proyecto sobre un sitio web para una barbería, hecho con HTML/CSS/JS.",
    "project2": "Libro de documentación sobre PHP",
    "project2-desc" : 'Sitio web conectado a una base de datos MySql totalmente hecho en PHP con CodeIgniter. Hosteado en 000webhostapp.',
    "project3" : "Pacman en Java",
    "project3-desc" : "Juego de Pacman hecho en Java utilizando Swing.",
    "contact-information" : "Si estás interesado/a en hacerme cualquier pregunta o simplemente charlar sobre algún proyecto, ¡me encantaría que te comunicaras conmigo!",
    "phone" : "Teléfono",
    "curriculum" : "Curriculum",
    "copyright" : "Creado por Fabian Lanocci - 2021 Todos los derechos reservados"

  };
  
  
  window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#language_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    loadsLanguage("EN");
  }
  
  function loadsLanguage(lang){
    // Fills all the span tags with class=lang pattern
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });

    if(lang == "EN"){
      document.getElementById("curriculum-link").href ="https://drive.google.com/file/d/1kDCtpYjLmOvEgqS2XnrrIUigqwFQO-b2/view?usp=sharing";
    } else if (lang == "ES"){
      document.getElementById("curriculum-link").href ="https://drive.google.com/file/d/18lK6V6QVS5fvvU8f4Sp9pqlCkK5-izOp/view?usp=sharing";
    }
  }

  // Hamburguer functionality
  const hamburger = document.getElementById("hamburguer");
  const navLinks = document.getElementById("navbar-list");
  const links = document.getElementsByClassName(".navlink");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach(link => {
      link.classList.toggle("fade");
      });
  });

  // Navbar functionality when scrolling
  window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0){
      navbar.classList.add("bg-black");
      navbar.classList.add("text-white");
    } else{
      navbar.classList.remove("bg-black");
      navbar.classList.remove("text-white");
      if(window.innerWidth < 768 ){
        navbar.classList.add("text-white");
      }
    }
  });
 

