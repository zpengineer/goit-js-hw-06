const inputRef = document.querySelector('#validation-input');
const dataLenAttr = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener("blur", () => {
    const inputLen = inputRef.value.length;

    for (let i = 0; i <= inputLen; i += 1) {

        if (inputLen === dataLenAttr) {
            inputRef.classList.remove('invalid');
            inputRef.classList.add('valid');
        } else {
            inputRef.classList.remove('valid');
            inputRef.classList.add('invalid');
        }
    }
});


