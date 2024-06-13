const burgerOpen = document.querySelector('.switch-open-burger');
const burgerClose = document.querySelector('.switch-close-burger');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.header-nav');

const toggleImage = e => {
  e.preventDefault();

  burgerClose.classList.toggle('active-btn');
  burgerOpen.classList.toggle('active-btn');
  nav.classList.toggle('active-nav');
};

const goToSection = e => {
  if (e.target.getAttribute('class') === 'nav-link') {
    toggleImage(e);
  }
};

burgerOpen.addEventListener('click', toggleImage);
burgerClose.addEventListener('click', toggleImage);
navList.addEventListener('click', goToSection);
