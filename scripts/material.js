(async function() {
    const endpoints = [
        '../data/editable.json',
        '../data/example.json'
    ];
    function isFilled(unit) {
        try {
            if (typeof unit == 'string' && unit.length) return 1;
            else if (typeof unit == 'number') return 1;
            else if (typeof unit == 'boolean') return 1;
            else if (Array.isArray(unit)) {
                if (unit.filter((subunit) => isFilled(subunit)).length) return 1
            } else {
                for (const subunit of Object.values(unit)) {
                    if (isFilled(subunit)) return 1
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    function getCacheBuster(length = 8) {
        const number = (new Date()).getTime()
            , random = number * Math.random()
            ;
        return '?' + String(random).substring(0, length)
    }
    async function request(endpoint, cache = 0) {
        const response = await fetch(endpoint + (cache ? '' : getCacheBuster()));
        const js = await response.json();
        return js
    }
    let data;
    for (const file of endpoints) {
        data = await request(file);
        if (isFilled(data)) {
            data.set = 1;
            break
        } else data.set = 0
    }
    app.material = data
})()