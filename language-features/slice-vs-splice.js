/**
 * TL/DR 
 * use slice to copy subset or full array
 * use splice to remove or add
 */

let fruits = ['orange', 'apple', 'banana'];

console.log('start', fruits);

// SLICE returns a subset of an array starting and ending at specified indices
// it DOES NOT mutate the array
let sl1 = fruits.slice(2, 4);
console.log('slice to return copy of subset', fruits, sl1);

// slice can also return a full copy of an array
let sl2 = fruits.slice(0);
console.log('slice to return full copy', fruits, sl2);

// SPLICE allows you to enter an array at a certain index, remove some items, and add some items
// it doesn't return anything!
// it DOES mutate the array
let sp1 = fruits.splice(1, 0, 'papaya', 'pineapple');

console.log('splice to add', fruits, sp1);

// this actually removes a couple items
let sp2 = fruits.splice(3, 2);
console.log('splice to remove', fruits);

let moreFruits = ['grape', 'melon', 'strawberry', 'blueberry'];
fruits.splice(fruits.length, ...moreFruits);

console.log('splice to append', fruits);