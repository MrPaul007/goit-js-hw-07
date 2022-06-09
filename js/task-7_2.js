const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const listEl = document.querySelector("#ingredients");

const makeMarkup = array => {
  return array.map(item => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    return itemEl;
  });
};

const finalMarkup = makeMarkup(ingredients);

listEl.append(...finalMarkup);
