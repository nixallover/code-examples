/**
 * KNUTH SHUFFLE
 * Pseudo-randomized shuffle
 * https://github.com/Daplie/knuth-shuffle/blob/master/index.js
 */

function swap(array, index1, index2) {
  temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function shuffle(array) {
  let currentIndex = array.length;
  let temp;
  let randomIndex;

  // while there's remaining elements to shuffle
  while (currentIndex !== 0) {

    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // swap with the current element
    swap(array, currentIndex, randomIndex);
  }

  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Shuffle! ', shuffle(numbers));