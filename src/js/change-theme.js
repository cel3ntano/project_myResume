const switcher = document.querySelector('.theme-btn');
const switchThem = document.querySelector('.switch-theme');
const body = document.body;

const toggleBodyClass = () => {
  body.classList.toggle('dark-theme');
};

const toggleSwitcherClass = () => {
  switchThem.classList.toggle('edit-circle');
};

document.addEventListener('DOMContentLoaded', () => {
  const statusThem = localStorage.getItem('statusThem');

  if (statusThem === 'true') {
    switcher.checked = true;
    toggleSwitcherClass();
    toggleBodyClass();
  }
});

const changeThem = () => {
  toggleSwitcherClass();
  toggleBodyClass();

  const statusThem = switchThem.classList.length > 1;
  localStorage.setItem('statusThem', statusThem);
};

switcher.addEventListener('change', changeThem);
