import { renderLogs } from './renderLogs.js'
import { sleep } from './sleep.js'

export const swapValues = async (arr, cur, next, activeLogs) => {
    renderLogs(activeLogs, `Comparing ${arr[next]} with ${arr[cur]}`)
    if (arr[cur] > arr[next]) {
        await sleep(500)
        ;[arr[cur], arr[next]] = [arr[next], arr[cur]]
        renderLogs(activeLogs, `Swapping ${arr[next]} with ${arr[cur]}`)

        const gridContainer = document.getElementById('grid-container')
        arr.forEach((val) => {
            const el = document.getElementById(`array-element-${val}`)
            gridContainer.appendChild(el)
        })
    }
}
