document.addEventListener("DOMContentLoaded", async () => {
    const clearCacheAndReload = async () => {
        if ('caches' in window) {
            try {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
                location.reload(true);
            } catch (error) {
                console.error('Error al limpiar la caché:', error);
            }
        }
    };

    const updateClasses = () => {
        document.querySelector('.btn-recarga').classList.remove('activo');
        document.querySelector('.fondo-actualizar').classList.remove('activo');
    };

    const forceReload = window.location.search.includes("forceReload=true");

    // Evento clic en el botón "Actualizar"
    document.getElementById("refreshButton").addEventListener("click", async (event) => {
        event.preventDefault();
        await clearCacheAndReload();
    });

    // Evento clic en el botón "Ya he actualizado"
    document.getElementById("ya-actualice").addEventListener("click", updateClasses);

    // Agregar evento táctil al botón "Actualizar" para dispositivos táctiles
    document.getElementById("refreshButton").addEventListener("touchend", async (event) => {
        event.preventDefault();
        await clearCacheAndReload();
    });

    // Configurar un temporizador para ejecutar updateClasses después de 15 segundos
    setTimeout(updateClasses, 10000);

    // Mostrar un mensaje si se debe forzar la recarga
    if (forceReload) {
        // Limpiar la caché y recargar después de mostrar el mensaje
        await clearCacheAndReload();
    }
});
