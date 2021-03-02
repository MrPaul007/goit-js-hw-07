const inputElem = document.querySelector('#name-input');
const nameOutputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", onNameOutput);

function onNameOutput(event) {
    if (event.currentTarget.value !== ``) {
        nameOutputElem.textContent = event.currentTarget.value;
    } else {
        nameOutputElem.textContent = "Незнакомец";
    }
}