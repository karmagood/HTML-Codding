const {swap, getRandomArray, getRandomNumber} = require("./utility");


const quickSort = (arr) => {
    innerQuickSort(arr, 0, arr.length - 1);
    return arr
}


const innerQuickSort = (arr, startIndex, endIndex) => {
    if (endIndex > startIndex) {
        var mid = partition(arr, startIndex, endIndex);
        innerQuickSort(arr, startIndex, mid - 1);
        innerQuickSort(arr, mid + 1, endIndex);
    }
}


const partition = (arr, startIndex, endIndex) => {
    var pivot = arr[endIndex];
    let i = startIndex - 1;
    for (let j = startIndex; j < endIndex; ++j) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    if (arr[endIndex] < arr[i + 1]) {
        swap(arr, i + 1, endIndex);
    }
    return i + 1
}


var q = getRandomArray(10);
console.log(q);
console.log(quickSort(q));
// console.log(q);