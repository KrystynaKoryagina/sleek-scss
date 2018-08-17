const body = document.body;
const overlay = document.createElement('div');
overlay.classList.add('overlay');
const btnOpen = document.getElementById('header').querySelector('.menu-btn');
const btnClose = document.getElementById('aside').querySelector('.menu-btn-close');

function toggleAside(e) {
    body.classList.toggle('show-aside');
    if(e.target.closest('.menu-btn')) body.insertBefore(overlay, body.firstElementChild);
    if(e.target.classList.contains('overlay') || e.target.closest('.menu-btn-close'))  overlay.remove();
}

btnOpen.addEventListener('click', toggleAside);
btnClose.addEventListener('click', toggleAside);
overlay.addEventListener('click', toggleAside);

