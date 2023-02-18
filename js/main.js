//congratulations message
var button = document.querySelector(".subscribe");
button.addEventListener("click", function () {
    let green = document.querySelector(".congrats");
    green.style.display = "block";
})
//verify onclick login, password, confirm password, email for #reg
let sub = document.getElementById("submit");
sub.addEventListener("click", function () {
    let username = document.getElementById("username").value;
    console.log(username);
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username == "") {
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("username").focus();
        alert("Please enter username");
        return false;
    }
    if (password !== confirmpassword) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("password").focus();
        document.getElementById("confirmPassword").focus();
        return false;
    }
    if (password == "") {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").focus();
        return false;
    }
    if (confirmpassword == "") {
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("confirmPassword").focus();
        return false;
    }
    if (email == "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        return false;
    }
    if (!reg.test(email)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").focus();
        return false;
    }
    return true;
})

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
window.onload = function () {
    document.querySelector('.preloader').classList.add("preloader-remove");
    document.querySelector('.preload-container').classList.add("preloader-remove");
};

// Open modal onclick registration
document.querySelector('.registration').addEventListener('click', function () {
    document.querySelector('.modal').classList.add('active');
});
document.querySelector('.registr').addEventListener('click', function () {
    document.querySelector('.modal').classList.add('active');
});
document.querySelector('.registrat').addEventListener('click', function () {
    document.querySelector('.modal').classList.add('active');
});
// close registration button
let close = document.querySelector(".close");
close.addEventListener("click", function () {
    document.querySelector(".modal").classList.remove('active');
})

//open modal login
document.querySelector('.login').addEventListener('click', function () {
    document.querySelector('.modal-login').classList.add('active');
})

//close modal login
let close1 = document.querySelector(".close1");
close1.addEventListener("click", function () {
    document.querySelector(".modal-login").classList.remove('active');
})

//open modal register onclick #registration
document.querySelector('#registration').addEventListener('click', function () {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.modal-login').classList.remove('active');
})
document.querySelector('#modal-log').addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.modal-login').classList.add('active');
})

//scroll to div
$(document).ready(function () {
    $('a[href^="#say"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
    $('a[href^="#question"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
})

//scrolltotop button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });
    $('.scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
})












