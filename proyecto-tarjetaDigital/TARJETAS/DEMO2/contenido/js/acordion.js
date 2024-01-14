// Selecciona todos los botones "accordion"
var acc = document.getElementsByClassName("accordion");

// Itera a través de cada botón "accordion"
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Este botón
        var panel = this.nextElementSibling;

        // Alterna entre añadir y remover la clase activa, para destacar el botón que controla el panel
        this.classList.toggle("active");

        // Alterna entre ocultar y mostrar el panel de contenido
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
