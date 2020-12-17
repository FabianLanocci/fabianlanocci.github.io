var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    eng: {
        link1nav: "Home",
        link2nav: "About me",
        link3nav: "Portfolio",
        link4nav: "Contact me"
    },
    es: {
        link1nav: "Inicio",
        link2nav: "Sobre mi",
        link3nav: "Portafolio",
        link4nav: "Contáctame"
    }
};

if(window.location.hash){
    if(windows.location.hash === "#es"){
        document.getElementById(link-home) = language.es.link1nav;
    }
}