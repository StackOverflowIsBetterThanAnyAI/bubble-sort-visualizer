import { clearAllTimeouts } from './utils/clearAllTimeouts.js'
import { clearGrid } from './utils/clearGrid.js'
import { compareValues } from './utils/compareValues.js'
import { generateGrid } from './utils/generateGrid.js'
import { shuffleArray } from './utils/shuffleArray.js'

let activeTimeouts = []

const main = () => {
    clearAllTimeouts(activeTimeouts)
    clearGrid()

    const array = shuffleArray(Array.from({ length: 15 }, (_, i) => i))
    generateGrid(array)
    compareValues(array, 0, 1, -1, array.length - 1, activeTimeouts)
}

const restart = document.getElementById('restart')
restart.addEventListener('click', main)

main()
