window.app = {
    start: () => {
        ui.setNav();
        app.run();
        dispatch.init()
    },
    route: () => {
        js.location.ensureSearchBeforeHash();
        let i = 0
          , page = js.location.getParameter('page')
          , notFound = true
          ;
        while (i < pages.length) {
            if (js.string.slugify(pages[i].title, true) === page) {
                notFound = false;
                ui.setContent(
                    dynamic.content.getHTML(pages[i]),
                    pages[i].title
                ); break
            } i++
        }
        if (location.hash === '') {
            ui.setContent(
                dynamic.content.getHTML(pages[0]),
                pages[0].title
            )
        } else if (notFound) ui.set404()
    },
    run: () => {
        window.onhashchange = app.route;
        window.onsearch = app.route;
        app.route()
    }
}

app.start()
