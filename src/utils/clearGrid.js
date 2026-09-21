export const clearGrid = () => {
    const gridContainer = document.getElementById('grid-container')
    if (gridContainer) {
        gridContainer.remove()
    }
}
