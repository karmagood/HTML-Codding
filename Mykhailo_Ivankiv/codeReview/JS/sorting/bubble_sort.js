const {swap, getRandomArray, getRandomNumber} = require("./utility");


const bubbleSort = (arr) => {
    var sortedArray = arr.slice();
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < sortedArray.length; ++i) {
            if (i < sortedArray.length - 1) {
                if (sortedArray[i] > sortedArray[i + 1]) {
                    swapped = true;
                    sortedArray = swap(arr, i, i + 1);

                }
            }
        }
    }
    return sortedArray;


}

var q = getRandomArray(10000);
console.time("Sorting");
bubbleSort(q);
console.timeEnd("Sorting")