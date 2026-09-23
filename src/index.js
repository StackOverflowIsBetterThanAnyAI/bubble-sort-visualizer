import { clearGrid } from './utils/clearGrid.js'
import { clearLogs } from './utils/clearLogs.js'
import { compareValues } from './utils/compareValues.js'
import { generateGrid } from './utils/generateGrid.js'
import { generateLogs } from './utils/generateLogs.js'
import { shuffleArray } from './utils/shuffleArray.js'

const main = () => {
    clearLogs()
    clearGrid()

    const array = shuffleArray(Array.from({ length: 15 }, (_, i) => i))
    generateGrid(array)
    generateLogs()
    compareValues(array, 0, 1, -1, array.length - 1)
}

const restart = document.getElementById('restart')
restart.addEventListener('click', main)

main()
