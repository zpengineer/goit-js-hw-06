const containerRef = document.querySelector("#counter");
const textValueRef = containerRef.querySelector("#value");

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const step = 1;

decrementBtnRef.addEventListener("click", decrementFunc);
incrementBtnRef.addEventListener("click", incrementFunc);


function decrementFunc() {
    if (counterValue > 0) {
        counterValue -= step;
        textValueRef.innerHTML = counterValue;
    }
}
    
function incrementFunc() {
    counterValue += step;
    textValueRef.innerHTML = counterValue;
}