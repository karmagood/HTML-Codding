
const {swap, getRandomArray, getRandomNumber} = require("./utility.js");

const bubbleSort = (arr) => {
    /*
    * bubble sort with improved termination after no inversions has left
    * */
    let inversionFound = false;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i ; j++){
            if (arr[j] > arr[j+1]) {
                swap(arr, j,j+1);
                inversionFound = true;
            }
        }
        if (!inversionFound)
            break;
        inversionFound = false;
        // console.log(arr);
    }
    return arr;
};

let test_arr = getRandomArray(10);

console.log(test_arr);
console.log( bubbleSort(test_arr) );

// bubbleSort([10,3,2,5]);