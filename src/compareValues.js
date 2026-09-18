import { resetElementStyle } from './utils/resetElementStyle.js'

export const compareValues = (array, cur, next, prev, max) => {
    const arr = [...array]
    if (prev >= 0) {
        const prevElement = document.getElementById(
            `array-element-${arr[prev]}`
        )
        prevElement.style.backgroundColor = '#fafafa'
    }
    const firstElement = document.getElementById(`array-element-${arr[cur]}`)
    firstElement.style.backgroundColor = '#21DD2B'

    const secondElement = document.getElementById(`array-element-${arr[next]}`)
    secondElement.style.backgroundColor = '#DD9B21'

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
