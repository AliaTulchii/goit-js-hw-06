const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", (event) => {
    textInput.textContent = event.currentTarget.value;
    if (textInput.value.length === 6) {
        textInput.classList.toggle("valid");
        textInput.classList.toggle("invalid");     
       
               

    } else if (textInput.value.length !== 6 ) {
        textInput.classList.toggle("invalid");
        
       
    }  

   
    
});






