const select = document.getElementById("language_select");
const arrow = document.getElementById("arrow");

var LanguageList = {
    "EN" : "English",
    "ES" : "Español",
  };
  
  //languages Objects
  var WORDS_EN = {
    "home" : "Home",
    "about" : "About me",
    "projects" : "My projects",
    "contact" : "Contact",
    "sub-heading" : "System analyst | Front-end developer",
    "download-CV-btn" : "Download my CV",
    "about-description1" : "Hi! I'm a senior student at Instituto Argentino De La Empresa (IADE) - HILET, currently finishing Superior Technician in Systems (Systems Analyst). ",
    "about-description2" : "I've been studying HTML, CSS, Javascript and a few other web development concepts/languages by myself as I'm finishing my career and realized I love Front-end developing as much as to code in .NET or Java and now am trying to make the jump from college to the tech industry.",
    "skills-heading" : "Skills",
    "project-repository" : "Source code",
    "project-live" : "Live version",
    "project1" : "Spotify music listener",
    "project1-desc" : "Angular project that consumes Spotify API",
    "project2" : "Barber shop project",
    "project2-desc" : "Little side project for a barber shop site, made with HTML/CSS/JS.",
    "project3": "PHP Documentation book",
    "project3-desc" : 'Website connected to a MySql database totally made in PHP with CodeIgniter. Hosted in 000webhostapp.',
    "project4" : "Pacman in Java",
    "project4-desc" : "Pacman game made in Java using Swing.",
    "project5" : "Web API with .NET",
    "project5-desc" : "MVC designed api made in .NET, using SQl Server. Tested with Swagger.",
    "contact-information" : "If you're interested in chatting or have any questions I'd love for you to reach out!",
    "phone" : "Phone",
    "curriculum" : "Resume",
    "copyright" : "Copyright \xa9 2021 - Fabian Lanocci"
  };
  
  var WORDS_ES = {
    "home" : "Inicio",
    "about" : "Sobre mi",
    "projects" : "Mis proyectos",
    "contact" : "Contacto",
    "sub-heading" : "Analista de sistemas | Desarrollador Front-end",
    "download-CV-btn" : "Descarga mi CV",
    "about-description1" : "¡Hola! Soy estudiante de ultimo año en Instituto Argentino De La Empresa (IADE) - HILET, terminando Tecnicatura Superior en Sistemas (Analista de Sistemas).",
    "about-description2" : "He estado explorando/estudiando HTML, CSS, Javascript y algunos otros conceptos/lenguajes por mi mismo mientras terminaba la carrera y me di cuenta que me encanta el desarrollo en Front-end tanto como codear en .NET o Java asi que ahora estoy aqui para pegar el salto de la universidad a la industria de la tecnología.", 
    "skills-heading" : "Stack tecnológico",
    "project-repository" : "Código fuente",
    "project-live" : "Ver en vivo",
    "project1" : "Reproductor de música Spotify API",
    "project1-desc" : "Proyecto en angular que, consumiendo la API de Spotify, permite realizar varias acciones relacionadas a la reproducción de música.",
    "project2" : "Barbería",
    "project2-desc" : "Pequeño proyecto sobre un sitio web para una barbería, hecho con HTML/CSS/JS.",
    "project3": "Libro de documentación sobre PHP",
    "project3-desc" : 'Sitio web conectado a una base de datos MySql totalmente hecho en PHP con CodeIgniter. Hosteado en 000webhostapp.',
    "project4" : "Pacman en Java",
    "project4-desc" : "Juego de Pacman hecho en Java utilizando Swing.",
    "project5" : "Web API usando .NET",
    "project5-desc" : "Api diseñada con un diseño MVC en .NET, usando SQL server. Testeada con Swagger.",
    "contact-information" : "Si estás interesado/a en hacerme cualquier pregunta o simplemente charlar sobre algún proyecto, ¡me encantaría que te comunicaras conmigo!",
    "phone" : "Teléfono",
    "curriculum" : "Curriculum",
    "copyright" : "Copyright \xa9 2021 - Fabian Lanocci"

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

    //Only made because if not, the select button will start with its given by the browser look
    select.classList.add("bg-maincolor");
    arrow.classList.add("bg-maincolor");
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
      document.getElementById("language_icon").src ="./res/icons/english.png";
    } else if (lang == "ES"){
      document.getElementById("curriculum-link").href ="https://drive.google.com/file/d/18lK6V6QVS5fvvU8f4Sp9pqlCkK5-izOp/view?usp=sharing";
      document.getElementById("language_icon").src ="./res/icons/spanish.png";
    }
  }

  const toggle = document.querySelector('.toggle');
  const topbar = document.querySelector('.topbar');
  const navigation = document.querySelector('.navigation');
  const main = document.querySelector('.main');

  toggle.onclick = function() {
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  }

  /* Hamburguer functionality
  const hamburger = document.getElementById("hamburguer");
  const navLinks = document.getElementById("navbar-list");
  const links = document.getElementsByClassName(".navlink");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach(link => {
      link.classList.toggle("fade");
      });
  });*/

  /* Navbar functionality when scrolling
  window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0){
      navbar.classList.add("bg-black");
      navbar.classList.add("text-white");
      select.classList.remove("bg-maincolor");
      select.classList.add("bg-black");
      select.classList.add("text-white");
      arrow.classList.remove("bg-maincolor");
      arrow.classList.add("bg-black");
      arrow.classList.add("text-white");
    } else{
      navbar.classList.remove("bg-black");
      navbar.classList.remove("text-white");
      select.classList.remove("bg-black");
      select.classList.remove("text-white");
      select.classList.add("bg-maincolor");
      arrow.classList.remove("bg-black");
      arrow.classList.remove("text-white");
      arrow.classList.add("bg-maincolor");
      if(window.innerWidth < 768 ){
        navbar.classList.add("text-white");
      }
    }
  });*/
 

