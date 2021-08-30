let hambIcon = document.querySelector("#hamb-icon");
let mobileMenu = document.querySelector(".mobile-menu");

hambIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("d-none");
});
