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
}

const quickSort = (arr,low,high) =>{
    let index;
    if (arr.length > 1) {
        index = partition(arr, low, high);
        if (low < index - 1) {
            quickSort(arr, low, index - 1);
        }
        if (index < high) {
            quickSort(arr, index, high);
        }
    }
    return arr;
}

let arr = getRandomArray(10);
console.log(arr);
quickSort(arr,0,arr.length -1);
console.log("Quick sort ",arr);