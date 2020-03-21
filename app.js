const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelector("a");

burger.addEventListener("click", () => 
{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

//Shift+Alt+F

// project 7 elena website
// project 8 to make a "virus example"