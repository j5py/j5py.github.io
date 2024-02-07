app = {
    boot: {
        generator: function* () {
            yield 'common';
            yield 'input';
            yield 'model';
            yield 'press';
            yield 'render';
            yield 'run'
        },
        getCacheBuster: () => {
            const number = (new Date()).getTime()
                , random = number * Math.random()
                ;
            return '?' + String(random).substring(0, 4)
        },
        waitScriptPromised: function(name, cache = 0) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'scripts/' + name + '.js' + (cache ? '' : this.getCacheBuster());
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
            if (!this.init) this.init = this.generator();
            const walk = this.init.next();
            if (!walk.done) this.waitScriptPromised(walk.value).then(this.process);
            else app.run.start()
        }
    }
}
app.boot.process = app.boot.process.bind(app.boot);
app.boot.process()