page = {
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
}