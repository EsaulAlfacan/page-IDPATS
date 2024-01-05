function downloadColorCreatorAsImage() {
    const form = document.querySelector('.color-creator');

    // Temporarily adjust the style of the form for the screenshot
    const originalStyle = form.getAttribute('style');
    form.style.width = '800px';
    form.style.height = '600px';
    form.style.display = 'absolute';
    form.style.flexDirection = 'row';
    form.style.justifyContent = 'space-between';
    form.style.alignItems = 'stretch';

    // Adjust each color section to take up equal width
    document.querySelectorAll('.color').forEach(color => {
        color.style.flex = '1';
    });

    // Set options for html2canvas
    const options = {
        width: 600,
        height: 155,
        windowWidth: 800,
        windowHeight: 600
    };

    // Use html2canvas to take a screenshot of the .palette-model section with specified options
    html2canvas(form, options).then(canvas => {
        // Reset the form's style to its original state
        form.setAttribute('style', originalStyle || '');

        // Crear un elemento de enlace para descargar la imagen
        let link = document.createElement('a');
        link.download = 'IDPATS-colors.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link); // Temporalmente añadir al cuerpo para asegurar que se pueda "hacer clic"
        link.click();
        document.body.removeChild(link); // Remover después de hacer clic

    });
}

// Add the event listener to the button
document.querySelector('.cssbuttons-io-button').addEventListener('click', function (event) {
    event.preventDefault();
    downloadColorCreatorAsImage();
});
