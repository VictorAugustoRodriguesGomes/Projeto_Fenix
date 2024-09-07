const homeAfter = document.querySelector('home');
let navBarIndex = 0;

window.addEventListener('scroll', function () {

    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    const menu = document.getElementById("menu");
    const li = menu.getElementsByTagName('li');

    const introduction = document.getElementById("introduction");
    let introductionCoordenadas = introduction.getBoundingClientRect()

    const information = document.getElementById("information");
    let informationCoordenadas = information.getBoundingClientRect()

    const carousel = document.getElementById("carousel");
    let carouselCoordenadas = carousel.getBoundingClientRect()

    const joystickXboxInfo = document.getElementById("joystickXboxInfo");
    let joystickXboxInfoCoordenadas = joystickXboxInfo.getBoundingClientRect()

    const game = document.getElementById("game");
    let gameCoordenadas = game.getBoundingClientRect()

    const GamePassInfo = document.getElementById("GamePassInfo");
    let GamePassInfoCoordenadas = GamePassInfo.getBoundingClientRect()

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

    if (joystickXboxInfoCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 3;
        li[navBarIndex].classList.add('active');
    }

    if (gameCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 4;
        li[navBarIndex].classList.add('active');
    }

    if (GamePassInfoCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 5;
        li[navBarIndex].classList.add('active');
    }

});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function efeitoMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}