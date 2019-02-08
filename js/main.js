

const openDoor = document.querySelector(".enter");

openDoor.addEventListener('animationstart', function (event) {
  console.log('Animation started', event);
})

openDoor.addEventListener('animationend', function (event) {
  console.log('Animation ended', event);
})

openDoor.addEventListener('animationiteration', function (event) {
  console.log('Animation iteration', event);
})


var modal = document.getElementById('contact');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Js Menu hamburger
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');


//Set Initial State Of Nav
let displayNav = false;

navBtn.addEventListener("click", toggleNav);
function toggleNav() {
  if (!displayNav) {
    navBtn.classList.add("close");
    nav.classList.add("display");
    menuNav.classList.add("display");
    navItems.forEach(item => item.classList.add('display'));
    //Set Nav state
    displayNav = true;
  } else {
    navBtn.classList.remove("close");
    nav.classList.remove("display");
    menuNav.classList.remove("display");
    navItems.forEach(item => item.classList.remove('display'));
    //Set Initial State Of Nav
    displayNav = false;

  }
}




