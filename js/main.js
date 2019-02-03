

// Close If Outside Click
const card = document.querySelector('.card');
window.addEventListener('click', outsideClick);
function outsideClick(e) {
  if (e.target == card) {
    card.style.display = 'none';
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

//Js Slideshow
let sliderImages = document.querySelectorAll(".slide");
arrowLeft = document.querySelector("#left");
arrowRight = document.querySelector("#right");
current = 0;

//clear all the images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//Initial slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
//Show next

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// clock

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();


let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {

  hrPosition = hrPosition + (3 / 360);
  minPostition = minPosition + (6 / 60);
  secPosition = secPosition + 6;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);



