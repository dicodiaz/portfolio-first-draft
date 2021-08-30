const hambIcon = document.querySelector('#hamb-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cancelButton = document.querySelector('#cancel-button');
const menuItems = Array.from(document.querySelectorAll('.mobile-menu-list > li'));

hambIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('d-none');
});

cancelButton.addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('d-none');
  });
});