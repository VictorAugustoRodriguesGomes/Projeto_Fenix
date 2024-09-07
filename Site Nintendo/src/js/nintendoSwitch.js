// imgNintendoSwitchOled
const imgNintendoSwitchOled = document.getElementById('imgNintendoSwitchOled');
const SwitchOledImg = imgNintendoSwitchOled.getElementsByTagName('img');

const slidesNintendoSwitchOled = document.getElementById('slidesNintendoSwitchOled');
const slidesSwitchOled = slidesNintendoSwitchOled.getElementsByTagName('div');

let indexSwitchOled = 0;
let timeSlidesSwitchOled = 1;
setInterval(function run() {
    if (timeSlidesSwitchOled != 30) {
    } else {
        timeSlidesSwitchOled = 0;
        SwitchOledImg[indexSwitchOled].classList.remove('active');
        slidesSwitchOled[indexSwitchOled].classList.remove('active');
        indexSwitchOled = (indexSwitchOled + 1) % 5;
        SwitchOledImg[indexSwitchOled].classList.add('active');
        slidesSwitchOled[indexSwitchOled].classList.add('active');
    }
    timeSlidesSwitchOled++
}, 1000);

const slidesSwitchOled01 = () => {
    SwitchOledImg[indexSwitchOled].classList.remove('active');
    slidesSwitchOled[indexSwitchOled].classList.remove('active');
    indexSwitchOled = 0;
    timeSlidesSwitchOled = 0;
    SwitchOledImg[indexSwitchOled].classList.add('active');
    slidesSwitchOled[indexSwitchOled].classList.add('active');
};

const slidesSwitchOled02 = () => {
    SwitchOledImg[indexSwitchOled].classList.remove('active');
    slidesSwitchOled[indexSwitchOled].classList.remove('active');
    indexSwitchOled = 1;
    timeSlidesSwitchOled = 0;
    SwitchOledImg[indexSwitchOled].classList.add('active');
    slidesSwitchOled[indexSwitchOled].classList.add('active');
};

const slidesSwitchOled03 = () => {
    SwitchOledImg[indexSwitchOled].classList.remove('active');
    slidesSwitchOled[indexSwitchOled].classList.remove('active');
    indexSwitchOled = 2;
    timeSlidesSwitchOled = 0;
    SwitchOledImg[indexSwitchOled].classList.add('active');
    slidesSwitchOled[indexSwitchOled].classList.add('active');
};

const slidesSwitchOled04 = () => {
    SwitchOledImg[indexSwitchOled].classList.remove('active');
    slidesSwitchOled[indexSwitchOled].classList.remove('active');
    indexSwitchOled = 3;
    timeSlidesSwitchOled = 0;
    SwitchOledImg[indexSwitchOled].classList.add('active');
    slidesSwitchOled[indexSwitchOled].classList.add('active');
};

const slidesSwitchOled05 = () => {
    SwitchOledImg[indexSwitchOled].classList.remove('active');
    slidesSwitchOled[indexSwitchOled].classList.remove('active');
    indexSwitchOled = 4;
    timeSlidesSwitchOled = 0;
    SwitchOledImg[indexSwitchOled].classList.add('active');
    slidesSwitchOled[indexSwitchOled].classList.add('active');
};

// imgNintendoSwitch
const imgNintendoSwitch = document.getElementById('imgNintendoSwitch');
const SwitchImg = imgNintendoSwitch.getElementsByTagName('img');

const slidesNintendoSwitch = document.getElementById('slidesNintendoSwitch');
const slidesSwitch = slidesNintendoSwitch.getElementsByTagName('div');

let indexSwitch = 0;
let timeSlidesSwitch = 1;
setInterval(function run() {
    if (timeSlidesSwitch != 30) {
    } else {
        timeSlidesSwitch = 0;
        SwitchImg[indexSwitch].classList.remove('active');
        slidesSwitch[indexSwitch].classList.remove('active');
        indexSwitch = (indexSwitch + 1) % 5;
        SwitchImg[indexSwitch].classList.add('active');
        slidesSwitch[indexSwitch].classList.add('active');
    }
    timeSlidesSwitch++
}, 1000);

const slidesSwitch01 = () => {
    SwitchImg[indexSwitch].classList.remove('active');
    slidesSwitch[indexSwitch].classList.remove('active');
    indexSwitch = 0;
    timeSlidesSwitch = 0;
    SwitchImg[indexSwitch].classList.add('active');
    slidesSwitch[indexSwitch].classList.add('active');
};

const slidesSwitch02 = () => {
    SwitchImg[indexSwitch].classList.remove('active');
    slidesSwitch[indexSwitch].classList.remove('active');
    indexSwitch = 1;
    timeSlidesSwitch = 0;
    SwitchImg[indexSwitch].classList.add('active');
    slidesSwitch[indexSwitch].classList.add('active');
};

const slidesSwitch03 = () => {
    SwitchImg[indexSwitch].classList.remove('active');
    slidesSwitch[indexSwitch].classList.remove('active');
    indexSwitch = 2;
    timeSlidesSwitch = 0;
    SwitchImg[indexSwitch].classList.add('active');
    slidesSwitch[indexSwitch].classList.add('active');
};

const slidesSwitch04 = () => {
    SwitchImg[indexSwitch].classList.remove('active');
    slidesSwitch[indexSwitch].classList.remove('active');
    indexSwitch = 3;
    timeSlidesSwitch = 0;
    SwitchImg[indexSwitch].classList.add('active');
    slidesSwitch[indexSwitch].classList.add('active');
};

const slidesSwitch05 = () => {
    SwitchImg[indexSwitch].classList.remove('active');
    slidesSwitch[indexSwitch].classList.remove('active');
    indexSwitch = 4;
    timeSlidesSwitch = 0;
    SwitchImg[indexSwitch].classList.add('active');
    slidesSwitch[indexSwitch].classList.add('active');
};

// imgNintendoSwitchLite
const imgNintendoSwitchLite = document.getElementById('imgNintendoSwitchLite');
const SwitchLiteImg = imgNintendoSwitchLite.getElementsByTagName('img');

const slidesNintendoSwitchLite = document.getElementById('slidesNintendoSwitchLite');
const slidesSwitchLite = slidesNintendoSwitchLite.getElementsByTagName('div');

let indexSwitchLite = 0;
let timeSlidesSwitchLite = 1;
setInterval(function run() {
    if (timeSlidesSwitchLite != 30) {
    } else {
        timeSlidesSwitchLite = 0;
        SwitchLiteImg[indexSwitchLite].classList.remove('active');
        slidesSwitchLite[indexSwitchLite].classList.remove('active');
        indexSwitchLite = (indexSwitchLite + 1) % 5;
        SwitchLiteImg[indexSwitchLite].classList.add('active');
        slidesSwitchLite[indexSwitchLite].classList.add('active');
    }
    timeSlidesSwitchLite++
}, 1000);

const slidesSwitchLite01 = () => {
    SwitchLiteImg[indexSwitchLite].classList.remove('active');
    slidesSwitchLite[indexSwitchLite].classList.remove('active');
    indexSwitchLite = 0;
    timeSlidesSwitchLite = 0;
    SwitchLiteImg[indexSwitchLite].classList.add('active');
    slidesSwitchLite[indexSwitchLite].classList.add('active');
};

const slidesSwitchLite02 = () => {
    SwitchLiteImg[indexSwitchLite].classList.remove('active');
    slidesSwitchLite[indexSwitchLite].classList.remove('active');
    indexSwitchLite = 1;
    timeSlidesSwitchLite = 0;
    SwitchLiteImg[indexSwitchLite].classList.add('active');
    slidesSwitchLite[indexSwitchLite].classList.add('active');
};

const slidesSwitchLite03 = () => {
    SwitchLiteImg[indexSwitchLite].classList.remove('active');
    slidesSwitchLite[indexSwitchLite].classList.remove('active');
    indexSwitchLite = 2;
    timeSlidesSwitchLite = 0;
    SwitchLiteImg[indexSwitchLite].classList.add('active');
    slidesSwitchLite[indexSwitchLite].classList.add('active');
};

const slidesSwitchLite04 = () => {
    SwitchLiteImg[indexSwitchLite].classList.remove('active');
    slidesSwitchLite[indexSwitchLite].classList.remove('active');
    indexSwitchLite = 3;
    timeSlidesSwitchLite = 0;
    SwitchLiteImg[indexSwitchLite].classList.add('active');
    slidesSwitchLite[indexSwitchLite].classList.add('active');
};

const slidesSwitchLite05 = () => {
    SwitchLiteImg[indexSwitchLite].classList.remove('active');
    slidesSwitchLite[indexSwitchLite].classList.remove('active');
    indexSwitchLite = 4;
    timeSlidesSwitchLite = 0;
    SwitchLiteImg[indexSwitchLite].classList.add('active');
    slidesSwitchLite[indexSwitchLite].classList.add('active');
};