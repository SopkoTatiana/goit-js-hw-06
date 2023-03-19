const ingredients1 = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const setIngredients = ingredients => {
  const list = document.querySelector('#ingredients');

  const newElements = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    return itemEl;
  });

  list.append(...newElements);
};

setIngredients(ingredients1);
