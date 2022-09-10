const nav = document.getElementsByTagName(`nav`)[0];
const hamburgerMenu = document.querySelector('.hamburgerMenu')
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const closeMenuBtn = document.querySelector('.fa-xmark');
const showMenu = document.querySelector('.showMenu');
let menu = document.getElementsByClassName(`menu`);
let slideBar = document.getElementsByClassName('slideBar')[0];
let section = document.getElementsByTagName("section");
// let moveSlidebarWithClick = (event)=>{
    
//     slideBar.style.width = event.target.offsetWidth + 'px';
//     slideBar.style.left = event.target.offsetLeft + 'px';
// }
let moveSlidebar = (event)=>{
    
    slideBar.style.width = event.offsetWidth + 'px';
    slideBar.style.left = event.offsetLeft + 'px';
}
window.addEventListener(`scroll`, () => {
    if (window.scrollY > 200) {
        nav.classList.add(`scrollNav`)
    } if(window.scrollY < 200) {
        nav.classList.remove(`scrollNav`)
    } if(window.scrollY > parseInt(getComputedStyle(section[0]).height)){
        moveSlidebar(menu[1])
    } if (window.scrollY < parseInt(getComputedStyle(section[0]).height)) {
        moveSlidebar(menu[0])
    } if(window.scrollY >parseInt(getComputedStyle(section[0]).height)+ parseInt(getComputedStyle(section[1]).height)){
        moveSlidebar(menu[2])
    } if(window.scrollY >parseInt(getComputedStyle(section[0]).height)+ parseInt(getComputedStyle(section[1]).height)+ parseInt(getComputedStyle(section[2]).height)){
        moveSlidebar(menu[3])
    } if(window.scrollY >parseInt(getComputedStyle(section[0]).height)+ parseInt(getComputedStyle(section[1]).height)+ parseInt(getComputedStyle(section[2]).height) + parseInt(getComputedStyle(section[3]).height)){
        moveSlidebar(menu[4])
    }
});
hamburgerMenu.addEventListener("click",()=>{
    if (!hamburgerMenu.classList.contains("isOpened")) {
        line1.classList.add("plusDeg");
        line2.classList.add("hide");
        line3.classList.add("minusDeg");
        hamburgerMenu.classList.add("isOpened")
        showMenu.classList.add('show');
    }else {
        line1.classList.remove("plusDeg");
        line2.classList.remove("hide");
        line3.classList.remove("minusDeg");
        hamburgerMenu.classList.remove("isOpened")
        showMenu.classList.remove('show');
    }
    
})
closeMenuBtn.addEventListener('click',()=>{
        line1.classList.remove("plusDeg");
        line2.classList.remove("hide");
        line3.classList.remove("minusDeg");
        hamburgerMenu.classList.remove("isOpened")
        showMenu.classList.remove('show');
});

// for (let i = 0; i < menu.length; i++) {
//     menu[i].id=`${i}`;
//     // menu[i].addEventListener("click",moveSlidebarWithClick)
//     if (i === 0){
//         slideBar.style.width = menu[i].offsetWidth + 'px'
//     }
// }
