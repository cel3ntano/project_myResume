const pgf = document.querySelector('.hidden-text');
const button = document.querySelector('.load-more-button');

document.addEventListener('DOMContentLoaded', e => {
  pgf.style.display = 'none';
});

button.addEventListener('click', () => {
  if (pgf.style.display === 'none') {
    pgf.style.display = 'block';
    button.textContent = 'Chow less';
  } else if (pgf.style.display === 'block') {
    pgf.style.display = 'none';
    button.textContent = 'Load more';
  }
});
