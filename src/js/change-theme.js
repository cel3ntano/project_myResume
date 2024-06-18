const switcher = document.querySelector('.theme-btn');
const switchThem = document.querySelector('.switch-theme');
const body = document.body;
const changeElems = document.querySelectorAll('.change-them');

const togglePoints = () => {
  changeElems.forEach(item => item.classList.toggle('change-them'));
};

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
    togglePoints();
  }
});

const changeThem = () => {
  toggleSwitcherClass();
  toggleBodyClass();
  togglePoints();

  const statusThem = switchThem.classList.length > 1;
  localStorage.setItem('statusThem', statusThem);
};

switcher.addEventListener('change', changeThem);
