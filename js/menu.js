const menu = document.querySelector('.menu');
const menu_show = document.querySelector('.button--type--show')
const menu_active = "menu__active";
const menu_close = document.querySelector('.button--type--close');

menu_show.addEventListener("click", function() {
  menu.classList.toggle(menu_active);
});

menu_close.addEventListener("click", function() {
  menu.classList.toggle(menu_active);
});
