// Función de "cache busting"
function cacheBust(url) {
    const timestamp = new Date().getTime(); // Genera un timestamp único
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}_=${timestamp}`;
}

// Aplica "cache busting" a los enlaces y scripts
const resourcesToCacheBust = [
    'estilo1',
    'estilo2',
    'estilo3',
    'estilo4',
    'estilo5',
    'estilo6',
    'estilo7',
    'estilo8',
    'estilo9',
    'estilo10',
    'estilo11',
    'estilo12',
    'estilo13',
    'estilo14',
    'estilo15',
    'estilo16',
    'estilo17',
    'estilo18',
    'estilo19',
    'estilo20',
    'scrip1',
    'scrip2',
    'scrip3',
    'scrip4',
    'scrip5',
    'scrip6',
    'scrip7',
    'scrip8',
    'scrip9',
    'scrip10',
    'scrip11',
    'scrip12',
    'scrip13',
    'scrip14',
    'scrip15',
    'scrip16',
    'scrip17',
    'scrip18',
    'scrip19',
    'scrip20',

];

resourcesToCacheBust.forEach(resourceId => {
    const resourceElement = document.getElementById(resourceId);

    if (resourceElement) {
        resourceElement.src = cacheBust(resourceElement.src);
    }
});