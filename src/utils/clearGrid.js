export const clearGrid = () => {
    const arrayElements = Array.from(
        document.querySelectorAll('#grid-container > span')
    )
    const gridContainer = document.getElementById('grid-container')
    arrayElements.forEach((item) => gridContainer.removeChild(item))
}
