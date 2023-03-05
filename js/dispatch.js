window.dispatch = {
    init: () => {

        // DATA

        // boot.script.add(url, cacheBuster, callback)
        
    },
    view: (title) => {

        // DATA

        // ...

    },
    event: (action, category, label, onclick) => {

        // DATA

        // ...

        if (onclick && onclick === 'origin')
            window.location.replace(document.location.origin)

    }
}
