function* fibo(forward = true) {
    forward = forward === undefined ? true : forward;
    let a = [0, 1];
    const step = (f, a) => f ? [a[1], a[0] + a[1]] : [a[1] - a[0], a[0]];
    for (; true;) {
        const f = yield a[0];
        forward = f === undefined ? forward : f;
        a = step(forward, a);
    }
}

let fibonachi = fibo();


document.addEventListener('DOMContentLoaded', function() {

    let doc = document;
    let div = doc.getElementsByClassName('output')[0];

    doc.getElementsByClassName('button-up')[0].onclick = () => {
        let numPos = doc.getElementsByTagName('input')[0].value;
        for (let i = 0; i < numPos; i++) {
            let resultPos = fibonachi.next(true).value;
            div.innerHTML += (`<span> ${resultPos} </span>`);
        }

    }
    doc.getElementsByClassName('button-down')[0].onclick = () => {
        let numNeg = doc.getElementsByTagName('input')[1].value;
        for (let i = 0; i < numNeg; i++) {
            let resultNeg = fibonachi.next(false).value;
            div.innerHTML += (`<span> ${resultNeg} </span>`);
        }

    }
})