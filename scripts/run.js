app.run = {
    start: function() {
        const none = !app.material.set
            , lone = app.material.pages.length < 2
            ;
        if (none || lone) {
            app.render.nav.end()
        } else {
            app.render.nav.set();
            window.onhashchange = this.route
        }
        app.render.footer.set();
        this.route()
    },
    route: () => {
        if (app.material.set) {
            app.common.url.moveSearchBeforeHash();
            let notFound = 1
              , i = 0
              ;
            while (i < app.material.pages.length) {
                const root = !location.hash
                    , hash = location.hash == app.common.url.getHash(app.material.pages[i].pageTitle)
                    , name = app.material.pages[i].pageTitle.length
                    ;
                if ((root || hash) && name) {
                    app.render.page.set(
                        app.press.page.get(app.material.pages[i]),
                        app.material.pages[i].pageTitle
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