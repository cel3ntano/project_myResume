const burgerOpen = document.querySelector('.switch-open-burger');
const burgerClose = document.querySelector('.switch-close-burger');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.header-nav');
export const body = document.body;
export const upLink = document.querySelector('.section-up-link');
const headerContainer = document.querySelector('.header > .container');

const toggleHeaderBc = () => {
  if (headerContainer.getAttribute('class') != 'container') {
    headerContainer.classList.toggle('header-background');
  }
};

const toggleImage = e => {
  e.preventDefault();
  toggleHeaderBc();
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

const changeBc = () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > 350) {
    headerContainer.classList.remove('header-background');
    upLink.style.display = 'block';
  } else {
    headerContainer.classList.add('header-background');
    upLink.style.display = 'none';
  }
};

burgerOpen.addEventListener('click', toggleImage);
burgerClose.addEventListener('click', toggleImage);
navList.addEventListener('click', goToSection);

document.addEventListener('scroll', changeBc);
