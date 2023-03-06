function moveNode(child, position, parent) {
    var temporary = document.createElement('div');
    if (position === 'afterbegin') {
        parent.prepend(temporary);
        temporary.before(child)
    } else if (position === 'beforeend') {
        parent.append(temporary);
        temporary.after(child)
    } temporary.remove()
}
