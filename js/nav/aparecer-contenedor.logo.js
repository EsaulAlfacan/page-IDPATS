document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.contenedor-logo .logo-nav, .contenedor-logo h1');
    
    // Agrega una pequeña demora para que la animación se ejecute después de la carga de la página.
    setTimeout(function() {
        elements.forEach(function(element) {
            element.style.transform = 'translateX(0)';
        });
    }, 300);
});
