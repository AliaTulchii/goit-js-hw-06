const ulCategoriesEl = document.querySelectorAll('.item');

const numberOfCategories = ulCategoriesEl.length;
console.log('Number of categorie:', numberOfCategories);

const elements = ulCategoriesEl.forEach(function (element) {
    console.log('Categories:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
})

















