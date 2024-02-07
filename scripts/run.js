app.run = {
    init: () => {
        app.render.nav.set();
        app.render.footer.set();
        window.onhashchange = app.run.route;
        app.run.route()
    },
    route: () => {
        if (app.input.fewPages.length) {
            app.common.location.moveSearchBeforeHash();
            let has = location.hash === ''
              , notFound = 1
              , i = 0
              ;
            while (i < app.input.fewPages.length) {
                if (!has) has = location.hash === app.common.string.getSlug(app.input.fewPages[i].pageTitle);
                if (has) {
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