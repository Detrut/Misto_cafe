let selecter = document.querySelectorAll(".favorit__cards");
const button_napit = document.querySelectorAll(".button--type--select")[0];
const button_decert = document.querySelectorAll(".button--type--select")[1];
let select_button = document.querySelectorAll(".button--type--select");
const select_show = "is-show";
const select_hidden = "is-hidden";
const button_active = "is-active"


button_napit.addEventListener("click", function() {
  selecter[0].classList.add(select_show);
  selecter[0].classList.remove(select_hidden);
  selecter[1].classList.add(select_hidden);
  selecter[1].classList.remove(select_show);
  select_button[0].classList.add(button_active);
  select_button[1].classList.remove(button_active);
});

button_decert.addEventListener('click', function () {
  selecter[1].classList.add(select_show);
  selecter[1].classList.remove(select_hidden);
  selecter[0].classList.remove(select_show);
  selecter[0].classList.add(select_hidden);
  select_button[1].classList.add(button_active);
  select_button[0].classList.remove(button_active);
});
