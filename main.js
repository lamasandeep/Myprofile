//Get modal element
// Get DOM Elements
const homepage = document.querySelector('#home-page');
const enter = document.querySelector('#enter');
const exit = document.querySelector('.exit');
const welcome = document.querySelector('#welcome');


// Events
enter.addEventListener('click', openMyPage);



// Open
function openMyPage() {
  homepage.style.display = 'block';
  welcome.style.display = 'none';
  navBtn.style.display='block';

}



// Close If Outside Click
// function outsideClick(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

//Js Menu hamburger
const navBtn=document.querySelector(".nav-btn");
const nav=document.querySelector(".nav");
const resume = document.querySelector(".resume");
const work=document.querySelector(".my-work");

//Set Initial State Of Nav
let displayNav = false;
   
   navBtn.addEventListener("click",toggleNav);
function toggleNav(){
    if(!displayNav){
       navBtn.classList.add("close");
       nav.classList.add("display");
       resume.classList.add("display");
       work.classList.add("display");
       
       //Set Nav state
       displayNav=true;
                  }else{
      navBtn.classList.remove("close");
      nav.classList.remove("display");
       resume.classList.remove("display");
       work.classList.remove("display");
  
  //Set Initial State Of Nav
      displayNav = false;

}
}

//Js Slideshow
let sliderImages=document.querySelectorAll(".slide");
    arrowLeft=document.querySelector("#left");
    arrowRight=document.querySelector("#right");
    current=0;
    
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
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
