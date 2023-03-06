function getPageViewsPerSession() {
    var time = new Date().getTime()
      , session = 60 * 30 * 1000
      , start = localStorage.getItem('sessionStart')
      , reset
      , count
      ;
    if (start) {
        if (time <  Number(start) + session)
            reset = false;
        else reset = true
    } else {
        localStorage.setItem('sessionStart', time);
        reset = true
    }
    if (reset) count = 1;
    else count = 1 + Number(localStorage.getItem('sessionPageViews'));
    localStorage.setItem('sessionPageViews', count);
    return count
}