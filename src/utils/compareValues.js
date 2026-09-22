import { renderLogs } from './renderLogs.js'
import { resetElementStyle } from './resetElementStyle.js'
import { swapValues } from './swapValues.js'

export const compareValues = (
    array,
    cur,
    next,
    prev,
    max,
    activeTimeouts,
    activeLogs
) => {
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

    swapValues(arr, cur, next, activeTimeouts, activeLogs)

    if (next < max) {
        const timeoutId = setTimeout(
            () =>
                compareValues(
                    arr,
                    cur + 1,
                    next + 1,
                    prev + 1,
                    max,
                    activeTimeouts,
                    activeLogs
                ),
            500
        )
        activeTimeouts.push(timeoutId)
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

            const timeoutId1 = setTimeout(() => {
                smallerElement.style.backgroundColor = '#fafafa'
                resetElementStyle(largerElement)
                renderLogs(
                    activeLogs,
                    `${largerElement.textContent} has been sorted correctly`
                )
            }, 500)
            activeTimeouts.push(timeoutId1)

            const timeoutId2 = setTimeout(
                () =>
                    compareValues(
                        arr,
                        0,
                        1,
                        -1,
                        max - 1,
                        activeTimeouts,
                        activeLogs
                    ),
                1000
            )
            activeTimeouts.push(timeoutId2)
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
            renderLogs(
                activeLogs,
                `${largerElement.textContent} has been sorted correctly`
            )
            renderLogs(
                activeLogs,
                `${smallerElement.textContent} has been sorted correctly`
            )
        }
    }
}
