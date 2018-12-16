/**
 * FIBONACCI SEQUENCE
 * Bottom-up Dynamic Programming
 * Taken from cracking the coding interview p134
 */

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo = [];

  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i < n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }

  return memo[n-1] + memo[n-2];
}

console.log('Bottom-up fibonacci');
console.log('20th fibonacci number: ', fibonacci(20));