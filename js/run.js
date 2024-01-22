run = {
    init: () => {
        render.setNav();
        run.start()
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
                    render.setContent(
                        process.content.getPageCards(input.fewPages[i]),
                        input.fewPages[i].pageTitle
                    ); break
                } i++
            }
            if (location.hash === '') {
                render.setContent(
                    process.content.getPageCards(input.fewPages[0]),
                    input.fewPages[0].pageTitle
                )
            } else if (notFound) render.set404()
        } else render.setContent(html.content.default,'Under Construction')
    },
    start: () => {
        run.route();
        window.onhashchange = run.route
    }
}
run.init()
