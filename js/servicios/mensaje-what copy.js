// Selecciona todos los enlaces con la clase "whatsapp-link"
var whatsappLinks = document.querySelectorAll('.whatsapp-link');

// Agrega un oyente de eventos a cada enlace
whatsappLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var phoneNumber = link.getAttribute('data-phone');
        var message = link.getAttribute('data-message');

        var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
        window.open(whatsappURL, '_blank');
    });
});