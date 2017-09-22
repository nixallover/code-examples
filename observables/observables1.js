var Rx = require('rxjs');

/* https://toddmotto.com/rxjs-observables-observers-operators */

console.log('observables are just functions!');

/**
 * observables are functions with a few special characteristics
 * - takes an observer (obj with next, error, complete methods)
 * - returns cancellation logic
 * 
 * the "producer" is the source of the values, e.g. data source or dom events
 * the "observer" is the object literal (or series of f()s) we pass to our .subscribe()
 * 
 * compose values returned from an Observable before they reach the .subscribe block
 * by using operators, creating an observable sequence
 * each operator returns a new observable, or "stream"
 */

// example: timer that waits 3 seconds, then ticks every 1 second
const source = Rx.Observable.timer(3000, 1000);
const subscribe = source.subscribe(val => console.log(val));