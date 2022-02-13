const menu = document.getElementById('nav-links');
const hamburger= document.getElementById('toggle-menu');
const closeIcon= document.getElementById('closeMenu');
const menuIcon = document.getElementById('hamMenu');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
