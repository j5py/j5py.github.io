run = {
    init: () => {
        render.nav.set();
        render.footer.set();
        window.onhashchange = run.route;
        run.route()
    },
    route: () => {
        common.location.moveSearchBeforeHash();
        let i = 0, notFound = 1;
        if (input.fewPages.length) {
            if (location.hash === '') {
                render.page.set(page.get(input.fewPages[0]), input.fewPages[0].pageTitle);
                notFound = 0;
            } else while (i < input.fewPages.length) {
                if (location.hash === common.string.getSlug(input.fewPages[i].pageTitle)) {
                    render.page.set(page.get(input.fewPages[i]), input.fewPages[i].pageTitle);
                    notFound = 0;
                    break
                } i++
            }
            if (notFound) render.page.set(model.page.notFound,'404 Not Found')
        } else render.page.set(model.page.default,'Under Construction')
    }
}
run.init()