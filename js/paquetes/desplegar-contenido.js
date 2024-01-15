function toggleContent(element) {
    var paquetesProductos = element.querySelector('.paquetes-productos');
    paquetesProductos.style.display = (paquetesProductos.style.display === 'none' || paquetesProductos.style.display === '') ? 'flex' : 'none';
}