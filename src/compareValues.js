import { resetElementStyle } from './utils/resetElementStyle.js'
import { swapValues } from './utils/swapValues.js'

export const compareValues = (array, cur, next, prev, max) => {
    const arr = [...array]

    if (prev >= 0) {
        const prevElement = document.getElementById(
            `array-element-${arr[prev]}`
        )
        prevElement.style.backgroundColor = '#fafafa'
    }

    const firstElement = document.getElementById(`array-element-${arr[cur]}`)
    firstElement.style.backgroundColor = '#a3e635'
    firstElement.style.outlineColor = '#fafafa'

    const secondElement = document.getElementById(`array-element-${arr[next]}`)
    secondElement.style.backgroundColor = '#fde047'
    secondElement.style.outlineColor = '#fafafa'

    swapValues(arr, cur, next)

    if (next < max) {
        return setTimeout(
            () => compareValues(arr, cur + 1, next + 1, prev + 1, max),
            500
        )
    } else {
        if (max > 1) {
            const firstNumber = parseInt(firstElement.textContent)
            const secondNumber = parseInt(secondElement.textContent)

            const largerElement =
                firstNumber > secondNumber ? firstElement : secondElement
            const smallerElement =
                firstNumber === parseInt(largerElement.textContent)
                    ? secondElement
                    : firstElement

            setTimeout(() => {
                smallerElement.style.backgroundColor = '#fafafa'
                resetElementStyle(largerElement)
            }, 500)
            return setTimeout(() => compareValues(arr, 0, 1, -1, max - 1), 1000)
        } else {
            resetElementStyle(firstElement)
            resetElementStyle(secondElement)
        }
    }
}
