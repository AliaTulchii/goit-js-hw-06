const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const title = `<h2 class="title">Lovely pets</h2>`;


const markup = images
  .map((image) => `<li class="list-item item-decor">
  <img class = "list-img"  src="${image.url} alt="${image.alt}" width="300" height = "200">
  </li>`)
  .join("");


const list = document.querySelector(".gallery");
list.classList.add("gallery-decor");



list.insertAdjacentHTML("afterbegin", markup);
list.insertAdjacentHTML("beforebegin", title);
