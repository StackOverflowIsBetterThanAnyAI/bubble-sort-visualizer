export let activeTimeouts = []

export const sleep = (ms) => {
    return new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
            resolve()
        }, ms)
        activeTimeouts.push(timeoutId)
    })
}
