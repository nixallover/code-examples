/**
 * QUICKSORT IMPLEMENTATION
 * helper f()s
 *  swap
 *  partition
 * 
 * time complexity
 * best - o(nlogn), worst 0(n^2) (depends on finding a good pivot)
 */

function swap(arr, low, high) {
    let tmp = arr[low];
    arr[low] = arr[high];
    arr[high] = tmp;
}

function partition(arr, low, high) {
    // we'll set the pivot for half of the sum of the high and low indices
    // 
    const pivotIndex = Math.floor(low + high / 2);
    const pivot = arr[pivotIndex]; // pivot value

    // while the 2 swap points haven't met yet
    while (low <= high) {

        // while the low value is less than the pivot value, move in
        while (arr[low] < pivot) {
            low++;
        }

        // while the high value is greater than the pivot value, move in
        while (arr[high] > pivot) {
            high--;
        }

        // if low is less than/equal to high, swap them, then move both in
        if (low <= high) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }

    return low;
}

function quickSort(arr, low, high) {
    const index = partition(arrayToSort, low, high);

    // low lt index
    if (low < index-1) {
        quickSort(arrayToSort, low, index-1);
    }

    // index lt high
    if (index < high) {
        quickSort(arr, index, high);
    }
}