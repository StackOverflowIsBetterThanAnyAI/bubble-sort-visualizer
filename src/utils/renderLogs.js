import { scrollToBottom } from './scrolltoBottom.js'

export const renderLogs = (activeLogs, message) => {
    activeLogs.push(message)
    const logs = document.getElementById('logs')
    const div = document.createElement('div')
    const text = document.createTextNode(message)
    div.appendChild(text)
    logs.appendChild(div)

    scrollToBottom('logs')
}
