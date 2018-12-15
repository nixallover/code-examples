/**
 * FIBONACCI SEQUENCE WITH MEMOIZATION
 * taken from cracking the coding interview
 */

function fibonacci(i) {
  return _fib(i, []);
}

function _fib(i, memo) {
  if (i === 0 || i === 1) return i;

  // console.log('fib', i, memo);

  if (memo[i] === undefined) {
    memo[i] = _fib(i - 1, memo) + _fib(i - 2, memo);
  }

  return memo[i];
}

console.log('Fibonacci with memoization');
console.log('20th fibonacci number: ', fibonacci(20));