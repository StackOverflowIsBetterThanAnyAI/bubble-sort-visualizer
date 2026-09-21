import { clearGrid } from './utils/clearGrid.js'
import { compareValues } from './compareValues.js'
import { generateGrid } from './generateGrid.js'
import { shuffleArray } from './utils/shuffleArray.js'

const main = () => {
    const array = shuffleArray(Array.from({ length: 15 }, (_, i) => i))
    clearGrid()
    generateGrid(array)
    compareValues(array, 0, 1, -1, array.length - 1)
}

const restart = document.getElementById('restart')
restart.addEventListener('click', main)

main()
