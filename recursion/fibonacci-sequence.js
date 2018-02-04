// example from https://www.interviewcake.com/concept/python/overlapping-subproblems

console.log('fibonacci sequence examples');

// generic algorithm
// fib(n) = fib(n-1) + fib(n-2);

// alex's version
function fibonacci_v1(num){
    var fib1 = 0, fib2 = 1, next, i = 0;
    while(i < num)
    {
        next = fib1 + fib2;
        fib1 = fib2;
        fib2 = next;
        i++;
    }

    return next;
}
console.log( `v1: ${fibonacci_v1(6)}` );


// from https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e#.42gzcy4d6
// basic version - o(n) time complexity, constant space complexity
function fibonacci_v2(num){
    var a = 1, b = 0, temp;

    while(num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
console.log( `v2: ${fibonacci_v2(6)}` );


// recursive - increased time complexity! o(2^n), space complexity o(n)
function fibonacci_v3(num){
    if(num <= 1) return 1;

    return fibonacci_v3(num-1) + fibonacci_v3(num-2);
}
console.log( `v3: ${fibonacci_v3(6)}` );


// memoization - time complexity o(n), space complexity 0(n)
function fibonacci_v4(num, memo){
    var memo = memo || {};
    if(memo[num]) return memo[num];
    if(num <= 1) return 1;

    return memo[num] = fibonacci_v4(num-1, memo) + fibonacci_v4(num-2, memo);
}
console.log( `v4: ${fibonacci_v4(6)}` );