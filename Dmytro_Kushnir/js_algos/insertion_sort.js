
const {swap, getRandomArray, getRandomNumber} = require("./utility.js");

/*
*
 *  */


const insertionSort = (arr) => {

    let sortedPartBorder = 0;
    let nextElementIndex;

    while (sortedPartBorder < arr.length){

        nextElementIndex = sortedPartBorder + 1;

        while (nextElementIndex > 0 &&
        arr[nextElementIndex] < arr[nextElementIndex - 1]){
            swap(arr, nextElementIndex, nextElementIndex-1);
            nextElementIndex --;
        }
        sortedPartBorder++;
    }

    return arr;
};


let test_arr = getRandomArray(5);

console.log(test_arr);
console.log(insertionSort(test_arr));
