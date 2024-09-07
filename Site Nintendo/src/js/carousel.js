const carouselImg = document.getElementById('carouselImg');
const slidesImg = carouselImg.querySelectorAll('img, video');

const carouselCard = document.getElementById('carouselCard');
const slidesCard = carouselCard.getElementsByTagName('div');

let indexCarousel = 0;
let timeSlidesCarousel = 1;

setInterval(function run() {

    if (timeSlidesCarousel != 30) {

    } else {
        timeSlidesCarousel = 0;
        slidesImg[indexCarousel].classList.remove('active');
        slidesCard[indexCarousel].classList.remove('active');
        indexCarousel = (indexCarousel + 1) % 9;
        slidesImg[indexCarousel].classList.add('active');
        slidesCard[indexCarousel].classList.add('active');
    }
    
    timeSlidesCarousel++
}, 1000);

const slidesCarousel01 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 0;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel02 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 1;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel03 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 2;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel04 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 3;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel05 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 4;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel06 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 5;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel07 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 6;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel08 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 7;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};

const slidesCarousel09 = () => {
    slidesImg[indexCarousel].classList.remove('active');
    slidesCard[indexCarousel].classList.remove('active');
    indexCarousel = 8;
    timeSlidesCarousel = 0;
    slidesImg[indexCarousel].classList.add('active');
    slidesCard[indexCarousel].classList.add('active');
};