const {swap, getRandomArray, getRandomNumber} = require("./utility");


const selectionSort = (arr) => {
    var sortedArray = arr.slice();
    for (let i = 0; i < sortedArray.length; ++i) {
        var min = sortedArray[i];
        var index_min = i;
        for (let j = i + 1; j < sortedArray.length; ++j) {
            if (min > sortedArray[j]) {
                min = sortedArray[j];
                index_min = j;
            }
        }
        swap(sortedArray, index_min, i);
    }
    return sortedArray;

}


var q = getRandomArray(5);
console.log(q);
console.log(selectionSort(q));