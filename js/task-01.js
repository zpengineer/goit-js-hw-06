const listRef = document.querySelector('#categories');

const itemEl = listRef.children;

console.log(`Number of categories: ${itemEl.length}`);

console.log('');

for (const elem of itemEl) {
    const titleRef = elem.firstElementChild;

    console.log(`Category: ${titleRef.textContent}`);

    const childCategoriesRef = elem.lastElementChild;
    const childrenItemsElem = childCategoriesRef.children;
    
    console.log(`Elements: ${childrenItemsElem.length}`);
    console.log('');

}




