export const swapValues = (arr, cur, next) => {
    if (arr[cur] > arr[next]) {
        ;[arr[cur], arr[next]] = [arr[next], arr[cur]]

        const gridContainer = document.getElementById('grid-container')
        setTimeout(() => {
            arr.forEach((val) => {
                const el = document.getElementById(`array-element-${val}`)
                gridContainer.appendChild(el)
            })
        }, 500)
    }
}
