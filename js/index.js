import Home from "./game.module.js";


window.addEventListener("scroll", ()=>{
    let nav = document.querySelector(".nav");
    let scrollvalue = window.scrollY;
    if (scrollvalue >= 500){
        nav.classList.add('scrolled');
        nav.classList.remove('notScroll');
    } else{
        nav.classList.remove('scrolled');
        nav.classList.add('notScroll');
    }
});


new Home();