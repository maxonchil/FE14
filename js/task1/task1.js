function* generator(i, y) {
    let n = 0;
    if (y === true) {
        n = 1;
    } else {
        n = -1;
    }
    yield i;
    yield i - -n;
    let
        prev = 0,
        curent = n,
        interim = 0;
    for (let i = 0; true; i++) {
        yield interim = curent + prev;
        prev = curent;
        curent = interim;
    }
}