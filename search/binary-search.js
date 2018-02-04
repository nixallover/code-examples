// example from https://www.interviewcake.com/concept/python/binary-search

console.log('binary search example');

function search(target, nums){
	let targetIndex;
	let floorIndex = -1;
	let ceilingIndex = nums.length;

	while (floorIndex+1 < ceilingIndex && targetIndex === undefined) {
		distance = ceilingIndex - floorIndex;
		halfDistance = Math.floor(distance/2);
		guessIndex = floorIndex + halfDistance;

		guessValue = nums[guessIndex];

		if (guessValue === target) {
			console.log('found it!');
			targetIndex = guessIndex;

		} else if (guessValue > target) {
			// target is to the left, so lower the ceiling
			console.log('lowering ceiling');
			ceilingIndex = guessIndex;

		} else {
			// target is to the right, so raise the floor
			console.log('raising floor');
			floorIndex = guessIndex;
		}
	}

	return targetIndex;
}

var myNums = [-7,-4,-3,-1,0,2,4,7,8,9,10];

console.log(search(9, myNums));