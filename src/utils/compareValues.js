import { renderLogs } from './renderLogs.js'
import { resetElementStyle } from './resetElementStyle.js'
import { sleep } from './sleep.js'
import { swapValues } from './swapValues.js'

export const compareValues = async (array, cur, next, prev, max) => {
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

    await sleep(500)
    swapValues(arr, cur, next)

    if (next < max) {
        await sleep(500)
        return await compareValues(arr, cur + 1, next + 1, prev + 1, max)
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

            await sleep(500)
            smallerElement.style.backgroundColor = '#fafafa'
            resetElementStyle(largerElement)
            renderLogs(`${largerElement.textContent} has been sorted correctly`)

            await sleep(1000)
            return await compareValues(arr, 0, 1, -1, max - 1)
        } else {
            const firstNumber = parseInt(firstElement.textContent)
            const secondNumber = parseInt(secondElement.textContent)

            const largerElement =
                firstNumber > secondNumber ? firstElement : secondElement
            const smallerElement =
                firstNumber === parseInt(largerElement.textContent)
                    ? secondElement
                    : firstElement

            resetElementStyle(largerElement)
            resetElementStyle(smallerElement)
            renderLogs(`${largerElement.textContent} has been sorted correctly`)
            renderLogs(
                `${smallerElement.textContent} has been sorted correctly`
            )
            renderLogs('The whole list has been sorted correctly')
        }
    }
}
