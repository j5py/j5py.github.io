function onChange(getValue, invokeCallback, invokeOnInit) {
    setInterval(function() {
        let actual = getValue()
          , previous = localStorage.getItem('lastValue')
          ;
        if (String(actual) !== previous) {
            localStorage.setItem('lastValue', actual);
            if (previous || invokeOnInit) invokeCallback()
        }
    }, 100)
}
