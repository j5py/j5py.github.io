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
        getHash: (string, hash = 1) => {
            const special = '\\\'`"@#$%&~<([{|}])>*+/=,;:.!?'
                , accents = [
                    [/à|á|â/g,      'a'],
                    [/À|Á|Â/g,      'A'],
                    [/æ/g,          'ae'],
                    [/Æ/g,          'AE'],
                    [/ç/g,          'c'],
                    [/Ç/g,          'C'],
                    [/è|é|ê|ë/g,    'e'],
                    [/È|É|Ê|Ë/g,    'E'],
                    [/ì|í|î|ï/g,    'i'],
                    [/Ì|Í|Î|Ï/g,    'I'],
                    [/ñ/g,          'n'],
                    [/Ñ/g,          'N'],
                    [/ò|ó|ô/g,      'o'],
                    [/Ò|Ó|Ô/g,      'O'],
                    [/œ/g,          'oe'],
                    [/Œ/g,          'OE'],
                    [/ù|ú|û|ü/g,    'u'],
                    [/Ù|Ú|Û|Ü/g,    'U'],
                    [/ý|ÿ/g,        'y'],
                    [/Ý|Ÿ/g,        'Y']
                ];
            for (unit of special) string = string.replace((new RegExp(`\\${unit}`, 'g')), '');
            for (unit of accents) string = string.replace(unit[0], unit[1]);
            return '#' + encodeURI(string.trim().replace(/\s+/g, '-').toLowerCase())
        }
    },
    string: {
        getSingleSpacedLine: (string) => {
            return string.replace(/\s{2,}/g, ' ').trim()
        }
    },
    dom: {
        moveStyleAttribute: (node, removeStringRegex, addStringCondition, stringToAdd) => {
            const css = (node.getAttribute('style') || '').replace(removeStringRegex, '').trim();
            if (addStringCondition) node.setAttribute('style', (css.length ? css + ' ' : css) + stringToAdd);
            else node.setAttribute('style', css)
        }
    }
}