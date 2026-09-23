import { clearGrid } from './utils/clearGrid.js'
import { clearLogs } from './utils/clearLogs.js'
import { compareValues } from './utils/compareValues.js'
import { generateGrid } from './utils/generateGrid.js'
import { generateLogs } from './utils/generateLogs.js'
import { shuffleArray } from './utils/shuffleArray.js'

let activeLogs = []

const main = () => {
    clearLogs()
    clearGrid()

    const array = shuffleArray(Array.from({ length: 15 }, (_, i) => i))
    generateGrid(array)
    generateLogs()
    compareValues(array, 0, 1, -1, array.length - 1, activeLogs)
}

const restart = document.getElementById('restart')
restart.addEventListener('click', main)

main()
