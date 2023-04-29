window.nav = {

    brand: `Hi`,

    burger: (function(links = []) {
        pages.forEach((page) => {
            links.push({
                text: page.title,
                href: js.string.slugify(page.title)
            })
        }); return links
    }()),
    footer: {
        textLinks: [
            {
                text: `Hosted on GitHub Pages`,
                href: `https://pages.github.com`
            },
            // {
            //     text: `Invocation of a JavaScript function`,
            //     onclick: `example()`
            // }
        ],
        iconLinks: [
            {
                text: `Github`,
                href: ``,
                src: `images/iconmonstr-github.png`
            },
            {
                text: `LinkedIn`,
                href: ``,
                src: `images/iconmonstr-linkedin.png`
            }
        ]
    }
}
