const inputEl = document.querySelector("input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const motherBox = document.querySelector("#boxes");

inputEl.addEventListener("input", getAmount);
renderBtn.addEventListener("click", makeRender);
destroyBtn.addEventListener("click", makeClearBox);

let divAmount = 0;
let itemSize = 20;
let divArray = [];

function getAmount(event) {
  divAmount = event.currentTarget.value;
}

function makeRender() {
  for (let i = 0; i < divAmount; i += 1) {
    let itemMarkup = document.createElement("div");
    itemSize += 10;
    itemMarkup.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    itemMarkup.style.height = `${itemSize}px`;
    itemMarkup.style.width = `${itemSize}px`;
    itemMarkup.style.margin = "10px";

    divArray.push(itemMarkup);
  }
  motherBox.append(...divArray);
}

function makeClearBox() {
  motherBox.innerHTML = "";
}
