const inputRangeElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

function onInputFontSize(event) {
  textElem.style.fontSize = event.currentTarget.value + "px";
}

inputRangeElem.addEventListener("input", onInputFontSize);