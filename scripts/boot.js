const app = {
    boot: {
        generator: function* () {
            yield 'common';
            yield 'material';
            yield 'model';
            yield 'press';
            yield 'render';
            yield 'run'
        },
        getPromisedScript: (name) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'scripts/' + name + '.js';
                script.onerror = reject;
                script.onload = () => {
                    const execution = setInterval(() => {
                        if (app.hasOwnProperty(name)) {
                            clearInterval(execution);
                            resolve()
                        }
                    }, 10)
                };
                document.body.appendChild(script)
            })
        },
        process: function() {
            if (!app.boot.step) app.boot.step = app.boot.generator();
            const walk = app.boot.step.next();
            if (!walk.done) app.boot.getPromisedScript(walk.value).then(app.boot.process);
            else app.run.start()
        }
    }
}

app.boot.process()