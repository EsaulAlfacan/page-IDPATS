let itemsLoaded = 0;
const itemsPerLoad = 15;

const container = document.querySelector('.contenedor-paletas');

container.addEventListener('scroll', () => {
    if (container.scrollHeight - container.scrollTop <= container.clientHeight) {
        loadMoreItems();
    }
});

function loadMoreItems() {
    for (let i = itemsLoaded; i < itemsLoaded + itemsPerLoad; i++) {
        // Añadir elementos al contenedor
    }
    itemsLoaded += itemsPerLoad;
}
