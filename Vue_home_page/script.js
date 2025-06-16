const lampBtn = document.getElementById("lampBtn");
const light = document.getElementById('light');
const menuImg = document.querySelector('.menuImg');
const navUl = document.querySelector('nav ul');


function toggleBtn() {
    lampBtn.classList.toggle('active');
    light.classList.toggle('on');
}

function toggleMenu() {
    navUl.classList.toggle('show-menu');
}

lampBtn.addEventListener('click', toggleBtn);
menuImg.addEventListener('click', toggleMenu);