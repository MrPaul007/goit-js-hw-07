const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории.`);

const render = element => {
  element.forEach(item =>
    console.log(`Категория: ${item.querySelector("h2").textContent}
    Количество элементов: ${item.querySelectorAll("li").length}`)
  );
};

render(itemsEl);
