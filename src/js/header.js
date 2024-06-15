const burgerOpen = document.querySelector('.switch-open-burger');
const burgerClose = document.querySelector('.switch-close-burger');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.header-nav');
const body = document.body;
const upLink = document.querySelector('.up-link');

const toggleImage = e => {
  e.preventDefault();

  upLink.classList.toggle('up-link-active');
  body.classList.toggle('toggle-scroll');
  burgerClose.classList.toggle('active-btn');
  burgerOpen.classList.toggle('active-btn');
  nav.classList.toggle('active-nav');
};

const goToSection = e => {
  if (
    e.target.getAttribute('class') === 'nav-link' &&
    window.innerWidth < 768
  ) {
    toggleImage(e);
  }
};

burgerOpen.addEventListener('click', toggleImage);
burgerClose.addEventListener('click', toggleImage);
navList.addEventListener('click', goToSection);
