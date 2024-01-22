boot = {
    script: {
        cacheBuster: true, // Allows testing via Chrome Local Overrides when set to false
        steps: [
            'essential', 'html', 'input', 'prepare', 'process', 'render', 'run'
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
            const milliseconds = 100
                , maximum = seconds * 10
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
