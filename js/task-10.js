function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');


create.addEventListener('click', createBoxes);


function createBoxes(amount) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('new-div');
  newDiv.style.width = "30px";
  newDiv.style.height = "30px";
  newDiv.style.backgroundColor = getRandomHexColor();
  boxes.appendChild(newDiv);
}

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes(amount) {
 let deleteDiv = document.querySelector(".new-div");
deleteDiv.parentNode.removeChild(deleteDiv);
}







