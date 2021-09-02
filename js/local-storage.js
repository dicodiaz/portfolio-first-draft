const form2 = document.querySelector('#contact-form');
const name2 = form2.elements['user-name'];
const email2 = form2.elements['user-email'];
const msg2 = document.querySelector('#msg');

function populateStorage() {
  const formData = { userName: name2.value, userEmail: email2.value, userMsg: msg2.value };
  localStorage.setItem('formData', JSON.stringify(formData));
}

name2.onchange = populateStorage;
email2.onchange = populateStorage;
msg2.onchange = populateStorage;
