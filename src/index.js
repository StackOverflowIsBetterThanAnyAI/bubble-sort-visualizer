import { activeTimeouts } from './utils/sleep.js'
import { clearGrid } from './utils/clearGrid.js'
import { clearLogs } from './utils/clearLogs.js'
import { clearTimeouts } from './utils/clearTimeouts.js'
import { getGridLength } from './utils/getGridLength.js'
import { compareValues } from './utils/compareValues.js'
import { generateGrid } from './utils/generateGrid.js'
import { generateLogs } from './utils/generateLogs.js'
import { shuffleArray } from './utils/shuffleArray.js'

const main = (gridLength) => {
    clearTimeouts(activeTimeouts)
    clearLogs()
    clearGrid()
    const array = shuffleArray(Array.from({ length: gridLength }, (_, i) => i))
    generateGrid(array)
    generateLogs()
    compareValues(array, 0, 1, -1, array.length - 1)
}

let currentLength = getGridLength()
window.addEventListener('resize', () => {
    const newLength = getGridLength()

    if (newLength !== currentLength) {
        currentLength = newLength
        main(currentLength)
    }
})

document
    .getElementById('restart')
    .addEventListener('click', () => main(currentLength))

main(currentLength)
