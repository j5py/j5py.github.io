window.app = {
    boot: (function() {
        function load(name, cacheBuster = true) {
            return new Promise((resolve, reject) => {
                const node = document.createElement('script');
                node.src = 'js/' + name + '.js' + (cacheBuster ? (function(random = 0) {
                    while (random < 0.0001) random = Math.random();
                    return '?' + ((new Date()).getTime() * random).toString().substring(0,8)
                })() : '');
                node.onload = () => {
                    const definition = setInterval(() => {
                        if (app[name]) {
                            clearInterval(definition);
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
                    load('press').then(() => {
                        load('render').then(() => {
                            load('run').then(() => {
                                app.run.init()
                            })
                        })
                    })
                })
            })
        })
    })()
}