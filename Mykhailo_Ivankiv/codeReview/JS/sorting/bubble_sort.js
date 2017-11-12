const {swap, getRandomArray} = require("./utility");

const bubbleSort = (arr) => {
    let sortedArray = arr.slice();

    for (let j = 0; j < sortedArray.length - 1; j++) {
        let isSorted = true;
        for (let i = 0; i < sortedArray.length - 1 - j; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                isSorted = false;
                sortedArray = swap(arr, i, i + 1);
            }
        }
        if (isSorted) {
            return sortedArray
        }
    }
    return sortedArray;
};


let q = getRandomArray(10, 0, 4);
console.log(q);
console.log(bubbleSort(q));