function getUniqueID() {
    let actualTimestamp = (new Date()).getTime()
      , randomInteger = Math.round(actualTimestamp * Math.random())
      , identifier = String(actualTimestamp) + String(randomInteger)
      ;
    return identifier.slice(0, 20)
}
