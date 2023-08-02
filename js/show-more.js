const showMore = document.querySelector('.show-more');
const productsLenght = document.querySelectorAll('.portfolio__flex').length;
let items = 1;


showMore.addEventListener('click', () => {
    items += 1; /*сколько товара добавить надо*/
    const arrey = Array.from(document.querySelector('.spisok').children);
    const visItems = arrey.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'))

    if (visItems.length === productsLenght) {
        showMore.style.display = 'none';
    }
})











