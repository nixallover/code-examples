/**
 * AUTOMATIC MEMOIZATION
 * From: https://www.sitepoint.com/implementing-memoization-in-javascript/
 * Generally most functional programming libs will have something like this
 * 
 * This is a utility f() that takes a f() as an argument and applies
 * memoization to it, then returns a new f() that wraps a caching mechanism around it
 * 
 * Biggest limitation: can only be automated with f()s that are referentially
 * transparent (pure)
 */

console.log('automatic memoization');

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));
  }
}