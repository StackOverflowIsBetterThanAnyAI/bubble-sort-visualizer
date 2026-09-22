export const clearLogs = () => {
    const logs = document.getElementById('logs')
    if (logs) {
        logs.remove()
    }
}
