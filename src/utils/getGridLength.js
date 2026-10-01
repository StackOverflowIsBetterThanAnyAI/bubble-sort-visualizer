export const getGridLength = () => {
    const width = window.innerWidth
    return width < 480 ? 8 : width < 768 ? 12 : 15
}
