render = {
    nav: {
        set: () => {
            document.querySelector('header h1').innerHTML = input.brand;
            if (ready.nav) {
                const regEx = /display\:\s*\w+\s*(!important)*;/g
                    , droppable = document.querySelector('#drop-i-c')
                    ;
                droppable.insertAdjacentHTML('afterbegin', ready.nav);
                document.querySelector('#drop-i').addEventListener('click', () => {
                    common.dom.moveStyleAttribute(droppable, regEx, 1, 'display:block;')
                });
                document.addEventListener('click', (event) => {
                    if (!event.target.closest('#drop-i'))
                        common.dom.moveStyleAttribute(droppable, regEx, 1, 'display:none;')
                })
            } else document.querySelector('nav').remove()
        }
    },
    page: {
        set: (it, title) => {
            document.title = input.brand + ' - ' + title;
            document.querySelector('#container').innerHTML = it;
            window.scrollTo(0, 0)
        }
    },
    footer: {
        set: () => {
            document.querySelector('#foot-texts').insertAdjacentHTML('afterbegin', ready.footer.links);
            document.querySelector('#foot-icons').insertAdjacentHTML('afterbegin', ready.footer.icons)
        }
    }  
}