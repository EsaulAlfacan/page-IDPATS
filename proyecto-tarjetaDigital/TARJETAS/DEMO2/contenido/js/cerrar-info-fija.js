function cerrarInfo(element) {
    var infoFija = document.querySelector('.info__fija');
    var infoCerrada = element.parentNode; // Selecciona el contenedor .info que contiene el botón CERRAR

    if (infoFija && infoCerrada) {
        infoCerrada.style.display = 'none';
        infoFija.style.display = 'none';
    }
}