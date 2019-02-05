
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

