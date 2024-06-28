const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

window.setTimeout(function() {
  dropdownMenu.classList.remove('hidden');
}, 500);

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
    dropdownMenu.classList.toggle("hide");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.toggle("visible")
    dropdownMenu.classList.toggle("hide");
  }
})