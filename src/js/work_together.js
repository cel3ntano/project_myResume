import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { upLink } from './header';
import { body } from './header';

const form = document.querySelector('.orrder-form-js');
const modal = document.querySelector('.modal-work-js');
const closeModalButton = document.querySelector('.close-modal-work-js');
const modalRoot = document.querySelector('[data-modal-root-js]');
const submitButton = form.querySelector('button[type="submit"]');
const lsFormData = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

function openModal({ title, message }) {
  document.addEventListener('keydown', closeKeyboardClick);
  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('click', closeBackdropClick);
  modal.classList.remove('visually-hidden');
  upLink.style.display = 'none';
  body.classList.toggle('modal-open');
  // document.body.classList.add('body-no-scroll');
  modalRoot.innerHTML = `<h2 class="modal-work-text">${title}</h2>
      <p class="modal-work-text-p">${message}</p>`;
}

function closeModal() {
  closeModalButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeKeyboardClick);
  modal.removeEventListener('click', closeBackdropClick);
  modal.classList.add('visually-hidden');
  // document.body.classList.remove('body-no-scroll');
  upLink.style.display = 'block';
  body.classList.toggle('modal-open');
}

function closeKeyboardClick(e) {
  if (e.key === 'Escape') closeModal();
}

function closeBackdropClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}

async function fechPost(submit) {
  try {
    const response = await axios.post('/requests', submit);
    openModal(response.data);
  } catch ({ message }) {
    iziToast.warning({
      message: message,
    });
  }
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

initForm();

function initForm() {
  const localStorageFormData = localStorage.getItem(lsFormData);
  if (!localStorageFormData) {
    return;
  }

  try {
    formData = JSON.parse(localStorageFormData);
  } catch (error) {
    console.error(error);
    return;
  }

  const { email, message } = form.elements;

  email.value = formData.email || '';
  message.value = formData.message || '';
  toggleSubmitButton();
}

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem(lsFormData, JSON.stringify(formData));
  toggleSubmitButton();
}

function handleSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;

  const submit = {
    email: email.value,
    comment: message.value,
  };

  fechPost(submit);

  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(lsFormData);
  form.reset();
  resetValidation();
}

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email-user');
  const emailError = document.getElementById('email-error');
  const commentTextarea = document.getElementById('comment');
  const commentError = document.getElementById('comment-error');
  const validIcon = document.querySelector('.valid-icon');

  emailInput.addEventListener('blur', function () {
    if (emailInput.value === '') {
      emailInput.classList.remove('valid', 'invalid');
      emailError.style.display = 'none';
      validIcon.style.display = 'none';
    } else if (emailInput.validity.valid) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      emailError.style.display = 'none';
      validIcon.style.display = 'block';
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      emailError.style.display = 'block';
      validIcon.style.display = 'none';
    }
    toggleSubmitButton();
  });

  commentTextarea.addEventListener('blur', function () {
    if (commentTextarea.value.trim() !== '') {
      commentTextarea.classList.remove('invalid');
      commentTextarea.classList.add('valid');
      commentError.style.display = 'none';
    } else {
      commentTextarea.classList.remove('valid');
      commentTextarea.classList.add('invalid');
      commentError.style.display = 'block';
    }
    toggleSubmitButton();
  });

  emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (emailInput.validity.valid) {
        commentTextarea.focus();
      } else {
        emailInput.focus();
        emailError.style.display = 'block';
        validIcon.style.display = 'none';
      }
    }
  });

  toggleSubmitButton();
});

function toggleSubmitButton() {
  const emailInput = document.getElementById('email-user');
  const commentTextarea = document.getElementById('comment');
  submitButton.disabled = !(
    emailInput.validity.valid && commentTextarea.value.trim() !== ''
  );
}

function resetValidation() {
  const emailInput = document.getElementById('email-user');
  const emailError = document.getElementById('email-error');
  const commentTextarea = document.getElementById('comment');
  const commentError = document.getElementById('comment-error');
  const validIcon = document.querySelector('.valid-icon');

  emailInput.classList.remove('valid', 'invalid');
  emailError.style.display = 'none';
  validIcon.style.display = 'none';

  commentTextarea.classList.remove('valid', 'invalid');
  commentError.style.display = 'none';
  toggleSubmitButton();
}
