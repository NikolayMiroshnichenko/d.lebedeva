const btn = document.querySelectorAll('.js-open-btn');
const overlay = document.querySelector('.popup-overlay');

overlay.addEventListener('click', (e) => {
    if(e.target.dataset.close !== 'close') return;
    overlay.classList.remove('active');
})
btn.forEach(item => {
    item.addEventListener('click', openModal);
});

function openModal(e) {
    e.preventDefault();
    overlay.classList.add('active');
}