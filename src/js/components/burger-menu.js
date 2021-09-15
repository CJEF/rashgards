/* menu */

function closeMenu() {
    menuOverlay.classList.remove("active")
    menu.classList.remove("active")
  }
  
  let menu = document.querySelector(".mobile-menu");
  let menuOverlay = document.querySelector(".mobile-menu-overlay");
  let burger = document.querySelector(".burger");
  let closeBurger = document.querySelector(".burger-close");
  let navLink = document.querySelectorAll(".nav__link");
  burger.addEventListener("click", function() {
    menuOverlay.classList.add("active")
    menu.classList.add("active")
  })
  closeBurger.addEventListener("click", function() {
    closeMenu()
  })
  navLink.forEach(function(link) {
    link.addEventListener("click", function () {
      closeMenu()
    })
  })
  