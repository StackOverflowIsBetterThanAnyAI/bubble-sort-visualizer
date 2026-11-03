import { scrollToBottom } from './scrollToBottom.js'

export const renderLogs = (message, className) => {
    const logs = document.getElementById('logs')
    const div = document.createElement('div')
    if (className) {
        div.classList.add(className)
    }
    const text = document.createTextNode(message)
    div.appendChild(text)
    logs.appendChild(div)

    scrollToBottom('logs')
}
