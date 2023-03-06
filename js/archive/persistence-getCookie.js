function getCookie(name) {
    var stringStart = document.cookie.indexOf(name), cut;
    if (stringStart > -1) {
        cut = document.cookie.substring(stringStart + name.length + 1);
        var stringEnd = cut.indexOf(';');
        if (stringEnd > -1) cut = cut.substring(0, stringEnd)
    } return cut
}