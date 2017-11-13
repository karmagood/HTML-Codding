const {swap, getRandomArray} = require("./utility");

const selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min){
            swap(arr, i, min);
        }
    }
    return arr;
};

let test = getRandomArray(15);
console.log(test);
console.log(selectionSort(test));