document.addEventListener('DOMContentLoaded', function () {
    const letras = document.querySelectorAll('.encabezado-idpats .letras');

    setTimeout(function() {
        letras.forEach(function(letra) {
            letra.style.transform = 'translateY(0)';
        });
    }, 500); 
});
