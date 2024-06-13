const burgerOpen = document.querySelector('.switch-open-burger');
const burgerClose = document.querySelector('.switch-close-burger');
const nav = document.querySelector('.header-nav');

const toggleImage = e => {
  e.preventDefault();

  burgerClose.classList.toggle('active-btn');
  burgerOpen.classList.toggle('active-btn');
  nav.classList.toggle('active-nav');
};

burgerOpen.addEventListener('click', toggleImage);
burgerClose.addEventListener('click', toggleImage);
