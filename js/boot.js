window.boot = {
    script: {
        cacheBuster: true,
        steps: [
            'js', 'pages', 'nav', 'template', 'dynamic', 'ui', 'dispatch', 'app'
        ],
        add: (url, cacheBuster, callback) => {
            let node = document.createElement('script');
            if (cacheBuster)
                url += '?' + Math.round(
                    Math.random() * (new Date()).getTime()
                );
            node.setAttribute('src', url);
            if (callback) node.onload = callback;
            document.querySelector('body').appendChild(node)
        },
        waitLoad: (seconds, checkRequirements, invokeCallback, invokeAnyway) => {
            let i = 0;
            const milliseconds = 250
                , maximum = seconds * 4
                , check = setInterval(() => {
                    if (checkRequirements()) {
                        clearInterval(check);
                        invokeCallback()
                    } else if (i >= maximum) {
                        clearInterval(check);
                        if (invokeAnyway) invokeCallback()
                    } else i++
                  }, milliseconds)
                ;
        }
    },
    init: (i) => {
        boot.script.waitLoad(
            5,
            () => {
                return i === 0 ? true : window.hasOwnProperty(boot.script.steps[i - 1])
            },
            () => {
                boot.script.add(
                    `js/${boot.script.steps[i]}.js`,
                    boot.script.cacheBuster
                );
                if (i < boot.script.steps.length - 1) boot.init(i + 1)
            },
            true
        )
    }
}

boot.init(0)
