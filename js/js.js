window.js = {
    string: {
        slugify: (string) => {
            return `#${encodeURI(string.toLowerCase().replace(/\s/g, '-'))}`
        }
    },
    dom: {
        updateStyleAttribute: (node, removeStringRegex, addStringCondition, stringToAdd) => {
            let css = (node.getAttribute('style') || '').replace(removeStringRegex, '').trim();
            if (addStringCondition) node.setAttribute('style', (css.length ? css + ' ' : css) + stringToAdd);
            else node.setAttribute('style', css)
        }
    }
}
