const hambIcon = document.querySelector('#hamb-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cancelButton = document.querySelector('#cancel-button');
const menuItems = document.querySelectorAll('.mobile-menu-list > li');

hambIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('d-none');
});

cancelButton.addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
});

menuItems[0].addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
});

menuItems[1].addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
});

menuItems[2].addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
});
