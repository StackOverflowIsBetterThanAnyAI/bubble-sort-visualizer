import { generateGrid } from './generateGrid.js'
import { shuffleArray } from './utils/shuffleArray.js'

const main = () => {
    const array = shuffleArray(Array.from({ length: 15 }, (_, i) => i))
    generateGrid(array)
}

main()
