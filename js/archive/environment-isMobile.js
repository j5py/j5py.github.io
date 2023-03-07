function isMobile() {
    var boolean = false;
    (function(a, b) {

        // Regex source : http://detectmobilebrowsers.com/

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a.substr(0, 4))) boolean = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return boolean
}