/*
Student Name: Kombe Molinga Prince-charles
File Name: script.js
Date: 2025-12-02
*/

// Hamburger Menu

function hamburger() {
  var menu = document.getElementById('menu-links')
  var logo = document.getElementById('ffc-logo')
  console.log(menu, logo)

  if (menu.style.display === 'block' && logo.style.display === 'none') {
    menu.style.display = 'none'
    logo.style.display = 'block'
  } else {
    menu.style.display = 'block'
    logo.style.display = 'none'
  }
}
