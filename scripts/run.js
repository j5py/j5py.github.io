app.run = {
    start: function() {
        app.render.nav.set();
        app.render.footer.set();
        window.onhashchange = this.route;
        this.route()
    },
    route: () => {
        if (app.input.fewPages.length) {
            app.common.url.moveSearchBeforeHash();
            let notFound = 1
              , i = 0
              ;
            while (i < app.input.fewPages.length) {
                if (!location.hash || location.hash == app.common.url.getHash(app.input.fewPages[i].pageTitle)) {
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