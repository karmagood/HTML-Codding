
const {swap, getRandomArray, getRandomNumber, isArraySorted, checkArraySorting} = require("./utility.js");


const quickSort = (test_arr) => {
    return quickSortAlgo(test_arr, 0, test_arr.length);
};


const quickSortAlgo = (arr, l , r) =>{
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
    quickSortAlgo(arr, l , newPivotPosition);
    quickSortAlgo(arr, newPivotPosition+1, r);
    return arr;
};

let test_arr = getRandomArray(5);


console.log(test_arr);
quickSortAlgo(test_arr, 0, test_arr.length);
console.log(test_arr); // array is mutated

checkArraySorting(iterations = 1000, testSizeFrom = 3, testSizeTo = 300, sortingFunction = quickSort);
