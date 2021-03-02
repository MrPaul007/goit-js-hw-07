let counterValue = 0;
const incrementBtnElem = document.querySelector('[data-action="increment"]');
const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const valueElem = document.querySelector("#value");

function onIncrementClick(event) {
    counterValue += 1;
    valueElem.textContent = counterValue;
};
  
function onDecrementClick(event) {
    counterValue -= 1;
    valueElem.textContent = counterValue;
};

incrementBtnElem.addEventListener("click", onIncrementClick);
decrementBtnElem.addEventListener("click", onDecrementClick);