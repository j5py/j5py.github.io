app.press = {
    nav: (function(pageTitles, html) {
        if (app.input.fewPages.length) {
            app.input.fewPages.forEach((unit) => pageTitles.push({
                text: unit.pageTitle,
                href: app.common.string.getSlug(unit.pageTitle)
            }));
            pageTitles.forEach((unit) => {
                html += app.model.nav.link
                    .replace(/__text__/g, unit.text)
                    .replace('__href__', unit.href)
            });
            return html
        }
    })([], ''),
    page: {
        get: (pageCards, html = '') => {
            pageCards.unlimitedCards.forEach((unit) => {
                html += app.model.page.card.header
                    .replace('__header__', unit.cardHeader)
                    .replace('__links__', (function(innerHtml) {
                        unit.sixLinksMax.forEach((subunit) => {
                            innerHtml += app.model.page.card.link
                                .replace('__text__', subunit.text)
                                .replace('__href__', subunit.href)
                                .replace('__label__', unit.cardHeader + ' - ' + subunit.text)
                        });
                        return innerHtml
                    })(''))
            });
            return app.model.page.section
                .replace('__title__', pageCards.pageTitle)
                .replace('__cards__', html)
        }
    },
    footer: {
        links: (function(html) {
            if (app.input.footer.fewLinks.length) {
                app.input.footer.fewLinks.forEach((unit) => {
                    html += app.model.footer.link
                        .replace(/__text__/g, unit.text)
                        .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                        .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                        .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
                });
                return html
            }
        })(''),
        icons: (function(html) {
            if (app.input.footer.fewIcons.length) {
                app.input.footer.fewIcons.forEach((unit) => {
                    html += app.model.footer.icon
                        .replace(/__alt__/g, unit.alt)
                        .replace('__href__', unit.href)
                        .replace('__src__', unit.src)
                });
                return html
            }
        })('')
    }
}