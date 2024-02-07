app.press = {
    nav: app.input.fewPages.reduce(
        (html, unit) => html + app.model.nav.link
            .replace(/__text__/g, unit.pageTitle)
            .replace('__href__', app.common.string.getSlug(unit.pageTitle))
        ,
        ''
    ),
    page: {
        get: (subject) => {
            return app.model.page.section
                .replace('__title__', subject.pageTitle)
                .replace('__cards__', subject.unlimitedCards.reduce(
                    (html, unit) => html + app.model.page.card.header
                        .replace('__header__', unit.cardHeader)
                        .replace('__links__', unit.sixLinksMax.reduce(
                            (subHtml, subunit) => subHtml + app.model.page.card.link
                                .replace('__text__', subunit.text)
                                .replace('__href__', subunit.href)
                                .replace('__label__', unit.cardHeader + ' - ' + subunit.text)
                            ,
                            ''
                        ))
                    ,
                    ''
                ))
        }
    },
    footer: {
        links: app.input.footer.fewLinks.reduce(
            (html, unit) => html + app.model.footer.link
                .replace(/__text__/g, unit.text)
                .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
            ,
            ''
        ),
        icons: app.input.footer.fewIcons.reduce(
            (html, unit) => html + app.model.footer.icon
                .replace(/__alt__/g, unit.alt)
                .replace('__href__', unit.href)
                .replace('__src__', unit.src)
            ,
            ''
        )
    }
}