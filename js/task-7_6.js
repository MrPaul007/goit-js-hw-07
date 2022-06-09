// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("change", checkInput);

function checkInput(event) {
  const correctLength = Number(inputEl.getAttribute("data-length"));
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  } else if (event.currentTarget.value.length === correctLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
console.log(inputEl.getAttribute("data-length"));
