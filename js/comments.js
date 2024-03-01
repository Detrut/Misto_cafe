let comment = document.querySelectorAll(".clients__comment");
const right_com = document.querySelectorAll(".button--type--scroll-right")[1];
const left_com = document.querySelectorAll(".button--type--scroll-left")[1];
const show_com = "is-show-block";
const hidden_com = "is-hidden-block";
const blured_com = "is-blur-block";
const j = 0;
let counter_com = j;


right_com.addEventListener("click", function() {
  if (counter_com < 3) {
    counter_com = counter_com + 1;
    comment[counter_com].classList.toggle(show);
    comment[counter_com - 1].classList.remove(show);
    comment[counter_com - 1].classList.add(hidden);
    comment[counter_com].classList.remove(hidden);
    comment[counter_com + 1].classList.remove(hidden);
    comment[counter_com + 1].classList.add(blured);
    comment[counter_com].classList.remove(blured);
  }

  else if (counter_com == 4) {
    comment[counter_com].classList.add(show);
    comment[counter_com].classList.remove(blured);
    comment[counter_com].classList.remove(hidden);
  }

  if (counter_com < 4) {
    let page = {
      text: '0' + [counter_com + 1] + ' '
    };
    document.getElementsByClassName('clients__page')[0].textContent = page.text;
  }
});

left_com.addEventListener("click", function() {
  if (counter_com > 0) {
    counter_com= counter_com - 1;
    comment[counter_com].classList.remove(blured);
    comment[counter_com].classList.remove(hidden);
    comment[counter_com + 1].classList.remove(show);
    comment[counter_com].classList.add(show);
    comment[counter_com + 1].classList.add(blured);
    comment[counter_com + 2].classList.remove(blured);
    comment[counter_com + 2].classList.add(hidden);
    const page = {
      text: [counter_com + 1]
    };
    document.getElementsByClassName('clients__page')[0].textContent = page.text;
  }

  else if (counter_com = 0) {
    console.log(counter_com);
  }

  if (counter_com < 4) {
    let page = {
      text: '0' + [counter_com + 1] + ' '
    };
    document.getElementsByClassName('clients__page')[0].textContent = page.text;
  }
});
