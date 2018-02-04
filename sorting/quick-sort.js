// quicksort is a pretty efficient sorting algorithm
// time complexity - average 0(nlogn), worst 0(n^2)
// really depends on choosing a good pivot

// quickSort(arr, 0, arr.length-1);

function quickSort(arr) {
  return _quickSort(arr, 0, arr.length-1);
}

function _quickSort(arr, left, right) {
  if (left >= right) { return; }
  // choose halfway point
  let halfway = Math.floor((left + right) / 2);
  let pivot = arr[halfway];
  // returns dividing point between left and right side?
  let index = partition(arr, left, right, pivot);

  console.log('quicksort', arr, left, right, pivot, index);

  quickSort(arr, left, index-1);
  quickSort(arr, index, right);
}

function partition(arr, left, right, pivot) {
  //console.log('partition', arr, left, right, pivot);
  while (left <= right) {
    /** while left is less than pivot, keep moving left */
    while (arr[left] < pivot) {
      left++;
    }
    /** do the opposite on the right side */
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      arr = swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, left, right){
  let tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
  return arr;
}

let arr1 = [1314,343,24,2,5,1,100,1313];

console.log('start', arr1);
quickSort(arr1);
console.log('done', arr1);
