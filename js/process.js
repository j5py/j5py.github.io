process = {
    nav: {
        set: (links = '') => {
            if (prepare.nav.length) {
                prepare.nav.forEach((one) => {
                    links += html.nav.link
                        .replace(/__text__/g, one.text)
                        .replace('__href__', one.href)
                });
                document.querySelector('#drop-i-c').insertAdjacentHTML('afterbegin', links)
                return true
            } else {
                document.querySelector('nav').remove()
                return false
            }
        }
    },
    content: {
        getPageCards: (page, cards = '') => {
            page.unlimitedCards.forEach((one) => {
                let card = html.content.cards.header.replace('__header__', one.cardHeader),
                links = '';
                one.sixLinksMax.forEach((under) => {
                    links += html.content.cards.link
                        .replace('__text__', under.text)
                        .replace('__href__', under.href)
                        .replace('__label__', one.cardHeader + ' - ' + under.text)
                });
                cards += card.replace('__links__', links);
            });
            return html.content.container
                .replace('__title__', page.pageTitle)
                .replace('__cards__', cards)
        }
    },
    footer: {
        set: (texts = '', icons = '') => {
            prepare.footer.fewLinks.forEach((one) => {
                texts += html.footer.textLink
                    .replace(/__text__/g, one.text)
                    .replace('__onclick__', one.onclick ? `onclick="${one.onclick}"` : '')
                    .replace('__target__', one.onclick ? '' : 'target="_blank"')
                    .replace('__href__', one.onclick ? '' : `href="${one.href}"`)
            });
            prepare.footer.fewIcons.forEach((one) => {
                icons += html.footer.iconLink
                    .replace(/__alt__/g, one.alt)
                    .replace('__href__', one.href)
                    .replace('__src__', one.src)
            });
            document.querySelector('#foot-texts').insertAdjacentHTML('afterbegin', texts);
            document.querySelector('#foot-icons').insertAdjacentHTML('afterbegin', icons)
        }
    }
}
