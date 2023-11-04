const video = document.getElementById('my-video');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

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

//menu Mobile
const btnMobile = document.querySelector('#mobile-menu-btn');
const closeMobile = document.querySelector('#close-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu-box');

const setMenuOpen = () => {
    mobileMenu.style.display = "flex";
}

const setMenuClosed = () => {
    mobileMenu.style.display = "none";
}

//forte recomendação: usem jQuery, ajuda bastante a encurtar o código rs

btnMobile.addEventListener("click", setMenuOpen);
closeMobile.addEventListener("click", setMenuClosed);
