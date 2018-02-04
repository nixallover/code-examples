console.log('Array practice');

var daysOfWeek = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday'];
console.log(daysOfWeek);


// add another element to the end of the array
daysOfWeek[daysOfWeek.length] = 'Saturday';
daysOfWeek[daysOfWeek.length] = 'Sunday';
// ..and with push
//daysOfWeek.push('Saturday', 'Sunday');
console.log('PUSH: ', daysOfWeek);


// add another element to the beginning of the array
for(var i=daysOfWeek.length; i>=0; i--){
  daysOfWeek[i] = daysOfWeek[i-1];
}
daysOfWeek[0] = 'Fakeday';
//.. and with unshift
//daysOfWeek.unshift('Fakeday');
console.log('UNSHIFT: ', daysOfWeek);



var numsA = [1,2,3];
var numsB = [4,5,6];

var numsAB = numsA.concat(numsB);
console.log('CONCAT: ', numsAB);

function isEven(num){
  return num % 2 === 0;
}

function isNumber(value){
  return typeof(value) === 'number';
}

function timesTwo(value){
  return value * 2;
}

console.log('EVERY (false): ', numsAB.every(isEven));
console.log('EVERY (true): ', numsAB.every(isNumber));


console.log('FILTER: ', numsAB.filter(isEven));

console.log('map: ', numsAB.map(timesTwo));
