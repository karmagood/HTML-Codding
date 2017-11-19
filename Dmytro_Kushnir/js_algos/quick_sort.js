
const {swap, getRandomArray, getRandomNumber} = require("./utility.js");



const quickSort = (arr, l , r) =>{
    /*
    * sorts using 1 pivot method of sorting in same memory.
     *  */

    if (l >= r)
        return;
    if (l === r-1){ // last recursion level shortcut
        if (arr[l] > arr[r]) swap(arr, l, r);
        return;
    }
    let pivot = arr[l];
    let newPivotPosition = l; // track positon on which pivot could be placed

    for (let i = l+1; i < r; i++){
        if (arr[i] < pivot) {
            if (arr[i] < arr[newPivotPosition+1] && i !== newPivotPosition + 1)
                swap(arr, newPivotPosition + 1, i);
            newPivotPosition++;
        }
    }

    if (arr[l] > arr[newPivotPosition] ) swap(arr, l, newPivotPosition); // place pivot on its new place
    quickSort(arr, l , newPivotPosition);
    quickSort(arr, newPivotPosition+1, r);
};

let test_arr = getRandomArray(5);

console.log(test_arr);
quickSort(test_arr, 0, test_arr.length);
console.log(test_arr); // array is mutated