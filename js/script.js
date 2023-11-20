const video = document.getElementById("my-video");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// URLs dos vídeos
let videos = ["./assets/videos/podcast01.mp4", "./assets/videos/podcast02.mp4"];

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
};

const moveLeft = () => {
  if (position <= 0) {
    position = videos.length - 1;
    video.src = videos[position];
    return;
  }
  video.src = videos[position - 1];
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

/* Hamburguer Menu */
const mobileBtn = document.querySelector("#btn-mobile");

function toggleMenu() {
  const nav = document.querySelector("#nav-menu");

  nav.classList.toggle("active");
}

mobileBtn.addEventListener("click", toggleMenu);
/* Hamburguer Menu */

/*Sticky Header*/
var stickyHeader = document.querySelector("#header");
var navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 100) {
    stickyHeader.style.padding = "10px 15px";

    if (window.matchMedia("(max-width: 870px)").matches) {
      navLinks.style.top = "5rem";
    }
  } else {
    stickyHeader.style.padding = "10px 15px";

    if (window.matchMedia("(max-width: 870px)").matches) {
      navLinks.style.top = "7.3rem";
    }
  }
});
/*Sticky Header*/

/*Sliders*/
const swiperTestimonial = new Swiper(".swiperTestimonial", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dragabble: true,
  },
});

var swiperServices = new Swiper(".swiperServices", {
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".services-next",
    prevEl: ".services-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dragabble: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
/*Sliders*/
