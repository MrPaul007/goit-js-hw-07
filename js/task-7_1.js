const CategoriesElem = document.querySelectorAll(".item");
console.log(`В списке ${CategoriesElem.length} категории.`);

const itemElem = document.querySelectorAll(".item");

const category = (array) => {
    array.forEach((element) => {
        const title = element.querySelector("h2");
        const itemLi = element.querySelectorAll("li");
        console.log(`Категория: ${title.textContent}
        Количество элементов: ${itemLi.length}`);
    });
};
category(itemElem);