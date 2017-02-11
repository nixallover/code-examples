console.log('for-in loops aka enumeration');

var man = {
	hands: 2,
	legs: 2,
	heads: 1
};

// example method added to all object
if (typeof Object.prototype.clone === 'undefined') {
	Object.prototype.clone = function(){};
}

// make sure to filter out prototype augmentations
console.log('Right way');
for (var i in man) {
	if (man.hasOwnProperty(i)) {
		console.log(i, ":", man[i]);
	}
}

// if you don't filter, you will probably get undesired properties
console.log('Wrong way');
for (var i in man) {
	console.log(i, ":", man[i]);
}