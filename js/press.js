app.press = {
    nav: (function(units, it) {
        if (app.input.fewPages.length) {
            app.input.fewPages.forEach((unit) => units.push({
                text: unit.pageTitle,
                href: app.common.string.getSlug(unit.pageTitle)
            }));
            units.forEach((unit) => {
                it += app.model.nav.link
                    .replace(/__text__/g, unit.text)
                    .replace('__href__', unit.href)
            });
            return it
        }
    })([], ''),
    page: {
        get: (from, it = '') => {
            from.unlimitedCards.forEach((unit) => {
                it += app.model.page.card.header
                    .replace('__header__', unit.cardHeader)
                    .replace('__links__', (function(inner) {
                        unit.sixLinksMax.forEach((within) => {
                            inner += app.model.page.card.link
                                .replace('__text__', within.text)
                                .replace('__href__', within.href)
                                .replace('__label__', unit.cardHeader + ' - ' + within.text)
                        }); return inner
                    })(''))
            });
            return app.model.page.section
                .replace('__title__', from.pageTitle)
                .replace('__cards__', it)
        }
    },
    footer: {
        links: (function(it) {
            if (app.input.footer.fewLinks.length) {
                app.input.footer.fewLinks.forEach((unit) => {
                    it += app.model.footer.link
                        .replace(/__text__/g, unit.text)
                        .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                        .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                        .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
                });
                return it
            }
        })(''),
        icons: (function(it) {
            if (app.input.footer.fewIcons.length) {
                app.input.footer.fewIcons.forEach((unit) => {
                    it += app.model.footer.icon
                        .replace(/__alt__/g, unit.alt)
                        .replace('__href__', unit.href)
                        .replace('__src__', unit.src)
                });
                return it
            }
        })('')
    }
}