import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.orrder-form-js');
const modal = document.querySelector('.modal-work');
const closeModalButton = document.querySelector('.close-modal-work');
const modalRoot = document.querySelector('[data-modal-root-js]');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

function openModal({ title, message }) {
  modal.classList.remove('visually-hidden');
  closeModalButton.addEventListener('click', closeModal);
  document.body.classList.add('body-no-scroll');
  document.addEventListener('keydown', closeKeyboardClick);

  modalRoot.innerHTML = `<h2 class="modal-work-text">${title}</h2>
      <p class="modal-work-text-p">${message}</p>`;
}

function closeModal() {
  modal.classList.add('visually-hidden');
  closeModalButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeKeyboardClick);
  document.body.classList.remove('body-no-scroll');
}

const closeKeyboardClick = e => {
  console.log(e);

  if (e.key === `Escape`) closeModal();
};

const formSubmit = e => {
  e.preventDefault();
  const { email, comment } = e.target.elements;

  const submit = {
    email: email.value,
    comment: comment.value,
  };

  fechPost(submit);
};

const fechPost = async submit => {
  try {
    const response = await axios.post('/requests', submit);
    openModal(response.data);
  } catch ({ message }) {
    iziToast.warning({
      message: message,
    });
  }
};

form.addEventListener('submit', formSubmit);
