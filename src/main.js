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
