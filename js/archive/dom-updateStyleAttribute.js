
window.updateStyleAttribute = function(node, toRemoveRegex, toAddBoolean, toAddCSS) {
    var value = (node.getAttribute('style') || '').replace(toRemoveRegex, '').trim();
    if (toAddBoolean) node.setAttribute('style', (value.length ? value + ' ' : value) + toAddCSS);
    else node.setAttribute('style', value)
}


// Example of use

updateStyleAttribute(
    document.querySelector('#example'),
    /display\:\s*\w+\s*(!important)*;/g,
    true,
    'display: none;'
)
