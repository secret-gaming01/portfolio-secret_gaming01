const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    menuBtn.classList.toggle('open'); // ⭐ active le X
});
