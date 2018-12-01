/** QUICKSORT
 * Sorts an array by picking a pivot and moving a left
 * and right pointer progressively towards the center of the array,
 * swapping numbers to the higher or lower end, depending on
 * their value. Once the center is reached, the array will be 
 * partitioned, and the process is repeated on the 2 sub-arrays.
 * Continues recursively until the array is sorted.
 * 
 * Time complexity: best case - 0(n * log(n)), worst case 0(n^2)
 * Depends on how good the pivot is - a value that's roughly in the
 * middle is best.
 * 
 * Adapted from https://www.youtube.com/watch?v=SLauY6PpjW4
 */

function swap(arr, left, right) {
  console.log(`swap ${left} and ${right}`);
  let tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
}

function partition(arr, pivotValue, left, right) {
  console.log('partition: ', arr, pivotValue, `I left: ${left}, right: ${right}`);

  // while we're still moving the pivots inward
  while (left <= right) {
    // if the left element is on the correct side of the pivot, move further left
    while (arr[left] < pivotValue) {
      left++;
    }

    // if the right element is on the correct side of the pivot, move further right
    while (arr[right] > pivotValue) {
      right--;
    }

    // when it's made it to this point, the elements in focus are on
    // the wrong side, and must be swapped
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  //console.log('partition end: ', arr, `I left: ${left}, right: ${right}`);

  // return the partition point
  return left;
}

function _quickSort(arr, left, right) {
  console.log('quickSort: ', arr, `I left: ${left}, right: ${right}`);
  let middle, pivotValue, index;

  // base case - indices should not cross each other!
  if (left >= right) {
    return;
  }

  middle = Math.floor((left + right)/2);
  // find the value of the middle of piece of the array we're evaluating
  pivotValue = arr[middle];
  index = partition(arr, pivotValue, left, right);

  _quickSort(arr, left, index-1);
  _quickSort(arr, index, right);

  return arr;
}

function quickSort(arr) {
  return _quickSort(numbers, 0, numbers.length-1);
}

/** test it out! */
const numbers = [700, 50, 100, 632, 4, 103, 804, 502, 1, 378, 6, 104, 505];

console.log('QUICKSORT START:', numbers);
const sortedNumbers = quickSort(numbers);
console.log('QUICKSORT END:', sortedNumbers);