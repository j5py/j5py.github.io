function isMainDomain() {
    let wlh = window.location.hostname.replace('www.', '');
    return wlh.match(/\./g).length === 1 ? true : false
}
