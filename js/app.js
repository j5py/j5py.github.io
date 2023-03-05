window.app = {
    start: () => {
        ui.setNav();
        app.run();
        dispatch.init()
    },
    route: () => {
        let i = 0
          , notFound = true
          ;
        while (i < pages.length) {
            if (js.string.slugify(pages[i].title) === location.hash) {
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
        app.route();
        window.onhashchange = app.route
    }
}

app.start()
