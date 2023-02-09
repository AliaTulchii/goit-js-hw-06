const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
sizeControl.value = 20;

sizeControl.addEventListener('input', function () {
    const sizeValue = sizeControl.value;
    text.style.fontSize = sizeValue + "px";
})