function isWebviewIOS() {
    var userAgent = window.navigator.userAgent.toLowerCase()
      , safari = /safari/.test(userAgent)
      , ios = /iphone|ipod|ipad/.test(userAgent)
      ;
    if(ios) {
        if (safari) return false;
        else if (!safari) return true
    } else return false
}
