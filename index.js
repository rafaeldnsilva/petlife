let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
    })
    
});

const hamburgerIcon = document.querySelector('.hamburger-icon');
const nav = document.getElementById('main-nav');

hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});