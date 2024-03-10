let element = document.querySelectorAll(".atmosphere__images");
const right = document.querySelector(".button--type--scroll-right");
const left = document.querySelector(".button--type--scroll-left");
const show = "is-show-block";
const hidden = "is-hidden-block";
const blured = "is-blur-block";
const i = 0;
let counter = i;


right.addEventListener("click", function() {
  if (counter < 11) {
    counter = counter + 1;
    element[counter].classList.toggle(show);
    element[counter - 1].classList.remove(show);
    element[counter - 1].classList.add(hidden);
    element[counter].classList.remove(hidden);
    element[counter + 1].classList.remove(hidden);
    element[counter + 1].classList.add(blured);
    element[counter].classList.remove(blured);
  }

  else if (counter == 11) {
    element[counter].classList.add(show);
    element[counter].classList.remove(blured);
    element[counter].classList.remove(hidden);
  }

  if (counter < 9) {
    let page = {
      text: '0' + [counter + 1] + ' '
    };
    document.getElementsByClassName('atmosphere__page')[0].textContent = page.text;
  }

  else if (counter >= 9) {
    let page = {
      text: [counter + 1] + ' '
    };
    document.getElementsByClassName('atmosphere__page')[0].textContent = page.text;
  }
});

left.addEventListener("click", function() {
  if (counter > 0) {
    counter= counter - 1;
    element[counter].classList.remove(blured);
    element[counter].classList.remove(hidden);
    element[counter + 1].classList.remove(show);
    element[counter].classList.add(show);
    element[counter + 1].classList.add(blured);
    element[counter + 2].classList.remove(blured);
    element[counter + 2].classList.add(hidden);
    const page = {
      text: [counter + 1]
    };
    document.getElementsByClassName('atmosphere__page')[0].textContent = page.text;
  }

  else if (counter = 0) {
    console.log(counter);
  }

  if (counter < 9) {
    let page = {
      text: '0' + [counter + 1] + ' '
    };
    document.getElementsByClassName('atmosphere__page')[0].textContent = page.text;
  }

  else if (counter >= 9) {
    let page = {
      text: [counter + 1] + ' '
    };
    document.getElementsByClassName('atmosphere__page')[0].textContent = page.text;
  }
});
