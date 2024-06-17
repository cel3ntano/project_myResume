import image1 from '../img/projects/wallet-webservice.jpg';
import image1_x2 from '../img/projects/wallet-webservice-2x.jpg';
import image2 from '../img/projects/green-harvest.jpg';
import image2_x2 from '../img/projects/green-harvest-2x.jpg';
import image3 from '../img/projects/english-excellence.jpg';
import image3_x2 from '../img/projects/english-excellence-2x.jpg';
import image4 from '../img/projects/power-pulse.jpg';
import image4_x2 from '../img/projects/power-pulse-2x.jpg';
import image5 from '../img/projects/vyshyvanka-vibes.jpg';
import image5_x2 from '../img/projects/vyshyvanka-vibes-2x.jpg';
import image6 from '../img/projects/energy-flow.jpg';
import image6_x2 from '../img/projects/energy-flow-2x.jpg';
import image7 from '../img/projects/mimino.jpg';
import image7_x2 from '../img/projects/mimino-2x.jpg';
import image8 from '../img/projects/chego-jewelry.jpg';
import image8_x2 from '../img/projects/chego-jewelry-2x.jpg';
import image9 from '../img/projects/fruitbox.jpg';
import image9_x2 from '../img/projects/fruitbox-2x.jpg';
import image10 from '../img/projects/starlight-studio.jpg';
import image10_x2 from '../img/projects/starlight-studio-2x.jpg';

import spriteSvg from '../img/icons.svg';

const projects = [
  {
    imgSrc: image1,
    imgSrcSet: `${image1} 1x, ${image1_x2} 2x`,
    alt: 'Wallet Webservice',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'wallet webservice',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image2,
    imgSrcSet: `${image2} 1x, ${image2_x2} 2x`,
    alt: 'Green Harvest Webservice',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'green harvest webservice',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image3,
    imgSrcSet: `${image3} 1x, ${image3_x2} 2x`,
    alt: 'English Excellence Webservice',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'english excellence website',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image4,
    imgSrcSet: `${image4} 1x, ${image4_x2} 2x`,
    alt: 'Power Pulse Webservice',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image5,
    imgSrcSet: `${image5} 1x, ${image5_x2} 2x`,
    alt: 'Vyshyvanka Vibes Landing Page',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes landing page',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image6,
    imgSrcSet: `${image6} 1x, ${image6_x2} 2x`,
    alt: 'Energy Flow Webservice',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image7,
    imgSrcSet: `${image7} 1x, ${image7_x2} 2x`,
    alt: 'Mimino Website',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image8,
    imgSrcSet: `${image8} 1x, ${image8_x2} 2x`,
    alt: 'Chego Jewelry Website',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image9,
    imgSrcSet: `${image9} 1x, ${image9_x2} 2x`,
    alt: 'Fruitbox Online Store',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
  {
    imgSrc: image10,
    imgSrcSet: `${image10} 1x, ${image10_x2} 2x`,
    alt: 'Starlight Studio Landing Page',
    tech: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
    link: 'https://github.com/cel3ntano/project_myResume',
  },
];

const projectList = document.querySelector('.projects-list');
const loadMoreBtn = document.querySelector('.project-btn');

loadMoreBtn.addEventListener('click', loadProjects);

let currentIndex = 0;
const itemsLoad = 3;

function loadProjects() {
  const start = currentIndex * itemsLoad;
  const end = start + itemsLoad;
  const projectsToLoad = projects.slice(start, end);

  const markup = projectsToLoad
    .map(
      ({ imgSrc, imgSrcSet, alt, tech, title, link }) => `
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${imgSrcSet}"
        src="${imgSrc}"
        alt="${alt}"
      />
      <p class="project-text">${tech}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${title}</h3>
        </div>
        <div class="project-link-wrap">
            <a
              class="project-link"
              href="${link}"
              target="_blank"
              rel="noopener noreferrer"
              >VISIT
              <svg width="24" height="24">
                <use href="${spriteSvg}#icon-arrow-project"></use>
              </svg>
            </a>
          </div>
      </div>
    </li>
  `
    )
    .join('');

  projectList.insertAdjacentHTML('beforeend', markup);
  const projectCard = document.querySelector('.projects-item');
  const cardHeight = projectCard.getBoundingClientRect().height;
  window.scrollBy({
    left: 0,
    top: cardHeight * 0.5,
    behavior: 'smooth',
  });

  currentIndex++;

  if (currentIndex * itemsLoad >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadProjects();
