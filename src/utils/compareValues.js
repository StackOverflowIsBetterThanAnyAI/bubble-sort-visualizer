import { renderLogs } from './renderLogs.js'
import { resetElementStyle } from './resetElementStyle.js'
import { sleep } from './sleep.js'
import { swapValues } from './swapValues.js'

const getElement = (value) => document.getElementById(`array-element-${value}`)

const markSorted = (arr, index) => {
    resetElementStyle(getElement(arr[index]))
    renderLogs(`${arr[index]} has been sorted correctly`, 'sorted')
}

export const compareValues = async (
    array,
    cur,
    next,
    prev,
    max,
    lastSwap = -1
) => {
    const arr = [...array]

    if (prev >= 0) {
        const prevElement = getElement(arr[prev])
        prevElement.style.backgroundColor = '#fafafa'
    }

    await sleep(400)
    renderLogs(`Comparing ${arr[next]} with ${arr[cur]}`, 'comparing')

    const firstElement = getElement(arr[cur])
    firstElement.style.backgroundColor = '#a3e635'
    firstElement.style.outlineColor = '#fafafa'

    const secondElement = getElement(arr[next])
    secondElement.style.backgroundColor = '#fde047'
    secondElement.style.outlineColor = '#fafafa'

    if (await swapValues(arr, cur, next)) {
        lastSwap = cur
    }

    if (next < max) {
        await sleep(400)
        return await compareValues(
            arr,
            cur + 1,
            next + 1,
            prev + 1,
            max,
            lastSwap
        )
    }

    // everything right of the last swap was not moved anymore and is final
    const sortedFrom = Math.max(lastSwap + 1, 1)
    const isDone = lastSwap <= 0

    await sleep(400)
    if (!isDone && sortedFrom === max) {
        getElement(arr[max - 1]).style.backgroundColor = '#fafafa'
    }
    markSorted(arr, max)

    if (!isDone && sortedFrom < max) {
        const skipped = arr.slice(sortedFrom, max)
        renderLogs(
            `No swaps after ${arr[lastSwap]}: ${skipped.join(', ')} ${skipped.length === 1 ? 'is' : 'are'} already in place`,
            'optimization'
        )
        for (let i = max - 1; i >= sortedFrom; i--) {
            await sleep(400)
            markSorted(arr, i)
        }
        renderLogs(
            `Saved ${max - 1 - lastSwap} comparison(s) in the next pass`,
            'optimization'
        )
    }

    if (isDone) {
        const skippedPasses = max - 1
        if (skippedPasses > 0) {
            renderLogs(
                lastSwap === -1
                    ? 'No swaps in this pass: the list is already sorted'
                    : `No swaps after ${arr[0]}: the list is already sorted`,
                'optimization'
            )
        }
        for (let i = max - 1; i >= 0; i--) {
            await sleep(skippedPasses > 0 ? 400 : 0)
            markSorted(arr, i)
        }
        if (skippedPasses > 0) {
            const savedComparisons = (skippedPasses * max) / 2
            renderLogs(
                `Saved ${skippedPasses} pass${skippedPasses > 1 ? 'es' : ''} with ${savedComparisons} comparison${savedComparisons > 1 ? 's' : ''}`,
                'optimization'
            )
        }
        renderLogs('The whole list has been sorted correctly', 'sorted')
        return
    }

    await sleep(800)
    return await compareValues(arr, 0, 1, -1, lastSwap)
}
