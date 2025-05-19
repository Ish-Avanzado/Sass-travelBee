const burger = document.querySelector(".burger__menu");
const hNav1 = document.querySelector(".header__nav1");
const hNav2 = document.querySelector(".header__nav2");
burger.addEventListener("click",  ()  => {
    burger.classList.toggle(".open");
    hNav1.classList.toggle(".open");
    hNav2.classList.toggle(".open");
})