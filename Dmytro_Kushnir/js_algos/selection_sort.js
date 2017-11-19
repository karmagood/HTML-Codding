
const {swap, getRandomArray, getRandomNumber} = require("./utility.js");

/*
*
 *  */

const findMinimumIndexBetween = (l, r, arr) => {
  let i = l;
  let min = Infinity;
  let minIndx = -1;
  while ( i < r){
      if (arr[i] < min) {
          min = arr[i];
          minIndx = i;
      }
      i++;
  }
  return minIndx;
};


const selectionSort = (arr) => {
  let i = 0;
  let minIndex;
  while (i < arr.length - 1){
      minIndex = findMinimumIndexBetween(i, arr.length, arr);
      if (arr[i] !== arr[minIndex])
          swap(arr, i, minIndex);
      i++;
  }
  return arr;
};


let test_arr = getRandomArray(10);

console.log(test_arr);
console.log(selectionSort(test_arr));
