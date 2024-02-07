app.press = {
    nav: (function(html = '') {
        for (unit of app.input.fewPages)
            html += app.model.nav.link
                .replace(/__text__/g, unit.pageTitle)
                .replace('__href__', app.common.string.getSlug(unit.pageTitle))
        return html
    })(),
    page: {
        get: (subject) => {
            return app.model.page.section
                .replace('__title__', subject.pageTitle)
                .replace('__cards__', (function(html = '') {
                    for (unit of subject.unlimitedCards)
                        html += app.model.page.card.header
                            .replace('__header__', unit.cardHeader)
                            .replace('__links__', (function(subHtml = '') {
                                for (subunit of unit.sixLinksMax)
                                    subHtml += app.model.page.card.link
                                        .replace('__text__', subunit.text)
                                        .replace('__href__', subunit.href)
                                        .replace('__label__', unit.cardHeader + ' - ' + subunit.text);
                                return subHtml
                            })())
                        ;
                    return html
                })())
        }
    },
    footer: {
        links: (function(html = '') {
            for (unit of app.input.footer.fewLinks)
                html += app.model.footer.link
                    .replace(/__text__/g, unit.text)
                    .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                    .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                    .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
            return html
        })(),
        icons: (function(html = '') {
            for (unit of app.input.footer.fewIcons)
                html += app.model.footer.icon
                    .replace(/__alt__/g, unit.alt)
                    .replace('__href__', unit.href)
                    .replace('__src__', unit.src)
            return html
        })()
    }
}