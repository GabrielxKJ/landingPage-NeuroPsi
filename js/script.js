const video = document.getElementById('my-video');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtnMobile = document.querySelector('#mobile-video #right-btn');
const leftBtnMobile = document.querySelector('#mobile-video #left-btn');

// URLs dos vídeos
let videos = ['./assets/videos/podcast01.mp4', './assets/videos/podcast02.mp4'];

// Definir o atributo src diretamente no elemento de vídeo
video.src = videos[0];
let position = 0;

const moveRight = () => {
    if (position >= videos.length - 1) {
        position = 0;
        video.src = videos[position];
        return;
    }
    video.src = videos[position + 1];
    position++;
}

const moveLeft = () => {
    if (position <= 0) {
        position = videos.length - 1;
        video.src = videos[position];
        return;
    }
    video.src = videos[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
rightBtnMobile.addEventListener("click", moveRight);
leftBtnMobile.addEventListener("click", moveLeft);

//menu Mobile start
const btnMobile = document.querySelector('#mobile-menu-btn');
const closeMobile = document.querySelector('#close-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu-box');
const mobileMenuItem = $('.mobile-nav-item')

const setMenuOpen = () => {
    mobileMenu.style.display = "flex";
}

const setMenuClosed = () => {
    mobileMenu.style.display = "none";
}

btnMobile.addEventListener("click", setMenuOpen);
closeMobile.addEventListener("click", setMenuClosed);
mobileMenuItem.click(setMenuClosed);
//menu Mobile end

//function slide carroussel-card - depoimentos
const carrousselCards = $(".carroussel-card");
let currentCardIndex = 0;

function hideAllCards() {
    carrousselCards.hide();
}

function showNextCard() {
    hideAllCards();
    carrousselCards.eq(currentCardIndex).fadeIn(750);
    currentCardIndex = (currentCardIndex + 1) % carrousselCards.length;
}

showNextCard();

const sliderInterval = setInterval(showNextCard, 9000);
//function slide carroussel-card - depoimentos end