const nav_hamburger = document.querySelector(".nav_hamburger");
const nav_menu = document.querySelector(".nav_menu");
const doropdown_menuBox = document.querySelector(".doropdown-menuBox");
const doropdown_menu = document.querySelector(".doropdown-menu");

nav_hamburger.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
});

doropdown_menuBox.addEventListener("click", () => {
  if (doropdown_menu.style.display == "block") {
    doropdown_menu.style.display = "none";
  } else {
    doropdown_menu.style.display = "block";
  }
});
