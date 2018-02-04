/** bubble sort is inefficient and not generally useful **/

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
  return arr;
}

function bubbleSort(arr) {
  let isSorted = false;

  /** start with the item before the end of the array, since we compare it with
  the item after it */
  let lastUnsorted = arr.length - 1;

  while (!isSorted) {

    /** before each loop we presume its sorted until confirming otherwise */
    isSorted = true;
    for (var i = 0; i < lastUnsorted; i++) {
      console.log(arr[i], arr[i+1], 'need to swap?', arr[i] > arr[i+1]);

      /** if it's larger, swap it, and confirm our work is not done! */
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i, i+1);
        isSorted = false;
      }
    }

    /** since the end of the array is sorted, we don't need to loop over
    that part each time - we can cut it out */
    lastUnsorted--;
  }
}

let arr1 = [1314,343,24,2,5,1,100,1313];

console.log('start', arr1);
bubbleSort(arr1);
console.log('done', arr1);
