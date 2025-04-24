let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let videoContainer = document.querySelector('#video-slider');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.querySelector("#menu-bar");
    const navbar = document.querySelector(".navbar");

    menuBar.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target) && !menuBar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Video Switching Logic

let currentIndex = 0;
const videoSources = Array.from(videoBtn).map(btn => btn.getAttribute('data-src'));

function smoothVideoTransition(newSrc) {
    let tempVideo = document.createElement('video'); // Create a temporary video element
    tempVideo.src = newSrc;
    tempVideo.muted = true;
    tempVideo.preload = "auto";

    tempVideo.onloadeddata = () => {
        videoContainer.style.transition = "opacity 0.5s ease-in-out"; // Shorter fade-out
        videoContainer.style.opacity = "0"; // Start fade out

        setTimeout(() => {
            videoContainer.src = newSrc;
            videoContainer.play();
            videoContainer.style.opacity = "1"; // Fade in instantly after switching
        }, 500); // Reduced fade-out delay
    };
}

// Manual Video Switch
videoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        currentIndex = index;
        smoothVideoTransition(videoSources[index]);
    });
});

// Auto-Switching Video
function autoSwitchVideo() {
    currentIndex = (currentIndex + 1) % videoSources.length;
    document.querySelector('.controls .active').classList.remove('active');
    videoBtn[currentIndex].classList.add('active');
    smoothVideoTransition(videoSources[currentIndex]);
}

// Auto-change video every 7 seconds
setInterval(autoSwitchVideo, 6000);

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
    },
});
