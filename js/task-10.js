function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');
const createBtn = controlsRef.querySelector('[data-create]');
const destroyBtn = controlsRef.querySelector('[data-destroy]');
const inputRef = controlsRef.querySelector('[type="number"]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener("click", result);
destroyBtn.addEventListener("click", destroyBoxes);

function result() {
  let amount = Number(inputRef.value);
  // console.log(amount);
  createBoxes(amount);
}


function createBoxes(amount) {
  console.log(amount);
  let arrowAmount = [];
  let boxSizes = 30;

  for (let i = 0; i < amount; i += 1){

    boxSizes = i >= 1 ? boxSizes + 10 : boxSizes;

    let row = document.createElement('div');
    row.style.cssText = `width: ${boxSizes}px; height: ${boxSizes}px;  background-color: ${getRandomHexColor()};`;

    arrowAmount.push(row);

    console.log(arrowAmount);
  }

  const createItems = arrowAmount
  .map((item) => item.outerHTML)
  .join("");

  // console.log(result);
  boxesRef.innerHTML = createItems;
  
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}




