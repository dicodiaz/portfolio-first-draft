const form = document.querySelector('#contact-form');
const email = form.elements['user-email'];

function isLowerCase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!isLowerCase(email.value)) {
    alert('Email is not lowercase');
    event.preventDefault();
  } else {
    alert('Email is lowercase');
  }
});
