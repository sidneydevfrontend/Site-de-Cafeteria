   

// const menuDiv = document.getElementById('menu-mobile')
// const btnAnimar = document.getElementById('btn-menu')

// menuDiv.addEventListener('click', anima)

// function animaMenu() {
//     menuDiv.classList.toggle('abrir')
//     btnAnimar.classList.toggle('ativo')
// }

const menuDiv = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu');

function animaMenu() {
    menuDiv.classList.toggle('abrir');
    btnAnimar.classList.toggle('ativo');
}

// Opcional: Fechar menu ao clicar em um link
menuDiv.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        menuDiv.classList.remove('abrir');
        btnAnimar.classList.remove('ativo');
    }
});

