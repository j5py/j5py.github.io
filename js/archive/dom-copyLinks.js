function copyLinks() {
    copy(Array.from(document.querySelectorAll('a')).map(a => a.href))
}