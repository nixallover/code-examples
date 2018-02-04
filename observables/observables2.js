var Rx = require('rxjs');


// accumulator example
const source = Rx.Observable.of("a", "ram", "in", "a", "jam");
const example = source.scan((acc, curr) => `${acc} ${curr}`);

const subscribe = example.subscribe(val => console.log(val));