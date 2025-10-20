const nextBtn = document.querySelector('.next-btn');
const heroVid = document.querySelector('.hero-video');

const videoList = [
    'videos/hero-1.mp4',
    'videos/hero-2.mp4',
    'videos/hero-3.mp4',
    'videos/hero-4.mp4'
];

let currentIndex = 0;

nextBtn.addEventListener('click', function() {
    // Use the modulo operator to loop through the video list
    currentIndex = (currentIndex + 1) % videoList.length;
    heroVid.src = videoList[currentIndex];
})