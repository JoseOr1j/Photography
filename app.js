const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelector("a");

burger.addEventListener("click", () => 
{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

//Shift+Alt+F