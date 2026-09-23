import { scrollToBottom } from './scrollToBottom.js'

export const renderLogs = (message) => {
    const logs = document.getElementById('logs')
    const div = document.createElement('div')
    const text = document.createTextNode(message)
    div.appendChild(text)
    logs.appendChild(div)

    scrollToBottom('logs')
}
