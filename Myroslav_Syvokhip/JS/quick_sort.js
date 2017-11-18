const {swap, getRandomArray} = require("./utility");

const partition = (arr, low, high) =>{
    let pivot = arr[Math.floor((high + low) / 2)],
        i = low,
        j= high;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const quickSort = (arr) => {
    innerQS(arr, 0, arr.length - 1);
    return arr;
};

const innerQS = (arr, low, high) => {
    if (high > low) {
        let mid = partition(arr, low, high);
        innerQS(arr, low, mid - 1);
        innerQS(arr, mid + 1, high);
    }
};


let test = getRandomArray(15);
console.log(test);
console.log(quickSort(test));