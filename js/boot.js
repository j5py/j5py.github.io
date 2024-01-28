function load(name, cacheBuster = true) {
    return new Promise((resolve, reject) => {
        const node = document.createElement('script');
        node.src = 'js/' + name + '.js' + (cacheBuster ? (function(x = 0) {
            while (x < 0.0001) x = Math.random();
            return '?' + ((new Date()).getTime() * x).toString().substring(0,8)
        })() : '');
        node.onload = () => {
            const defined = setInterval(() => {
                if (window[name]) {
                    clearInterval(defined);
                    resolve()
                }
            }, 1)
        };
        node.onerror = reject;
        document.body.appendChild(node)
    })
}
load('common').then(() => {
    load('input').then(() => {
        load('model').then(() => {
            load('ready').then(() => {
                load('render').then(() => {
                    load('run').then(() => {
                        run.init()
                    })
                })
            })
        })
    })
})