const {swap, getRandomArray, getRandomNumber} = require("./utility");


const insertionSort = (arr) => {
    var sortedArray = arr.slice();
    for (let i = 1; i < sortedArray.length; ++i) {
        let ii = i;
        let j = ii - 1;
        while (j >= 0 && sortedArray[j] > sortedArray[ii]) {
            swap(sortedArray, ii, j);
            j--;
            ii--;
        }

    }
    return sortedArray;
}

var q = getRandomArray(5);
console.log(q);
console.log(insertionSort(q));