const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", (event) => {
    textInput.textContent = event.currentTarget.value;
    if (textInput.value.length === 6) {
        textInput.classList.toggle("invalid");
        textInput.classList.toggle("invalid");
        textInput.classList.add("valid");
    } else if (textInput.value.length < 6 || textInput.value.length > 6 ) {
        textInput.classList.toggle("invalid");
        
    }
    
});






