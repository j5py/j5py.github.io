function isPositive(x) {
    if (x === true) return x;
    return x !== undefined
        && x !== false
        && x !== null
        && x !== ''
        && (
            !isNaN(Number.parseFloat(x)) && x > 0 || x.length > 0
        )
}