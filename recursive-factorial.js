var factorial = function(number){
    if (number <=0) {
        return 1;
    } else {
        return (number * factorial(number-1));
    }
};
console.log(factorial(2));
console.log(factorial(4));