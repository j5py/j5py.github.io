window.template = {
    nav: {
        burger: {
            link: `
                <a href="__href__"
                    class="btn-w btn-p"
                    onclick="dispatch.event('Click Header', 'Burger', '__text__')"
                >__text__</a>
            `
        },
        footer: {
            text: `
                <a class="foot-l"
                    __target__
                    __href__
                    onclick="dispatch.event('Click Footer', 'Text', '__text__');__onclick__"
                >__text__</a>
            `,
            icon: `
                <a rel="noreferrer noopener" target="_blank"
                    href="__href__"
                    onclick="dispatch.event('Click Footer', 'Icon', '__text__')">
                    <img class="foot-i icon"
                        src="__src__"
                        alt="__text__"
                    />
                </a>
            `
        }
    },
    content: {
        card: {
            container: `
                <section>
                    <h2>__title__</h2>
                    <div class="cards">
                        __cards__
                    </div>
                </section>
            `,
            element: {
                main: `
                    <div class="card">
                        <a class="card-t" href="__anchor__">__header__</a>
                        <div class="card-c">
                            __links__
                        </div>
                    </div>
                `,
                sub: `
                    <a class="link" rel="noreferrer noopener" target="_blank" href="__href__"
                        onclick="dispatch.event('Click Page', 'Card link', '__label__')"
                    >__text__</a>
                `
            }
        }
    }
}
