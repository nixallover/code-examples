console.log('for loop optimizations');

var myArray = ['whale', 'tiger', 'monkey'];


console.log('standard');
function standardLooper() {
	for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
	}
}
standardLooper();


console.log('better');
// use single var pattern
// assign array length to a var so it's not calculated every loop
function looper() {
	var i = 0, max;

	for (i = 0, max = myArray.length; i < max; i++) {
		console.log(myArray[i]);
	}
}
looper();


console.log('even better');
// count down to 0 b/c it's more efficient to compare 0
// replace i-- with i-=1 (JSLint encourages this because it promotes 'excessive trickiness'?)
// don't forget the extra ;
function superLooper() {
	var i;

	for (i = myArray.length; i-=1;) {
		console.log(myArray[i]);
	}
}
superLooper();


console.log('with a while loop');
// count down to 0 b/c it's more efficient to compare 0
// replace i-- with i-=1 (JSLint encourages this because it promotes 'excessive trickiness'?)
// don't forget the extra ;
function superLooperWhile() {
	var i = myArray.length;

	while (i--) {
		console.log(myArray[i]);
	}
}
superLooperWhile();

