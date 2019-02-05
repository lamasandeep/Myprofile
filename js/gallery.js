var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



// Illustra Gallery
const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
function generateHtml([h, v]) {
    return `<div class="item h${h} v${v}">
              <img src="img/${randomNumber(10)}.jpg">
              <div class="item__overlay">
                <button>View</button>
              </div>
           </div>`;
}
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
const digits = Array.from({
    length: 10
}, () => {
    return [randomNumber(4), randomNumber(4)];
}).concat([


]);
const html = digits.map(generateHtml).join('');
gallery.innerHTML = html;
const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleCLick));
overlayClose.addEventListener('click', close);
function handleCLick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    open();
}

function open() {
    overlay.classList.add('open');
}
function close() {
    overlay.classList.remove('open');
}

