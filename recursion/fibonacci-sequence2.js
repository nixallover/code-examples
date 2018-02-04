// fib 2
// https://www.sitepoint.com/implementing-memoization-in-javascript/

// no memoization - to compute the 50th,
// must be called 40730022147 times!
function fibonacci1(n){
  if(n === 0 || n === 1)
    return n;
  else
    return fibonacci1(n-1) + fibonacci1(n-2);
}

console.log('fib1: ', fibonacci1(8));


// with memoization - basic example
var fibonacci2 = (function(){
  var memo = {};

  function f(n){
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n-1) + f(n-2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

console.log('fib2: ', fibonacci2(8));


// multi-dimensional fib
// the additional param is essentially useless
var fibonacci3 = (function(){
  var memo = {};

  function f(x, n){
    var value;

    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(x, n-1) + f(x, n-2);
        memo[x][n] = value;
    }
    return value;
  }
  return f;
})();

console.log('fib3: ', fibonacci3('boo', 8));
