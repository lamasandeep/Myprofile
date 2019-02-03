const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
function generateHtml([h, v]) {
    return `<div class="item h${h} v${v}">
              <img src="img/${randomNumber(12)}.jpg">
              <div class="item__overlay">
                <button>View</button>
              </div>
           </div>`;
}
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}
const digits = Array.from({
    length: 50
}, () => {
    return [randomNumber(4), randomNumber(4)];
}).concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
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

