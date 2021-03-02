const validInputElem = document.querySelector("#validation-input");

validInputElem.addEventListener("blur", onInputValueCheck);
const validBtnClassList = validInputElem.classList;

function onInputValueCheck(event) {
    if (
      validInputElem.value.length === Number(validInputElem.dataset.length)) {
      validBtnClassList.add("valid");
      validBtnClassList.remove("invalid");
    } else {
      validBtnClassList.add("invalid");
      validBtnClassList.remove("valid");
    }
  }