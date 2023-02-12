function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');


create.addEventListener('click', createBoxes);

let newDivs = 0;
function createBoxes(amount) {
  newDivs = parseInt(document.querySelector('#controls input').value)
  for (let amount = 0; amount < newDivs; amount += 1) {
   let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.style.width = `(20 + ${amount} * 10) + 'px'` ;
    newDiv.style.height = `(20 + ${amount} * 10) + 'px'`;
    newDiv.style.backgroundColor = getRandomHexColor();
    
   
  }
  let divs = divs.push(newDiv[amount]);
  boxes.append(...divs);
 
  

  
 
}

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes(amount) {
 let deleteDiv = document.querySelector(".new-div");
deleteDiv.parentNode.removeChild(deleteDiv);
}







