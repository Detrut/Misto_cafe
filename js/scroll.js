const down = document.querySelector(".footer");
const scroll_down = document.querySelector(".button--type--scroll-down");
const up = document.querySelector(".header");
const scroll_up = document.querySelector(".button--type--scroll-up");

scroll_down.addEventListener("click", function() {
  down.scrollIntoView({behavior: "smooth"});
});

scroll_up.addEventListener("click", function() {
  up.scrollIntoView({behavior: "smooth"});
});
