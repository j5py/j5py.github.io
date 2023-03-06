function addScript(cacheBuster, fileURL, onloadCallback) {
    let script = document.createElement('script');
    if (cacheBuster)
        fileURL += '?' + Math.round(
            Math.random() * (new Date()).getTime()
        );
    script.setAttribute('src', fileURL);
    if (onloadCallback) script.onload = onloadCallback;
    document.querySelector('body').appendChild(script)
}
