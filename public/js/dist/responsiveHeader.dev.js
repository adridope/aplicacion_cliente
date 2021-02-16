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
} //<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>