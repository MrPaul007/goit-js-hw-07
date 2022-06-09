const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

function changeName(event) {
  if (event.currentTarget.value !== ``) {
    nameEl.textContent = event.currentTarget.value;
  } else {
    nameEl.textContent = "Незнакомец";
  }
}

inputEl.addEventListener("input", changeName);
