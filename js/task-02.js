const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.forEach(function (ingredient) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  const list = document.querySelector('#ingredients');
list.append(item);
})

