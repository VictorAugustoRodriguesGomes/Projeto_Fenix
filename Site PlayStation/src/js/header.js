// Variables
let windowScroll = 0;
const homeAfter = document.querySelector('home');

// Methods Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    if(window.scrollY < windowScroll){
        header.classList.add('up');
    }else{
        header.classList.remove('up');
    }

    windowScroll = window.scrollY; 
});

// Methods Menu
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