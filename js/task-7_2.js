const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const list = ingredients.map((ingredient) => {
      const itemElem = document.createElement("li");
      itemElem.textContent = ingredient;
      return itemElem;
  });

  const ingredientsElem = document.querySelector("#ingredients");
  ingredientsElem.append(...list);