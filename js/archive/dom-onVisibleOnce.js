function onVisibleOnce() {
    var node = document.querySelector('#example');
    if (node) {
        var nodeTop = node.offsetTop
          , nodeBottom = nodeTop + node.offsetHeight
          , screenTop = window.scrollY
          , screenBottom = screenTop + window.innerHeight
          ;
        if (screenBottom > nodeTop && screenTop < nodeBottom) {
            window.removeEventListener('scroll', onVisibleOnce);

            // Add your code here
            // ...

        }
    }
}
window.addEventListener('scroll', onVisibleOnce);
