function getParameterDeep(name) {
    let fromSearch = new URLSearchParams(document.location.search).get(name)
      , indexOfDeepURL = document.location.href.indexOf('=https%')
      ;
    if (fromSearch) return fromSearch;
    else if (indexOfDeepURL > -1) {
        let parameter = (function() {
                let cut = document.location.href.substring(0, indexOfDeepURL)
                  , queryIndex = cut.lastIndexOf('?')
                  , separatorIndex = cut.lastIndexOf('&')
                  ;
                return cut.substring(
                    1 + (queryIndex > separatorIndex ? queryIndex : separatorIndex)
                )
            }())
          , deepURL = fromSearch.get(parameter)
          ;
        deepURL = new URLSearchParams(
            deepURL.substring(
                deepURL.indexOf('?')
            )
        );
        return deepURL.get(name)
    }
}
