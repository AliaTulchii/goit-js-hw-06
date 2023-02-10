const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", (event) => {
    textInput.textContent = event.currentTarget.value;
    if (textInput.value.length === 6) {
        textInput.classList.add("valid");
        textInput.classList.replace("invalid", "valid");
        
       
               

    } else if (textInput.value.length !== 6) {
        textInput.classList.add("invalid");        
        textInput.classList.replace("valid", "invalid");
        
       
    } 
    

    
    
});






