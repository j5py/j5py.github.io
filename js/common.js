app.common = {
    location: {
        moveSearchBeforeHash: () => {
            let cut = location.hash.lastIndexOf('?');
            if (cut > -1) {
                let end = location.hash.length
                  , hash = location.hash.substring(0, cut)
                  , search = location.hash.substring(cut, end)
                  ;
                location.hash = hash;
                location.search = search
            }
        }
    },
    dom: {
        moveStyleAttribute: (node, removeStringRegex, addStringCondition, stringToAdd) => {
            let css = (node.getAttribute('style') || '').replace(removeStringRegex, '').trim();
            if (addStringCondition) node.setAttribute('style', (css.length ? css + ' ' : css) + stringToAdd);
            else node.setAttribute('style', css)
        }
    },
    string: {
        getSlug: (app) => {
            return `#${encodeURI(app.toLowerCase().replace(/\s+((\/|\&)\s)?/g, '-'))}`
        },
        getSingleSpacedLine: (app) => {
            return app.replace(/\s{2,}/g, ' ').trim()
        }
    }
}