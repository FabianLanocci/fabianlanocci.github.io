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
    "stack-heading" : "Skills"
  };
  
  var WORDS_ES = {
    "home" : "Inicio",
    "about" : "Sobre mi",
    "portfolio" : "Portafolio",
    "contact" : "Contacto",
    "sub-heading" : "Analista de sistemas | Desarrollador Front-end",
    "about-description1" : "¡Hola! Soy estudiante de ultimo año en Instituto Argentino De La Empresa (IADE) - HILET, terminando Tecnicatura Superior en Sistemas (Analista de Sistemas).",
    "about-description2" : "He estado explorando/estudiando HTML, CSS, Javascript y algunos otros conceptos/lenguajes por mi mismo mientras terminaba la carrera y me di cuenta que me encanta el desarrollo en Front-end tanto como codear en .NET o Java asi que ahora estoy aqui para pegar el salto de la universidad a la industria de la tecnología.", 
    "stack-heading" : "Conocimientos"
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
    /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);        
    });
  }