/**
 * FIBONACCI SEQUENCE WITH MEMOIZATION
 * Top-down Dynamic Programming (or Memoization)
 * 
 * Note: some people call top-down dynamic programming
 * "memoization" and only use "dynamic programming" to
 * refer to bottom-up work. CTCI didn't do that.
 * 
 * Taken from cracking the coding interview p134
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