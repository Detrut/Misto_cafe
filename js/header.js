const header = document.querySelector(".header__menu");
const link = document.querySelectorAll(".link--type--header");
const button = document.querySelector(".button--type--show");
const toggleClass = "header--type--sticky";
const toggleText = "is-colored";
const toggleColor = "is-colored-button";

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll >= 720) {
    header.classList.add(toggleClass);
    button.classList.add(toggleColor);
    link.forEach((link) => {
      link.classList.add(toggleText);
    });

  } else {
    header.classList.remove(toggleClass);
    link.forEach((link) => {
      link.classList.remove(toggleText);
    });
    button.classList.remove(toggleColor);
  }
});
