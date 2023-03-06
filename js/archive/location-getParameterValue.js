function getParameterValue(name, deep) {
    let fromSearch = new URLSearchParams(document.location.search)
      , valueContainsURL = document.location.href.indexOf('=https%')
      ;
    if (deep && valueContainsURL > -1) {
        let parameter = (function() {
                let cut = document.location.href.substring(0, valueContainsURL)
                  , queryIndex = cut.lastIndexOf('?')
                  , separatorIndex = cut.lastIndexOf('&')
                  ;
                return cut.substring(
                    1 + (queryIndex > separatorIndex ? queryIndex : separatorIndex)
                )
            }())
          , fromParameter = fromSearch.get(parameter)
          ;
        fromParameter = new URLSearchParams(
            fromParameter.substring(
                fromParameter.indexOf('?')
            )
        );
        return fromParameter.get(name)
    } else return fromSearch.get(name)
}
