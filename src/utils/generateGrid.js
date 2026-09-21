export const generateGrid = (array) => {
    const gridContainer = document.createElement('div')
    gridContainer.id = 'grid-container'

    for (const i in array) {
        const element = document.createElement('span')
        element.id = `array-element-${array[i]}`
        element.classList.add('array-element')
        element.style.height = `calc(48px + 24px * ${array[i]})`
        const textNode = document.createTextNode(array[i])
        element.append(textNode)
        gridContainer.append(element)
    }

    const main = document.getElementById('main')
    main.append(gridContainer)
}
