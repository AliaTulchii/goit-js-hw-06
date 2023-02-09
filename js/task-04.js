const display = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let value = 0;

incrementBtn.addEventListener('click', increment);

function increment() {
  value += 1;
  display.textContent = value;
}


decrementBtn.addEventListener('click', decrement);


function decrement() {
  value -= 1;
  display.textContent = value;
}
