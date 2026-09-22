export const generateLogs = () => {
    const logs = document.createElement('logs')
    logs.id = 'logs'

    const logcontainer = document.getElementById('logcontainer')
    logcontainer.append(logs)
}
