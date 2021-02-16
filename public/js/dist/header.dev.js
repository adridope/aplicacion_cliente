"use strict";

/* NAV HEMBURGUESA */
var iconMenu = document.getElementById('nav-button');
var menu = document.getElementById('main-menu');
iconMenu.addEventListener('click', function (e) {
  $("#main-menu").slideToggle();
  menu.classList.toggle('active');
  iconMenu.classList.toggle('active');
});
window.addEventListener("resize", responsiveNav);

function responsiveNav() {
  if (window.innerWidth >= 991) {
    menu.removeAttribute("style");
    menu.classList.remove('active');
    iconMenu.classList.remove('active');
  }
}