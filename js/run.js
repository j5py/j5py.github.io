run = {
    init: () => {
        render.nav.set();
        run.start()
    },
    start: () => {
        run.route();
        window.onhashchange = run.route
    },
    route: () => {
        essential.location.ensureSearchBeforeHash();
        let i = 0
          , notFound = true
          ;
        if (input.fewPages.length) {
            while (i < input.fewPages.length) {
                if (location.hash === essential.string.slugify(input.fewPages[i].pageTitle)) {
                    notFound = false;
                    render.content.setPage(
                        process.content.getPageCards(input.fewPages[i]),
                        input.fewPages[i].pageTitle
                    ); break
                } i++
            }
            if (location.hash === '') {
                render.content.setPage(
                    process.content.getPageCards(input.fewPages[0]),
                    input.fewPages[0].pageTitle
                )
            } else if (notFound) render.content.set404()
        } else render.content.setPage(html.content.default,'Under Construction')
    }
}
run.init()
