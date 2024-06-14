import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.orrder-form-js');
const modal = document.querySelector('.modal-work-js');
const closeModalButton = document.querySelector('.close-modal-work-js');
const modalRoot = document.querySelector('[data-modal-root-js]');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

function openModal({ title, message }) {
  document.addEventListener('keydown', closeKeyboardClick);
  closeModalButton.addEventListener('click', closeModal);
  modal.classList.remove('visually-hidden');
  document.body.classList.add('body-no-scroll');

  modalRoot.innerHTML = `<h2 class="modal-work-text">${title}</h2>
      <p class="modal-work-text-p">${message}</p>`;
}

function closeModal() {
  closeModalButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeKeyboardClick);
  modal.classList.add('visually-hidden');
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

const lsFormData = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

initForm();

form.addEventListener('input', handleImput);
form.addEventListener('submit', handleSubmit);

function initForm() {
  const localStorageFormData = localStorage.getItem(lsFormData);
  if (!localStorageFormData) {
    return;
  }

  try {
    formData = JSON.parse(localStorageFormData);
  } catch (error) {
    console.log(error);
    return;
  }

  const { email, message } = form.elements;

  email.value = formData.email;
  message.value = formData.message;
}

function handleImput(event) {
  const key = event.target.name;

  formData[key] = event.target.value;

  localStorage.setItem(lsFormData, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  formData = {
    email: '',
    message: '',
  };

  localStorage.removeItem(lsFormData);
  form.reset();

  form.addEventListener('input', handleImput);
  form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email-user');
  const validIcon = document.querySelector('.valid-icon');

  emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      validIcon.style.display = 'block';
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      validIcon.style.display = 'none';
    }
  });
});
