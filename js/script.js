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
