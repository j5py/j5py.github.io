
function getDomain(main) {
    var fullHostName = window.location.hostname
      , onlyMainDomain = fullHostName.match(/\w*\.\w*$/)[0]
      ;
    return '.' + (main ? onlyMainDomain : fullHostName)
}

function getExpiration(days) {
    var actual = (new Date()).getTime()
      , milliseconds = 1000 * 60 * 60 * 24 * days
      , expiration = actual + milliseconds
      , formatUTC = (new Date(expiration)).toUTCString()
      ;
    return formatUTC
}

function setCookie(name, value, path, domain, expires, same, secure) {
    document.cookie = `${name}=${value}; path=${path}; domain=${domain}; expires=${expires}; SameSite=${same}${secure?'; Secure':';'}`
}


// Example of use

setCookie(
    'Example',
    'Any',
    '/',
    getDomain(true),
    getExpiration(365),
    'Lax',
    true
)
