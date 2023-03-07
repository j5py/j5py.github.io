function getDomain(main) {
    var fullHostName = window.location.hostname
      , onlyMainDomain = fullHostName.match(/\w*\.\w*$/)[0]
      ;
    return '.' + (main ? onlyMainDomain : fullHostName)
}