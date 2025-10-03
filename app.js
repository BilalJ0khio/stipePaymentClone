var hamburg = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation-container");

hamburg.addEventListener("click", () => {
  nav.classList.toggle("nav-visibility");
});
