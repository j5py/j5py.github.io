app.render = {
    nav: {
        set: () => {
            document.querySelector('header h1').innerHTML = app.input.brand;
            if (app.press.nav) {
                const regEx = /display\:\s*\w+\s*(!important)*;/g
                    , droppable = document.querySelector('#drop-i-c')
                    ;
                droppable.insertAdjacentHTML('afterbegin', app.press.nav);
                document.querySelector('#drop-i').addEventListener(
                    'click', () => {
                        app.common.dom.moveStyleAttribute(droppable, regEx, 1, 'display: block;')
                });
                document.addEventListener('click', (event) => {
                    if (!event.target.closest('#drop-i'))
                        app.common.dom.moveStyleAttribute(droppable, regEx, 1, 'display: none;')
                })
            } else document.querySelector('nav').remove()
        }
    },
    page: {
        set: (elements, title) => {
            document.title = app.input.brand + ' - ' + title;
            document.querySelector('#container').innerHTML = elements;
            window.scrollTo(0, 0)
        }
    },
    footer: {
        set: () => {
            document.querySelector('#foot-texts').insertAdjacentHTML('afterbegin', app.press.footer.links);
            document.querySelector('#foot-icons').insertAdjacentHTML('afterbegin', app.press.footer.icons)
        }
    }  
}