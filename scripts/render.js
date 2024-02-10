app.render = {
    name: (() => document.querySelector('header h1').innerHTML = app.material.websiteName)(),
    nav: {
        set: () => {
            const button = document.querySelector('#drop-i')
                , droppable = document.querySelector('#drop-i-c')
                , shift = /display\:\s*\w+\s*(!important)*;/g
                , page = document.querySelector('#container')
                ;
            droppable.insertAdjacentHTML(
                'afterbegin', app.press.nav
            );
            function onButton() {
                button.removeEventListener('click', onButton);
                app.common.dom.moveStyleAttribute(droppable, shift, 1, 'display: block;')
                droppable.addEventListener('click', onOthers);
                page.addEventListener('click', onOthers)
            }
            function onOthers() {
                page.removeEventListener('click', onOthers);
                droppable.removeEventListener('click', onOthers);
                app.common.dom.moveStyleAttribute(droppable, shift, 1, 'display: none;');
                button.addEventListener('click', onButton)
            }
            button.addEventListener('click', onButton)
        },
        end: () => document.querySelector('nav').remove()
    },
    page: {
        set: (html, title) => {
            document.title = title;
            document.querySelector('#container').innerHTML = html;
            window.scrollTo(0, 0)
        }
    },
    footer: {
        set: () => {
            const areas = [
                ['#foot-texts', app.press.footer.links],
                ['#foot-icons', app.press.footer.icons]
            ];
            for (unit of areas) {
                document.querySelector(unit[0]).insertAdjacentHTML('afterbegin', unit[1])
            }
        }
    }  
}