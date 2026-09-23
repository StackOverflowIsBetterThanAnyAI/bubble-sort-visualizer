export const clearTimeouts = (activeTimeouts) => {
    activeTimeouts.forEach((id) => clearTimeout(id))
    activeTimeouts = []
}
