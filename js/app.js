window.app = {
    start: () => {
        ui.setNav();
        app.run()
    },
    route: () => {
        js.location.ensureSearchBeforeHash();
        let i = 0
          , notFound = true
          ;
        if (pages.length) {
            while (i < pages.length) {
                if (js.string.slugify(pages[i].title) === location.hash) {
                    notFound = false;
                    ui.setContent(
                        dynamic.content.getPageCards(pages[i]),
                        pages[i].title
                    ); break
                } i++
            }
            if (location.hash === '') {
                ui.setContent(
                    dynamic.content.getPageCards(pages[0]),
                    pages[0].title
                )
            } else if (notFound) ui.set404()
        } else ui.setContent(
            template.content.default,
            'Under Construction'
        )
    },
    run: () => {
        app.route();
        window.onhashchange = app.route
    }
}

app.start()
