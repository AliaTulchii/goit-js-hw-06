function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('#controls input');
let boxes = document.querySelector('#boxes');
let newDiv = document.createElement('div');



function createBoxes(amount) {
 


}

function createDiv ()
  {
  var boxEle = document.createElement('div');
  var container = document.querySelector('.app');
  boxEle.style.width = "100px";
  boxEle.style.height = "100px";
  boxEle.style.backgroundColor = '#f00';
  container.appendChild(boxEle);
  }





// <div id="controls">
//       <input type="number" min="1" max="100" step="1" />
//       <button type="button" data-create>Create</button>
//       <button type="button" data-destroy>Destroy</button>
//     </div>

//     <div id="boxes"></div>