const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// textRef.innerHTML=inputRef.value;
// textRef.style.size = inputRef.value+'px';



inputRef.addEventListener("input", () => {
    textRef.style.fontSize = inputRef.value+'px';
});