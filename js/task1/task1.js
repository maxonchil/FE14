function* generator(i) {
    // for (let i = 0; y ? i++ : i--; true) {
    //     yield i;
    //     yield i + 1;
    //     yield i + 1;
    // }
    yield i;
    yield c;
    yield b = 0;
    yield c = 1;
    yield b + c;
    yield c = b + c;
    b = a;
    yield a = a + b;
    b = a;
    yield a = a + b;

}
let task = generator(0);
console.log(task.next().value);
console.log(task.next().value);
console.log(task.next().value);
console.log(task.next().value);
console.log(task.next().value);