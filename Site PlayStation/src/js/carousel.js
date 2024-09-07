const containerSlidesImg = document.getElementById('container-slides-img');
const slidesImg = containerSlidesImg.getElementsByTagName('div');

const containerSlidesControlImglist = document.getElementById('container-slides-control-with-img-list');
const slidesSelectedWithImageList = containerSlidesControlImglist.getElementsByTagName('div');

const containerSlidesControlListBar = document.getElementById('container-slides-control-with-img-list-cardBar');
const slidesSelectedBar = containerSlidesControlListBar.getElementsByTagName('div');

var index = 0;
let timeSlides = 1;
setInterval(function run() {
    if (timeSlides != 30) {
    } else {
        timeSlides = 0;
        slidesSelectedWithImageList[index].classList.remove('active');
        slidesSelectedBar[index].classList.remove('active');
        slidesImg[index].classList.remove('active');
        index = (index + 1) % 5;
        slidesSelectedWithImageList[index].classList.add('active');
        slidesSelectedBar[index].classList.add('active');
        slidesImg[index].classList.add('active');
    }
    timeSlides++
}, 1000);

function intro0() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesImg[index].classList.remove('active');
    index = 0;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesImg[index].classList.add('active');
}

function intro1() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesImg[index].classList.remove('active');
    index = 1;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesImg[index].classList.add('active');
}

function intro2() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesImg[index].classList.remove('active');
    index = 2;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesImg[index].classList.add('active');
}

function intro3() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesImg[index].classList.remove('active');
    index = 3;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesImg[index].classList.add('active');
}

function intro4() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesImg[index].classList.remove('active');
    index = 4;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesImg[index].classList.add('active');
}