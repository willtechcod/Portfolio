/* abre e fecha menu lateral*/ 

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active")
});

/* fecha o menu quando clica em algum item e muda o icone para list */ 

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    });
});

/* Animar todos items da tela que estiver atributo data-anime */

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.65;
    item.forEach(element => {
        if(windowTop > element.offsetTop){
           element.classList.add("animate"); 
        } else{
           element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=> {
    animeScroll();
})