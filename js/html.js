html = {
    nav: {
        link: `<a href="__href__" class="btn-w btn-p">__text__</a>` 
    },
    content: {
        container: `
            <section>
                <h2>__title__</h2>
                <div class="cards">
                    __cards__
                </div>
            </section>`,
        cards: {
            header: `
                <div class="card">
                    <div class="card-t">__header__</div>
                    <div class="card-c">
                        __links__
                    </div>
                </div>`,
            link: `<a class="link" rel="noreferrer noopener" target="_blank" href="__href__">__text__</a>`
        },
        default: `<div class="msg">This site is under construction, no content has been added yet.</div>`
    },
    footer: {
        textLink: `
            <a rel="noreferrer noopener" class="foot-l"
                __onclick__
                __target__
                __href__
            >__text__</a>`,
        iconLink: `
            <a rel="noreferrer noopener" target="_blank" href="__href__">
                <img class="foot-i icon"
                    src="__src__"
                    alt="__alt__"
                />
            </a>`
    }
}
