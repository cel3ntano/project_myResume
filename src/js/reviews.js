import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { data } from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function getData() {
  try {
    const res = await axios.get('/reviews');
    return res.data;
  } catch (error) {
    throw new Error('Not found');
  }
}

const btnPrev = document.querySelector('.reviews__arrow-left');
const btnNext = document.querySelector('.reviews__arrow-right');
const reviewsList = document.querySelector('.reviews__list');

async function getReviews() {
  try {
    const data = await getData();
    console.log(data);
    renderReviews(data);
  } catch (error) {
    renderReviews([]);
  }
}
getReviews();

function renderReviews(reviews) {
  if (reviews.length === 0) {
    reviewsList.innerHTML = '<p class="non_info">Not found</p>';
    return;
  }

  const markup = reviews
    .map(review => {
      return `<li class="reviews__item swiper-slide">
      <div class= reviews__card__container>
       <p class="reviews__descr">${review.review}</p>
       <div class="reviews__person">
        <img
          width="48"
          class="reviews__img"
          src="${review.avatar_url}"
          alt="${review.author}"
         />
       <h3 class="reviews__h3">${review.author}</h3>
       <div class="reviews__stars">
        <svg width="16" height="16">
          <use class="star__icon" href="../img/icons.svg#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="../img/icons.svg#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="../img/icons.svg#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="../img/icons.svg#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="../img/icons.svg#icon-star"></use>
        </svg>
      </div>
       </div>
      </div>
    </li>`;
    })
    .join('');
  reviewsList.insertAdjacentHTML('beforeend', markup);
}

const swiper = new Swiper('.reviews__swiper', {
  modules: [Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 400,
  spaceBetween: 100,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

btnPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

btnNext.addEventListener('click', () => {
  swiper.slideNext();
});

swiper.on('fromEdge', () => {
  btnPrev.classList.remove('disabled_btn');
  btnNext.classList.remove('disabled_btn');
});

swiper.on('reachBeginning', () => {
  btnPrev.classList.add('disabled_btn');
  btnNext.classList.remove('disabled_btn');
});

swiper.on('reachEnd', () => {
  btnNext.classList.add('disabled_btn');
  btnPrev.classList.remove('disabled_btn');
});
