prepare = {
    brand: input.brand,
    nav: (function(results = []) {
        input.fewPages.forEach((one) => results.push({
            text: one.pageTitle,
            href: essential.string.slugify(one.pageTitle)
        })); return results
    })(),
    footer: {
        fewLinks: (function(results = []) {
            input.footer.fewLinks.forEach((one) => results.push({
                text: one.text,
                href: (one.href ? one.href : undefined),
                onclick: (one.onclick ? one.onclick : undefined)
            })); return results
        })(),
        fewIcons: (function(results = []) {
            input.footer.fewIcons.forEach((one) => results.push({
                alt: one.alt,
                href: one.href,
                src: one.src
            })); return results
        })()
    }
}