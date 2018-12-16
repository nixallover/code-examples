/**
 * FIBONACCI SEQUENCE
 * Simplified Bottom-up Dynamic Programming
 * Taken from cracking the coding interview p134
 */

function fibonacci(n) {
  if (n === 0) return 0;

  let a = 0;
  let b = 1;

  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return a + b;
}

console.log('Bottom-up fibonacci');
console.log('20th fibonacci number: ', fibonacci(20));