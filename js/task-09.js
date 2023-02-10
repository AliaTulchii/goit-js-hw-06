function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorDiffer = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', function onClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorDiffer.textContent = color;

});