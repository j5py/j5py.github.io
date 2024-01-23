ready = {
    nav: (function(units, it) {
        if (input.fewPages.length) {
            input.fewPages.forEach((unit) => units.push({
                text: unit.pageTitle,
                href: common.string.getSlug(unit.pageTitle)
            }));
            units.forEach((unit) => {
                it += model.nav.link
                    .replace(/__text__/g, unit.text)
                    .replace('__href__', unit.href)
            });
            return common.string.getNoEmptiness(it)
        }
    })([], ''),
    page: {
        get: (from, it = '') => {
            from.unlimitedCards.forEach((unit) => {
                it += model.page.card.header
                    .replace('__header__', unit.cardHeader)
                    .replace('__links__', (function(inner) {
                        unit.sixLinksMax.forEach((within) => {
                            inner += model.page.card.link
                                .replace('__text__', within.text)
                                .replace('__href__', within.href)
                                .replace('__label__', unit.cardHeader + ' - ' + within.text)
                        }); return inner
                    })(''))
            });
            return common.string.getNoEmptiness(
                model.page.section
                    .replace('__title__', from.pageTitle)
                    .replace('__cards__', it)
            )
        }
    },
    footer: {
        links: (function(it) {
            if (input.footer.fewLinks.length) {
                input.footer.fewLinks.forEach((unit) => {
                    it += model.footer.link
                        .replace(/__text__/g, unit.text)
                        .replace('__onclick__', unit.onclick ? `onclick="${unit.onclick}"` : '')
                        .replace('__target__', unit.onclick ? '' : 'target="_blank"')
                        .replace('__href__', unit.onclick ? '' : `href="${unit.href}"`)
                });
                return common.string.getNoEmptiness(it)
            }
        })(''),
        icons: (function(it) {
            if (input.footer.fewIcons.length) {
                input.footer.fewIcons.forEach((unit) => {
                    it += model.footer.icon
                        .replace(/__alt__/g, unit.alt)
                        .replace('__href__', unit.href)
                        .replace('__src__', unit.src)
                });
                return common.string.getNoEmptiness(it)
            }
        })('')
    }
}