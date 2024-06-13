const burger = document.querySelector('.switch-burger');
const svgUse = document.querySelector('.inform-item-icon');
const nav = document.querySelector('.header-nav');

const openBurger = '../img/icons.svg#icon-open-burger';
const closeBurger = '../img/icons.svg#icon-close-burger';

const toggleImage = e => {
  e.preventDefault();

  if (svgUse.getAttribute('href') === openBurger) {
    nav.style.display = 'flex';
    return svgUse.setAttribute('href', closeBurger);
  }

  nav.style.display = 'none';
  svgUse.setAttribute('href', openBurger);
};

burger.addEventListener('click', toggleImage);

