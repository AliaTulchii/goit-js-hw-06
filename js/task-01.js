const ulCategoriesEl = document.querySelectorAll('.item');

const numberOfCategories = ulCategoriesEl.length;
console.log('Number of categorie:', numberOfCategories);

const categEl = document.querySelectorAll('li.item h2');
const quantityCategEl = document.querySelectorAll('li.item ul');



console.log('Categories:', categEl[0].textContent);
console.log('Elements:', quantityCategEl[0].getElementsByTagName('li').length);

console.log('Categories:', categEl[1].textContent);
console.log('Elements:', quantityCategEl[1].getElementsByTagName('li').length);


console.log('Categories:', categEl[2].textContent);
console.log('Elements:', quantityCategEl[2].getElementsByTagName('li').length);














