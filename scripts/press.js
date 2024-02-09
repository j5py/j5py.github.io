app.press = {
    nav: app.material.pages.reduce(
        (html, unit) => html + app.model.nav.link
            .replace(/__text__/g, unit.pageTitle)
            .replace('__href__', app.common.url.getHash(unit.pageTitle))
        ,
        ''
    ),
    page: {
        get: (data) => {
            return app.model.page.section
                .replace('__title__', data.pageTitle)
                .replace('__cards__', data.cards.reduce(
                    (html, unit) => html + app.model.page.card.header
                        .replace('__header__', unit.cardHeader)
                        .replace('__links__', unit.links.reduce(
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
        links: app.material.footer.links.reduce(
            (html, unit) => html + app.model.footer.link
                .replace(/__text__/g, unit.text)
                .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
            ,
            ''
        ),
        icons: app.material.footer.icons.reduce(
            (html, unit) => html + app.model.footer.icon
                .replace(/__alt__/g, unit.alt)
                .replace('__href__', unit.href)
                .replace('__src__', unit.src)
            ,
            ''
        )
    }
}