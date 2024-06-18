const burgerOpen = document.querySelector('.switch-open-burger');
const burgerClose = document.querySelector('.switch-close-burger');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.header-nav');
export const body = document.body;
export const upLink = document.querySelector('.up-link');
const headerContainer = document.querySelector('.header');

const toggleHeaderBc = () => {
  if (headerContainer.getAttribute('class') != 'header') {
    headerContainer.classList.toggle('header-background');
  }
};

const toggleImage = e => {
  e.preventDefault();
  toggleHeaderBc();

  body.classList.toggle('toggle-scroll');
  document.documentElement.classList.toggle('toggle-scroll');
  burgerClose.classList.toggle('active-btn');
  burgerOpen.classList.toggle('active-btn');
  nav.classList.toggle('active-nav');
  if (
    body.classList.contains('toggle-scroll') &&
    upLink.classList.contains('up-link-active')
  ) {
    upLink.classList.remove('up-link-active');
  } else {
    updateScrollUpVisibility();
  }
};

const goToSection = e => {
  if (
    e.target.getAttribute('class') === 'nav-link hover' &&
    window.innerWidth < 768
  ) {
    toggleImage(e);
  }
};

const changeBc = () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > 100) {
    headerContainer.classList.remove('header-background');
  } else {
    headerContainer.classList.add('header-background');
  }
};

const updateScrollUpVisibility = () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > 1000) {
    upLink.classList.add('up-link-active');
  } else {
    upLink.classList.remove('up-link-active');
  }
};

burgerOpen.addEventListener('click', toggleImage);
burgerClose.addEventListener('click', toggleImage);
navList.addEventListener('click', goToSection);
document.addEventListener('scroll', changeBc);
window.addEventListener('scroll', updateScrollUpVisibility);
// document.addEventListener('scroll', updateScrollUpVisibility);
updateScrollUpVisibility();
