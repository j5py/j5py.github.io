navigation = {
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