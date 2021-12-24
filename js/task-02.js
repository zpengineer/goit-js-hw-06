const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients');

const ingredItemsRef = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listRef.innerHTML = ingredItemsRef;

