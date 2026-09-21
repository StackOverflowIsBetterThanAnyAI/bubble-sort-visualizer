export const clearAllTimeouts = (activeTimeouts) => {
    activeTimeouts.forEach((id) => clearTimeout(id))
    activeTimeouts = []
}
