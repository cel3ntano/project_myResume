const projectList = document.querySelector('.projects-list');
const projectsItems = document.querySelectorAll('.projects-item');
const projectsBtn = document.querySelector('.project-btn');

projectsBtn.addEventListener('click', loadProjects);

let currentIndex = 0;
const itemsLoad = 3;

function loadProjects() {
  for (let i = 0; i < itemsLoad; i++) {
    if (currentIndex >= projectsItems.length) {
      projectsBtn.style.display = 'none';
      break;
    }
    projectsItems[currentIndex].classList.remove('is-hidden');
    currentIndex++;
  }
}

loadProjects();
