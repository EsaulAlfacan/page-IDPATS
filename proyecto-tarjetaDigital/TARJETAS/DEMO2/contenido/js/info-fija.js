
function mostrarInfo(tipo) {
    var contenido = document.querySelector('.info[data-tipo="' + tipo + '"]');

    if (contenido) {
        contenido.style.display = 'flex';
    }
}

// Función personalizada para buscar elementos que contengan cierto texto
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

// Extender la funcionalidad del método :contains en selecciones
document.querySelectorAll = function (selector) {
    return Array.from(contains(selector, arguments[1]));
};
