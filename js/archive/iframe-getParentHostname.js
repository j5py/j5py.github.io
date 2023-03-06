function getParentHostname() {
    if (window.location !== window.parent.location)
        return document.referrer;
    else return document.location.hostname
}
