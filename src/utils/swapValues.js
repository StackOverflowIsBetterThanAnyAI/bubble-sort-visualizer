import { renderLogs } from './renderLogs.js'

export const swapValues = (arr, cur, next, activeTimeouts, activeLogs) => {
    renderLogs(activeLogs, `Comparing ${arr[next]} with ${arr[cur]}`)
    if (arr[cur] > arr[next]) {
        ;[arr[cur], arr[next]] = [arr[next], arr[cur]]
        renderLogs(activeLogs, `Swapping ${arr[next]} with ${arr[cur]}`)

        const gridContainer = document.getElementById('grid-container')

        const timeoutId = setTimeout(() => {
            arr.forEach((val) => {
                const el = document.getElementById(`array-element-${val}`)
                gridContainer.appendChild(el)
            })
        }, 500)
        activeTimeouts.push(timeoutId)
    }
}
