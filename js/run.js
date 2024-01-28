app.run = {
    init: () => {
        app.render.nav.set();
        app.render.footer.set();
        window.onhashchange = app.run.route;
        app.run.route()
    },
    route: () => {
        app.common.location.moveSearchBeforeHash();
        let i = 0, notFound = 1;
        if (app.input.fewPages.length) {
            if (location.hash === '') {
                app.render.page.set(
                    app.press.page.get(app.input.fewPages[0]),
                    app.input.fewPages[0].pageTitle
                );
                notFound = 0;
            } else while (i < app.input.fewPages.length) {
                if (location.hash === app.common.string.getSlug(app.input.fewPages[i].pageTitle)) {
                    app.render.page.set(
                        app.press.page.get(app.input.fewPages[i]),
                        app.input.fewPages[i].pageTitle
                    );
                    notFound = 0;
                    break
                }
                i++
            }
            if (notFound) app.render.page.set(
                app.model.page.notFound,
                '404 Not Found'
            )
        } else app.render.page.set(
            app.model.page.default,
            'Under Construction'
        )
    }
}