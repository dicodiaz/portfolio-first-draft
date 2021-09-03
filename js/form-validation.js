const form = document.querySelector('#contact-form');
const email = document.querySelector('#contact-form-email');
const errorMsg = document.querySelector('#error-msg');
const ERROR_MESSAGE = 'The email address has to be in lowercase.';

function isLowerCase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!isLowerCase(email.value)) {
    errorMsg.innerText = ERROR_MESSAGE;
    email.classList.add('email-input-error');
    event.preventDefault();
  } else {
    errorMsg.innerText = '';
    email.classList.add('email-input-error');
  }
});
