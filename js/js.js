window.js = {
    string: {
        slugify: (string) => {
            return `#${encodeURI(string.toLowerCase().replace(/\s/g, '-'))}`
        }
    }
}
