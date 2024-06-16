import 'modern-normalize/modern-normalize.css';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

AOS.init({
  once: true,
});

function smoothScroll(target) {
  const anchor = document.querySelector(target);
  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

// start-mousemove-movement
document.addEventListener('mousemove', function (e) {
  const containers = document.querySelectorAll('.hero-back, .decor-bg');
  containers.forEach(container => {
    const moveX = -(e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = -(e.clientY / window.innerHeight - 0.5) * 10;
    container.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    // console.log(`Background position: calc(50% + ${moveX}px) calc(50% + ${moveY}px)`);
  });

  const contentImages = document.querySelectorAll('.benefits-decor-img');
  contentImages.forEach(image => {
    const moveX = -(e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = -(e.clientY / window.innerHeight - 0.5) * 20;
    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
