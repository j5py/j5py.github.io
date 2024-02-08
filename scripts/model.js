app.model = {
    nav: {
        link: `<a href="__href__" class="btn-w btn-p">__text__</a>` 
    },
    page: { 
        default: `<div class="msg">This site is under construction, no content has been added yet.</div>`,
        section: app.common.string.getSingleSpacedLine(`
            <section>
                <h2>__title__</h2>
                <div class="cards">
                    __cards__
                </div>
            </section>
        `),
        card: {
            header: app.common.string.getSingleSpacedLine(`
                <div class="card">
                    <div class="card-t">__header__</div>
                    <div class="card-c">
                        __links__
                    </div>
                </div>
            `),
            link: `<a class="link" rel="noreferrer noopener" target="_blank" href="__href__">__text__</a>`
        },
        notFound: '<div class="msg">This URL does not return any content</div>'
    },
    footer: {
        link: app.common.string.getSingleSpacedLine(`
            <a rel="noreferrer noopener" class="foot-l"
                __onclick__
                __target__
                __href__
            >__text__</a>
        `),
        icon: app.common.string.getSingleSpacedLine(`
            <a rel="noreferrer noopener" target="_blank" href="__href__">
                <img class="foot-i icon"
                    src="__src__"
                    alt="__alt__"
                />
            </a>
        `)
    }
}
