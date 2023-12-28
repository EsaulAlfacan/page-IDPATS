// Agrega este código JavaScript para hacer que el menú hamburguesa sea clickeable
document.querySelector('.menu-icon').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
});

// Agrega este código JavaScript para mostrar u ocultar el menú al hacer clic en el ícono del menú hamburguesa
document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.lista');
    menu.classList.toggle('active');
});

