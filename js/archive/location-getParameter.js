function getParameter(name) {
    return new URLSearchParams(document.location.search).get(name)
}
