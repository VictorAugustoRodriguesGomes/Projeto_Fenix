// Variables
let menuActive = 0;
let navBarIndex = 0;
let windowScroll = 0;

const homeAfter = document.querySelector('home');

const menu = document.getElementById("menu");
const li = menu.getElementsByTagName('li');

const game = document.getElementById('game');
const carousel = document.getElementById('carousel');
const joystick = document.getElementById('joystick');
const menuHome = document.getElementById('menuHome');
const information = document.getElementById('information');
const introduction = document.getElementById('introduction');

let gameCoordenadas = 0;
let carouselCoordenadas = 0;
let joystickCoordenadas = 0;
let menuHomeCoordenadas = 0;
let informationCoordenadas = 0;
let introductionCoordenadas = 0;

// Methods Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    // header.classList.add('up');

    gameCoordenadas = game.getBoundingClientRect();
    carouselCoordenadas = carousel.getBoundingClientRect();
    joystickCoordenadas = joystick.getBoundingClientRect();
    menuHomeCoordenadas = menuHome.getBoundingClientRect();
    informationCoordenadas = information.getBoundingClientRect();
    introductionCoordenadas = introduction.getBoundingClientRect();

    if (introductionCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 0;
        li[navBarIndex].classList.add('active');
    }

    if (informationCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 1;
        li[navBarIndex].classList.add('active');
    }

    if (carouselCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 2;
        li[navBarIndex].classList.add('active');
    }

    if (gameCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 3;
        li[navBarIndex].classList.add('active');
    }

    if (joystickCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 4;
        li[navBarIndex].classList.add('active');
    }

    if (menuHomeCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 5;
        li[navBarIndex].classList.add('active');
    }

    window.scrollY > windowScroll && menuActive != 1 ? header.classList.remove('up') : header.classList.add('up');
    
    windowScroll = window.scrollY; 
});

// Methods Menu
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuActive = (menuActive + 1) % 2;
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function efeitoMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
}