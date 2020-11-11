const videoBtn = document.querySelector('.js-btn-video');
const videoBlock = document.querySelector('.js-video-block');

videoBtn.addEventListener('click', openVideo);

function openVideo() {
    videoBlock.classList.add('active');
}