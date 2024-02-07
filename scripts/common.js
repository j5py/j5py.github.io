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
        getSingleSpacedLine: (text) => {
            return text.replace(/\s{2,}/g, ' ').trim()
        },
        getSlug: (title, lowercase = true) => {
            const accents = [
                        [/à|á|â/g,'a'],
                        [/À|Á|Â/g,'A'],
                        [/æ/g,'ae'],
                        [/Æ/g,'AE'],
                        [/ç/g,'c'],
                        [/Ç/g,'C'],
                        [/è|é|ê|ë/g,'e'],
                        [/È|É|Ê|Ë/g,'E'],
                        [/ì|í|î|ï/g,'i'],
                        [/Ì|Í|Î|Ï/g,'I'],
                        [/ñ/g,'n'],
                        [/Ñ/g,'N'],
                        [/ò|ó|ô/g,'o'],
                        [/Ò|Ó|Ô/g,'O'],
                        [/œ/g,'oe'],
                        [/Œ/g,'OE'],
                        [/ù|ú|û|ü/g,'u'],
                        [/Ù|Ú|Û|Ü/g,'U'],
                        [/ý|ÿ/g,'y'],
                        [/Ý|Ÿ/g,'Y']
                    ]
                ;
            for (special of '\\\'`"@#$%&~<([{|}])>*+-/=,;:.!?') {
                if (title.indexOf(special) > -1)
                    title = title.replace((new RegExp(`\\${special}`, 'g')), '')
            }
            title = title.trim().replace(/\s+/g, '-');
            for (backup of accents) title = title.replace(backup[0], backup[1]);
            return `#${encodeURI(lowercase ? title.toLowerCase() : title)}`
        }
    }
}