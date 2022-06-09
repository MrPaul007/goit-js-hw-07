const inputControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputControler);

inputControler.addEventListener("input", makeFontSize);

function makeFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
