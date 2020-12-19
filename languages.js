var LanguageList = {
    "EN" : "English",
    "ES" : "Español",
  };
  
  //languages Objects
  var WORDS_EN = {
    "link-home" : "Home",
    "link-about" : "About me",
    "link-portfolio" : "Portfolio",
    "link-contact" : "Contact"
  };
  
  var WORDS_ES = {
    "link-home" : "Inicio",
    "link-about" : "Sobre mi",
    "link-portfolio" : "Portafolio",
    "link-contact" : "Contacto"
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