const introductionTextTrailer = document.getElementById('introductionTextTrailer');

const introductionBackground = document.getElementById('introductionBackground');
const slidesIntroductionBackground = introductionBackground.getElementsByTagName('img');

const introductionLogo = document.getElementById('introductionLogo');
const slidesIntroductionLogo = introductionLogo.getElementsByTagName('img');

const introductionText = document.getElementById('introductionText');
const slidesIntroductionText = introductionText.getElementsByTagName('p');

const introductionTrailer = document.getElementById('introductionTrailer');
const slidesIntroductionTrailer = introductionTrailer.getElementsByTagName('div');

const introductionControlsBar = document.getElementById('introductionControlsBar');
const slideIntroductionControlsBar = introductionControlsBar.getElementsByTagName('div');

const introductionControlsPause = document.getElementById('introductionControlsPause');

let indexSlidesIntroduction = 0;
let timeSlidesIntroduction = 1;
let playOfPauseSlidesIntroduction = 0;

setInterval(function run() {
    if (timeSlidesIntroduction != 30) {
        introductionTextTrailer.classList.remove('active');

    } else {
        timeSlidesIntroduction = 0;
        introductionTextTrailer.classList.remove('active');
        slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].volume=0;
        slidesIntroductionBackground[indexSlidesIntroduction].classList.remove('active');
        slidesIntroductionLogo[indexSlidesIntroduction].classList.remove('active');
        slidesIntroductionText[indexSlidesIntroduction].classList.remove('active');
        slidesIntroductionTrailer[indexSlidesIntroduction].classList.remove('active');
        slideIntroductionControlsBar[indexSlidesIntroduction].classList.remove('active');
        indexSlidesIntroduction = (indexSlidesIntroduction + 1) % 3;
        introductionTextTrailer.classList.add('active');
        slidesIntroductionBackground[indexSlidesIntroduction].classList.add('active');
        slidesIntroductionLogo[indexSlidesIntroduction].classList.add('active');
        slidesIntroductionText[indexSlidesIntroduction].classList.add('active');
        slidesIntroductionTrailer[indexSlidesIntroduction].classList.add('active');
        slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
        slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].currentTime = 0;
    }

    playOfPauseSlidesIntroduction == 1 ? timeSlidesIntroduction = 0 : timeSlidesIntroduction++;

}, 1000);

introductionControlsPause.addEventListener('click', (event) => {
    playOfPauseSlidesIntroduction = (playOfPauseSlidesIntroduction + 1) % 2;

    if (playOfPauseSlidesIntroduction == 1) {
        introductionControlsPause.classList.remove('bx-pause-circle');
        introductionControlsPause.classList.add('bx-play-circle');
        introductionControlsPause.style.color = '#e60012';
        slideIntroductionControlsBar[indexSlidesIntroduction].classList.remove('active');
        slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#e60012";
    } else {
        introductionControlsPause.classList.remove('bx-play-circle');
        introductionControlsPause.classList.add('bx-pause-circle');
        introductionControlsPause.style.color = '#ffffff';
        slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
        slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#ffffff";
    }
});

introductionControlsPause.addEventListener("mouseover", (event) => {
    introductionControlsPause.style.color = '#e60012';
});

introductionControlsPause.addEventListener("mouseout", (event) => {
    playOfPauseSlidesIntroduction == 1 ? introductionControlsPause.style.color = '#e60012' : introductionControlsPause.style.color = '#ffffff';

});

const slidesIntroduction01 = () => {
    introductionTextTrailer.classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].volume=0;
    slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#ffffff";
    slidesIntroductionBackground[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.remove('active');
    slideIntroductionControlsBar[indexSlidesIntroduction].classList.remove('active');
    timeSlidesIntroduction = 0;
    indexSlidesIntroduction = 0;
    slidesIntroductionBackground[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].currentTime = 0;
    playOfPauseSlidesIntroduction == 1 ? slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#e60012" : slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
};

const slidesIntroduction02 = () => {
    introductionTextTrailer.classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].volume=0;
    slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#ffffff";
    slidesIntroductionBackground[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.remove('active');
    slideIntroductionControlsBar[indexSlidesIntroduction].classList.remove('active');
    timeSlidesIntroduction = 0;
    indexSlidesIntroduction = 1;
    slidesIntroductionBackground[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.add('active');
    slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].currentTime = 0;
    playOfPauseSlidesIntroduction == 1 ? slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#e60012" : slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
};

const slidesIntroduction03 = () => {
    introductionTextTrailer.classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].volume=0;
    slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#ffffff";
    slidesIntroductionBackground[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.remove('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.remove('active');
    slideIntroductionControlsBar[indexSlidesIntroduction].classList.remove('active');
    timeSlidesIntroduction = 0;
    indexSlidesIntroduction = 2;
    slidesIntroductionBackground[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionLogo[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionText[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].classList.add('active');
    slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
    slidesIntroductionTrailer[indexSlidesIntroduction].childNodes[1].currentTime = 1;
    playOfPauseSlidesIntroduction == 1 ? slideIntroductionControlsBar[indexSlidesIntroduction].style.background = "#e60012" : slideIntroductionControlsBar[indexSlidesIntroduction].classList.add('active');
};