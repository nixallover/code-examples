/**
 * MERGE SORT
 * https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
 * Time complexity: O(n*log(n))
 */

function mergeSort(arr) {
  console.log('mergeSort: ', arr);

  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  console.log('merge: ', left, right);

  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

/** test it out! */
const numbers = [700, 50, 100, 632, 4, 103, 804, 502, 1, 378];

console.log('BEFORE:', numbers);
const sortedNumbers = mergeSort(numbers);
console.log('AFTER:', sortedNumbers);
