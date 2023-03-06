function getTestAB(raw) {
    let integer = Math.round(Math.random());
    if (raw) return integer;
    else if (integer) return 'B';
    else return 'A'
}
