const video = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['./assets/videos/podcast01.mp4', './assets/videos/podcast02.mp4'];

video.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        video.src = pictures[position];
        return;
    }
    video.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        video.src = pictures[position];
        return;
    }
    video.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);