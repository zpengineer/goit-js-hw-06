const inputTextRef = document.querySelector('#name-input');
const spanOutputRef = document.querySelector('#name-output');

inputTextRef.addEventListener("input", (event) => {

    inputTextRef.value === '' ? spanOutputRef.textContent = "Anonymous" : spanOutputRef.textContent = event.currentTarget.value;

    // if (inputTextRef.value === '') {
    //     return spanOutputRef.textContent = "Anonymous";
    // }
    // spanOutputRef.textContent = event.currentTarget.value;
     
});


