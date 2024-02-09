(async function() {
    const endpoints = [
        '../data/editable.json',
        '../data/example.json'
    ];
    async function request(endpoint) {
        const response = await fetch(endpoint);
        const js = await response.json();
        return js
    }
    function isFilled(unit) {
        try {
            if (typeof unit == 'string' && unit.length) return 1;
            else if (typeof unit == 'number') return 1;
            else if (typeof unit == 'boolean') return 1;
            else if (Array.isArray(unit)) {
                if (unit.filter((subunit) => isFilled(subunit)).length) return 1
            } else {
                for (subunit of Object.values(unit)) {
                    if (isFilled(subunit)) return 1
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    let data;
    for (file of endpoints) {
        data = await request(file);
        if (isFilled(data)) {
            data.set = 1;
            break
        } else data.set = 0
    }
    app.material = data
})()