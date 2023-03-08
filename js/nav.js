window.nav = {
    brand: `j5py`,
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

            // DATA

            // {
            //     text: `About your data`,
            //     href: `#`,
            //     onclick: ``
            // }
            
        ],
        iconLinks: [
            {
                text: `Github`,
                href: `https://github.com/j5py`,
                src: `images/iconmonstr-github.png`
            }
        ]
    }
}
