const select = document.getElementById("language_select");
const arrow = document.getElementById("arrow");

var LanguageList = {
    "EN" : "English",
    "ES" : "Español",
  };
  
  //languages Objects
  var WORDS_EN = {
    "home" : "Home",
    "about": "About me",
    "skills" : "Skills",
    "projects" : "My projects",
    "contact" : "Contact",
    "sub-heading" : "System analyst | Front-end developer",
    "download-CV-btn" : "Download my CV",
    "about-description1" : "Hi! I'm a Front-end developer and a Superior Technician in Systems (Systems Analyst). ",
    "about-description2" : "I've been studying HTML, CSS, Javascript and a few other web development concepts/languages by myself as I'm finishing my career and realized I love Front-end developing as much as to code in .NET or Java. Now, with several years of experience, I seek to set myself new challenges and get to know new environments, in order to continue growing and provide the best solutions together with my team.",
    "skills-heading": "Skills",
    "skills-subtitle": "This is the skills/technological stack that I have knowledge of. It includes both Front and Back technologies, databases and version control on various platforms, including the Atlassian suite. Management of the Office suite and Windows/Linux operating systems",
    "skills-html" : "Advanced knowledge of HTML tags, making correct use of semantics and applying accessibility concepts.",
    "skills-css": "Responsive web desing principles, CSS Flexbox/Grid.",
    "skills-bootstrap": "Development of complete layouts using bootstrap. Using ng-bootstrap to combine Angular with this framework.",
    "skills-js": "ECMAScript 6, Regex, Data Structures/Algorithms, Object Oriented Programming, Functional Programming, Debugging and DOM Manipulation",
    "skills-angular": "Application architecture, reactive forms and knowledge in several Angular libraries (Material, PrimeNg, ng2-file-upload, chartjs, etc).",
    "skills-react": "Basic knowledge of component-based framework accompanied by rapid learning from the experience gained in Angular.",
    "skills-java": "JSON Apis, Basic and Token Authentication, Endpoints Manipulation.",
    "skills-git": "",
    "skills-atlassian": "",
    "skills-php": "",
    "skills-sql": "",
    "skills-office" : "",
    "project-repository" : "Source code",
    "project-live" : "Live version",
    "project1" : "Spotify music listener",
    "project1-desc" : "Angular project that consumes Spotify API",
    "projectAngular" : "Angular token project",
    "projectAngular-desc": "Project that offers a login with tokens, which you get every time the page is launched to keep the session logged in and authorize the user.",
    "projectReact" : "React MUI project",
    "projectReact-desc" : "Small social network feed made in React built entirely with MUI.",
    "projectBarber" : "Barber shop project",
    "projectBarber-desc" : "Little side project for a barber shop site, made with HTML/CSS/JS.",
    "projectPHP": "PHP Documentation book",
    "projectPHP-desc" : 'Website connected to a MySqL database totally made in PHP with CodeIgniter. Hosted in 000webhostapp.',
    "projectPacman" : "Pacman in Java",
    "projectPacman-desc" : "Pacman game made in Java using Swing.",
    "projectWebApiNET" : "Web API with .NET",
    "projectWebApiNET-desc" : "MVC designed api made in .NET, using SQL Server. Tested with Swagger.",
    "contact-information" : "If you're interested in chatting or have any questions I'd love for you to reach out!",
    "phone" : "Phone",
    "curriculum" : "Resume",
    "copyright" : "Copyright \xa9 2022 - Fabian Lanocci"
  };
  
  var WORDS_ES = {
    "home" : "Inicio",
    "about": "Sobre mi",
    "skills" : "Habilidades",
    "projects" : "Mis proyectos",
    "contact" : "Contacto",
    "sub-heading" : "Analista de sistemas | Desarrollador Front-end",
    "download-CV-btn" : "Descarga mi CV",
    "about-description1": "¡Hola! Soy desarrollador front-end y Técnico Superior en Sistemas (Analista de Sistemas).",
    "about-description2" : "He estado estudiando HTML, CSS, Javascript y algunos otros conceptos/lenguajes por mi mismo mientras terminaba la carrera y me di cuenta que me encanta el desarrollo en Front-end tanto como codear en .NET o Java. Ahora, con varios años de experiencia, busco plantearme nuevos desafíos y conocer nuevos ambientes, con el fin de continuar creciendo y proveer las mejores soluciones junto a mi equipo.", 
    "skills-heading": "Habilidades",
    "skills-subtitle": "Este es el stack tecnológico del que poseo conocimientos. Comprende tecnologías tanto de Front como de Back, bases de datos y control de versionado en diversas plataformas, incluyendo también la suite de Atlassian. Manejo de la suite de Office y sistemas operativos Windows/Linux",
    "skills-html" : "Avanzado conocimiento de etiquetas HTML, haciendo uso correcto de la semántica y aplicando conceptos de accesibilidad.",
    "skills-css": "Principios de diseño de web Responsive, CSS Flexbox/Grid.",
    "skills-bootstrap": "Desarrollo de layouts completos haciendo uso de bootstrap. Utilización de ng-bootstrap para combinar Angular con este framework.",
    "skills-js": "ECMAScript 6, Regex, Estructuras de Datos/Algoritmos, Programación Orientada a Objetos, Programación Funcional, Debugging y manipulación del DOM",
    "skills-angular": "Arquitectura de la aplicación, formularios reactivos y conocimientos en varias librerías de Angular.(Material, PrimeNg, ng2-file-upload, chartjs, etc).",
    "skills-react": "Conocimientos básicos de framework basado en componentes acompañados de un rápido aprendizaje por la experiencia obtenida en Angular.",
    "skills-java": "JSON Apis, Autenticación básica y a través de Tokens, manipulación de endpoints.",
    "skills-git": "",
    "skills-atlassian": "",
    "skills-php": "",
    "skills-sql": "",
    "skills-office" : "",
    "project-repository" : "Código fuente",
    "project-live" : "Ver en vivo",
    "project1" : "Reproductor de música Spotify API",
    "project1-desc" : "Proyecto en angular que, consumiendo la API de Spotify, permite realizar varias acciones relacionadas a la reproducción de música.",
    "projectAngular" : "Proyecto Angular",
    "projectAngular-desc": "Proyecto que ofrece un inicio de sesión con token, el cual obtiene cada vez que se inicia la página para mantener la sesión iniciada y autorizar al usuario.",
    "projectReact" : "Proyecto React MUI",
    "projectReact-desc" : "Pequeño feed de red social hecho en React armado completamente con MUI.",
    "projectBarber" : "Barbería",
    "projectBarber-desc" : "Pequeño proyecto sobre un sitio web para una barbería, hecho con HTML/CSS/JS.",
    "projectPHP": "Libro de documentación sobre PHP",
    "projectPHP-desc" : 'Sitio web conectado a una base de datos MySql totalmente hecho en PHP con CodeIgniter. Hosteado en 000webhostapp.',
    "projectPacman" : "Pacman en Java",
    "projectPacman-desc" : "Juego de Pacman hecho en Java utilizando Swing.",
    "projectWebApiNET" : "Web API usando .NET",
    "projectWebApiNET-desc" : "Api diseñada con un diseño MVC en .NET, usando SQL server. Testeada con Swagger.",
    "contact-information" : "Si estás interesado/a en hacerme cualquier pregunta o simplemente charlar sobre algún proyecto, ¡me encantaría que te comunicaras conmigo!",
    "phone" : "Teléfono",
    "curriculum" : "Curriculum",
    "copyright" : "Copyright \xa9 2022 - Fabian Lanocci"

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

  function toggleMenu() {
    navigation.classList.remove('active');
    main.classList.remove('active');
  }
 

