render = {
    setNav: () => {
        document.querySelector('header h1').innerHTML = prepare.brand;
        if (process.nav.set()) render.listenNav();
        process.footer.set()
    },
    setContent: (rendered, title) => {
        document.title = prepare.brand + ' - ' + title;
        document.querySelector('#container').innerHTML = rendered;
        window.scrollTo(0, 0)
    },
    set404: () => {
        document.title = prepare.brand + ' 404 Not Found';
        document.querySelector('#container').innerHTML =
            '<div class="msg">This URL does not return any content</div>'
    },
    listenNav: () => {
        const droppable = document.querySelector('#drop-i-c')
            ;
        document.querySelector('#drop-i').addEventListener('click', () => {
            essential.dom.updateStyleAttribute(
                droppable,
                /display\:\s*\w+\s*(!important)*;/g,
                true,
                'display:block;'
            )
        });
        document.addEventListener('click', (event) => {
            if (!event.target.closest('#drop-i')) {
                essential.dom.updateStyleAttribute(
                    droppable,
                    /display\:\s*\w+\s*(!important)*;/g,
                    true,
                    'display:none;'
                )
            }
        })
    }
}
