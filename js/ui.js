window.ui = {
    setNav: () => {
        document.querySelector('header h1').innerHTML = nav.brand;
        dynamic.nav.setBurger();
        dynamic.nav.setFooter();
        ui.listenBurger()
    },
    setContent: (html, title) => {
        document.title = title;
        document.querySelector('#container').innerHTML = html;
        window.scrollTo(0, 0);
        dispatch.view(title)
    },
    set404: () => {
        document.title = '404 Not Found';
        document.querySelector('#container').innerHTML = '<div class="msg">This URL does not return any content</div>'
    },
    listenBurger: () => {
        const burger = document.querySelector('#drop-i')
            , menu = document.querySelector('#drop-i-c')
            ;
        burger.addEventListener('click', () => {
            ui.updateStyleAttribute(
                menu,
                /display\:\s*\w+\s*(!important)*;/g,
                true,
                'display:block;'
            )
        });
        document.addEventListener('click', (event) => {
            if (!event.target.closest('#drop-i')) {
                ui.updateStyleAttribute(
                    menu,
                    /display\:\s*\w+\s*(!important)*;/g,
                    true,
                    'display:none;'
                )
            }
        })
    },
    updateStyleAttribute: (node, removeStringRegex, addStringCondition, stringToAdd) => {
        let css = (node.getAttribute('style') || '').replace(removeStringRegex, '').trim();
        if (addStringCondition) node.setAttribute('style', (css.length ? css + ' ' : css) + stringToAdd);
        else node.setAttribute('style', css)
    }
}
