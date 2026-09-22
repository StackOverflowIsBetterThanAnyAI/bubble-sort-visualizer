export const scrollToBottom = (id) => {
    const element = document.getElementById(id)
    element.scrollTop = element.scrollHeight
}
