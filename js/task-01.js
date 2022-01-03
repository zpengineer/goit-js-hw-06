// const listRef = document.querySelector('#categories');

// const itemEl = listRef.children;

// console.log(`Number of categories: ${itemEl.length}`);

// console.log('');

// for (const elem of itemEl) {
//     const titleRef = elem.firstElementChild;

//     console.log(`Category: ${titleRef.textContent}`);

//     const childCategoriesRef = elem.lastElementChild;
//     const childrenItemsElem = childCategoriesRef.children;
    
//     console.log(`Elements: ${childrenItemsElem.length}`);
//     console.log('');

// }


const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});

