let hambIcon = document.querySelector("#hamb-icon");
let mobileMenu = document.querySelector(".mobile-menu");
let cancelButton = document.querySelector("#cancel-button")

hambIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("d-none");
});

cancelButton.addEventListener("click", function () {
  mobileMenu.classList.add("d-none");
});
