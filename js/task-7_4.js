const counterEl = document.querySelector("#counter");
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

function makePlus() {
  valueEl.textContent = Number(valueEl.textContent) + 1;
}

function makeMinus() {
  valueEl.textContent = Number(valueEl.textContent) - 1;
}

buttonIncrementEl.addEventListener("click", makePlus);
buttonDecrementEl.addEventListener("click", makeMinus);
