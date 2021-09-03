const hambIcon = document.querySelector('#hamb-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cancelButton = document.querySelector('#cancel-button');
const menuItems = Array.from(document.querySelectorAll('.mobile-menu-list > li'));

hambIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('mt--100');
});

cancelButton.addEventListener('click', () => {
  mobileMenu.classList.add('mt--100');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('mt--100');
  });
});
