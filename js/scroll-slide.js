//slider
const sliders = document.querySelector('.says-slider');
let down = false;
let startX;
let scrollLeft;

sliders.addEventListener('mousedown', (e) => {
    down = true;
    sliders.classList.add('active');
    startX = e.pageX - sliders.offsetLeft;
    scrollLeft = sliders.scrollLeft;
});

sliders.addEventListener('mouseleave', () => {
    down = false;
    sliders.classList.remove('active');
});

sliders.addEventListener('mouseup', () => {
    down = false;
    sliders.classList.remove('active');
});

sliders.addEventListener('mousemove', (e) => {
    if (!down) return;
    e.preventDefault();
    const x = e.pageX - sliders.offsetLeft;
    const walk = (x - startX) * 3;
    sliders.scrollLeft = scrollLeft - walk;
});

// accordeon
$(document).ready(function () {
    $('.question-block__btn').on('click', my_func);
});
function my_func() {
    $('.question-block__text').not($(this).next());
    $(this).next().toggleClass("active");
}

//rotate

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    const image = document.getElementById('image1');
    let rotation = parseInt(image.dataset.rotation) || 0;
    rotation += 180;
    image.style.transform = `rotate(${rotation}deg)`;
    image.dataset.rotation = rotation % 360;
    image.style.transition = `all 0.2s linear`;
})

let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    const image = document.getElementById('image2');
    let rotation = parseInt(image.dataset.rotation) || 0;
    rotation += 180;
    image.style.transform = `rotate(${rotation}deg)`;
    image.dataset.rotation = rotation % 360;
    image.style.transition = `all 0.2s linear`;
})

let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    const image = document.getElementById('image3');
    let rotation = parseInt(image.dataset.rotation) || 0;
    rotation += 180;
    image.style.transform = `rotate(${rotation}deg)`;
    image.dataset.rotation = rotation % 360;
    image.style.transition = `all 0.2s linear`;
})

let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    const image = document.getElementById('image4');
    let rotation = parseInt(image.dataset.rotation) || 0;
    rotation += 180;
    image.style.transform = `rotate(${rotation}deg)`;
    image.dataset.rotation = rotation % 360;
    image.style.transition = `all 0.2s linear`;
})

//preload
window.onload = function() {
    document.querySelector('.preloader').classList.add("preloader-remove");
    document.querySelector('.preload-container').classList.add("preloader-remove");
};