app.common = {
    url: {
        moveSearchBeforeHash: () => {
            const query = location.hash.lastIndexOf('?');
            if (query > -1) {
                const end = location.hash.length
                    , hash = location.hash.substring(0, query)
                    , search = location.hash.substring(query, end)
                    ;
                location.hash = hash;
                location.search = search
            }
        },
        getHash: (string) => {
            const special = '\\\'`"@#$%&~<([{|}])>*+-/=,;:.!?'
                , accents = [
                                [/à|á|â/g,      'a'],
                                [/æ/g,          'ae'],
                                [/ç/g,          'c'],
                                [/è|é|ê|ë/g,    'e'],
                                [/ì|í|î|ï/g,    'i'],
                                [/ñ/g,          'n'],
                                [/ò|ó|ô/g,      'o'],
                                [/œ/g,          'oe'],
                                [/ù|ú|û|ü/g,    'u'],
                                [/ý|ÿ/g,        'y']
                            ]
                ;
            string = string.toLowerCase();
            for (unit of special) string = string.replace((new RegExp(`\\${unit}`, 'g')), '');
            for (unit of accents) string = string.replace(unit[0], unit[1]);
            return '#' + encodeURI(string.trim().replace(/\s+/g, '-')) 
        }
    },
    string: {
        getSingleSpacedLine: (string) => {
            return string.replace(/\s{2,}/g, ' ').trim()
        }
    },
    dom: {
        moveStyleAttribute: (node, removeRegEx, addBoolean, addString) => {
            const css = (node.getAttribute('style') || '').replace(removeRegEx, '').trim();
            if (addBoolean)
                node.setAttribute('style', (css.length ? css + ' ' : css) + addString);
            else node.setAttribute('style', css)
        }
    }
}