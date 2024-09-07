//Variables
const containerSlides = document.getElementById('containerSlides');
const slidesImg = containerSlides.getElementsByTagName('div');

const containerText = document.getElementById('containerText');
const slidestext = containerText.getElementsByClassName('container-text-card');

const nextIMG = document.getElementById("nextIMG");
const previousIMG = document.getElementById("previousIMG");

const containerControlBar = document.getElementById('containerControlBar');
const controlBar = containerControlBar.getElementsByTagName('div');

let index = 0;
let timeSlides = 1;
setInterval(function run() {
    if (timeSlides != 20) {
    } else {
        timeSlides = 0;
        slidesImg[index].classList.remove('active');
        slidestext[index].classList.remove('active');
        controlBar[index].classList.remove('active');
        index = (index + 1) % 5;
        slidesImg[index].classList.add('active');
        slidestext[index].classList.add('active');
        controlBar[index].classList.add('active');
    }
    timeSlides++
}, 1000);


nextIMG.addEventListener("click", () => {
    timeSlides = 0;
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = (index + 1) % slidesImg.length;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
});

previousIMG.addEventListener("click", () => {
    timeSlides = 0;
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = (index - 1) % slidesImg.length;
    index < 0 ? index = 4 : index = index;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
});

function intro0() {
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = 0;
    timeSlides = 0;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
}

function intro1() {
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = 1;
    timeSlides = 0;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
}

function intro2() {
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = 2;
    timeSlides = 0;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
}

function intro3() {
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = 3;
    timeSlides = 0;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
}

function intro4() {
    slidesImg[index].classList.remove('active');
    slidestext[index].classList.remove('active');
    controlBar[index].classList.remove('active');
    index = 4;
    timeSlides = 0;
    slidesImg[index].classList.add('active');
    slidestext[index].classList.add('active');
    controlBar[index].classList.add('active');
}

// 
const slidesImg01 = document.getElementById('slidesImg01');
const slidesImg02 = document.getElementById('slidesImg02');
const slidesImg03 = document.getElementById('slidesImg03');
const slidesImg04 = document.getElementById('slidesImg04');
const slidesImg05 = document.getElementById('slidesImg05');

// slides01Img01
const slides01Img01 = document.getElementById('slides01Img01');
const slides01Img02 = document.getElementById('slides01Img02');
const slides01Img03 = document.getElementById('slides01Img03');
const slides01Img04 = document.getElementById('slides01Img04');

// slides02Img02
const slides02Img01 = document.getElementById('slides02Img01');
const slides02Img02 = document.getElementById('slides02Img02');
const slides02Img03 = document.getElementById('slides02Img03');
const slides02Img04 = document.getElementById('slides02Img04');

// slides02Img03
const slides03Img01 = document.getElementById('slides03Img01');
const slides03Img02 = document.getElementById('slides03Img02');
const slides03Img03 = document.getElementById('slides03Img03');
const slides03Img04 = document.getElementById('slides03Img04');

// slides02Img04
const slides04Img01 = document.getElementById('slides04Img01');
const slides04Img02 = document.getElementById('slides04Img02');
const slides04Img03 = document.getElementById('slides04Img03');
const slides04Img04 = document.getElementById('slides04Img04');

// slides02Img05
const slides05Img01 = document.getElementById('slides05Img01');
const slides05Img02 = document.getElementById('slides05Img02');
const slides05Img03 = document.getElementById('slides05Img03');
const slides05Img04 = document.getElementById('slides05Img04');

// metds mouseover mouseout 1
slides01Img01.addEventListener("mouseover", (event) => {
    slidesImg01.src = "src/img/carousel/slides01Img01.webp";
});

slides01Img01.addEventListener("mouseout", (event) => {
    slidesImg01.src = "src/img/carousel/slidesImg01.webp";
});

slides01Img02.addEventListener("mouseover", (event) => {
    slidesImg01.src = "src/img/carousel/slides01Img02.webp";
});

slides01Img02.addEventListener("mouseout", (event) => {
    slidesImg01.src = "src/img/carousel/slidesImg01.webp";
});

slides01Img03.addEventListener("mouseover", (event) => {
    slidesImg01.src = "src/img/carousel/slides01Img03.webp";
});

slides01Img03.addEventListener("mouseout", (event) => {
    slidesImg01.src = "src/img/carousel/slidesImg01.webp";
});

slides01Img04.addEventListener("mouseover", (event) => {
    slidesImg01.src = "src/img/carousel/slides01Img04.webp";
});

slides01Img04.addEventListener("mouseout", (event) => {
    slidesImg01.src = "src/img/carousel/slidesImg01.webp";
});

// metds mouseover mouseout 2
slides02Img01.addEventListener("mouseover", (event) => {
    slidesImg02.src = "src/img/carousel/slides02Img01.webp";
});

slides02Img01.addEventListener("mouseout", (event) => {
    slidesImg02.src = "src/img/carousel/slidesImg02.webp";
});

slides02Img02.addEventListener("mouseover", (event) => {
    slidesImg02.src = "src/img/carousel/slides02Img02.webp";
});

slides02Img02.addEventListener("mouseout", (event) => {
    slidesImg02.src = "src/img/carousel/slidesImg02.webp";
});

slides02Img03.addEventListener("mouseover", (event) => {
    slidesImg02.src = "src/img/carousel/slides02Img03.webp";
});

slides02Img03.addEventListener("mouseout", (event) => {
    slidesImg02.src = "src/img/carousel/slidesImg02.webp";
});

slides02Img04.addEventListener("mouseover", (event) => {
    slidesImg02.src = "src/img/carousel/slides02Img04.webp";
});

slides02Img04.addEventListener("mouseout", (event) => {
    slidesImg02.src = "src/img/carousel/slidesImg02.webp";
});

// metds mouseover mouseout 3
slides03Img01.addEventListener("mouseover", (event) => {
    slidesImg03.src = "src/img/carousel/slides03Img01.webp";
});

slides03Img01.addEventListener("mouseout", (event) => {
    slidesImg03.src = "src/img/carousel/slidesImg03.webp";
});

slides03Img02.addEventListener("mouseover", (event) => {
    slidesImg03.src = "src/img/carousel/slides03Img02.webp";
});

slides03Img02.addEventListener("mouseout", (event) => {
    slidesImg03.src = "src/img/carousel/slidesImg03.webp";
});

slides03Img03.addEventListener("mouseover", (event) => {
    slidesImg03.src = "src/img/carousel/slides03Img03.webp";
});

slides03Img03.addEventListener("mouseout", (event) => {
    slidesImg03.src = "src/img/carousel/slidesImg03.webp";
});

slides03Img04.addEventListener("mouseover", (event) => {
    slidesImg03.src = "src/img/carousel/slides03Img04.webp";
});

slides03Img04.addEventListener("mouseout", (event) => {
    slidesImg03.src = "src/img/carousel/slidesImg03.webp";
});

// metds mouseover mouseout 4
slides04Img01.addEventListener("mouseover", (event) => {
    slidesImg04.src = "src/img/carousel/slides04Img01.webp";
});

slides04Img01.addEventListener("mouseout", (event) => {
    slidesImg04.src = "src/img/carousel/slidesImg04.webp";
});

slides04Img02.addEventListener("mouseover", (event) => {
    slidesImg04.src = "src/img/carousel/slides04Img02.webp";
});

slides04Img02.addEventListener("mouseout", (event) => {
    slidesImg04.src = "src/img/carousel/slidesImg04.webp";
});

slides04Img03.addEventListener("mouseover", (event) => {
    slidesImg04.src = "src/img/carousel/slides04Img03.webp";
});

slides04Img03.addEventListener("mouseout", (event) => {
    slidesImg04.src = "src/img/carousel/slidesImg04.webp";
});

slides04Img04.addEventListener("mouseover", (event) => {
    slidesImg04.src = "src/img/carousel/slides04Img04.webp";
});

slides04Img04.addEventListener("mouseout", (event) => {
    slidesImg04.src = "src/img/carousel/slidesImg04.webp";
});

// metds mouseover mouseout 5
slides05Img01.addEventListener("mouseover", (event) => {
    slidesImg05.src = "src/img/carousel/slides05Img01.webp";
});

slides05Img01.addEventListener("mouseout", (event) => {
    slidesImg05.src = "src/img/carousel/slidesImg05.webp";
});

slides05Img02.addEventListener("mouseover", (event) => {
    slidesImg05.src = "src/img/carousel/slides05Img02.webp";
});

slides05Img02.addEventListener("mouseout", (event) => {
    slidesImg05.src = "src/img/carousel/slidesImg05.webp";
});

slides05Img03.addEventListener("mouseover", (event) => {
    slidesImg05.src = "src/img/carousel/slides05Img03.webp";
});

slides05Img03.addEventListener("mouseout", (event) => {
    slidesImg05.src = "src/img/carousel/slidesImg05.webp";
});

slides05Img04.addEventListener("mouseover", (event) => {
    slidesImg05.src = "src/img/carousel/slides05Img04.webp";
});

slides05Img04.addEventListener("mouseout", (event) => {
    slidesImg05.src = "src/img/carousel/slidesImg05.webp";
});