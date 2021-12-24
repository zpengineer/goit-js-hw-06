function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor);

const widgetRef = document.querySelector('.widget');
const colorTextRef = widgetRef.querySelector('.color');
const changeColorBtn = widgetRef.querySelector('.change-color');

changeColorBtn.addEventListener("click", () => {

  colorTextRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();

});
