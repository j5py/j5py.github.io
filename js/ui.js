window.ui = {
    setNav: () => {
        document.querySelector('header h1').innerHTML = nav.brand;
        dynamic.nav.setBurger();
        dynamic.nav.setFooter();
        ui.listenBurger()
    },
    setContent: (html, title) => {
        document.title = nav.brand + ' - ' + title;
        document.querySelector('#container').innerHTML = html;
        window.scrollTo(0, 0)
    },
    set404: () => {
        document.title = nav.brand + ' 404 Not Found';
        document.querySelector('#container').innerHTML = '<div class="msg">This URL does not return any content</div>'
    },
    listenBurger: () => {
        const burger = document.querySelector('#drop-i')
            , menu = document.querySelector('#drop-i-c')
            ;
        burger.addEventListener('click', () => {
            js.dom.updateStyleAttribute(
                menu,
                /display\:\s*\w+\s*(!important)*;/g,
                true,
                'display:block;'
            )
        });
        document.addEventListener('click', (event) => {
            if (!event.target.closest('#drop-i')) {
                js.dom.updateStyleAttribute(
                    menu,
                    /display\:\s*\w+\s*(!important)*;/g,
                    true,
                    'display:none;'
                )
            }
        })
    }
}
