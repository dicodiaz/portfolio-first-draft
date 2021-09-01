const form = document.querySelector('#contact-form');
const email = form.elements['user-email'];
const msg = document.querySelector('#error-msg');
const ERROR_MESSAGE = 'The email address has to be in lowercase.';
const emailContainer = document.querySelector('#email-container');

function isLowerCase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!isLowerCase(email.value)) {
    msg.innerText = ERROR_MESSAGE;
    emailContainer.classList.add('email-input-error');
    event.preventDefault();
  } else {
    msg.innerText = '';
    emailContainer.classList.remove('email-input-error');
  }
});
