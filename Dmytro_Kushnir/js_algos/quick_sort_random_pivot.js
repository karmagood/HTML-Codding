
const {swap, getRandomArray, getRandomNumber, isArraySorted, checkArraySorting} = require("./utility.js");


const quickSort = (test_arr) => {
    return quickSortAlgoRandomPivot(test_arr, 0, test_arr.length);
};


const quickSortAlgoRandomPivot = (arr, l , r) =>{
    /*
    * sorts using 1 pivot method of sorting in same memory.
     *  */

    if (l >= r)
        return;
    if (l === r-1){ // last recursion level shortcut
        if (arr[l] > arr[r]) swap(arr, l, r);
        return;
    }

    //random pivot modification=====================
    const pivot_index = getRandomNumber(l, r-1);
    const pivot = arr[pivot_index];
    swap(arr, l , pivot_index);
    //random pivot modification======================

    let newPivotPosition = l; // track positon on which pivot could be placed

    for (let i = l+1; i < r; i++){
        if (arr[i] < pivot) {
            if (arr[i] < arr[newPivotPosition+1] && i !== newPivotPosition + 1)
                swap(arr, newPivotPosition + 1, i);
            newPivotPosition++;
        }
    }

    if (arr[l] > arr[newPivotPosition] ) swap(arr, l, newPivotPosition); // place pivot on its new place
    quickSortAlgoRandomPivot(arr, l , newPivotPosition);
    quickSortAlgoRandomPivot(arr, newPivotPosition+1, r);
    return arr;
};

let test_arr = getRandomArray(5);


console.log(test_arr);
quickSortAlgoRandomPivot(test_arr, 0, test_arr.length);
console.log(test_arr); // array is mutated

checkArraySorting(iterations = 1000, testSizeFrom = 1, testSizeTo = 500, sortingFunction = quickSort);
