const {getRandomArray} = require("./utility");

const countingSort = (arr) => {
    let sortedArray = arr.slice();
    let max = arr[0];
    for (let i = 0; i < sortedArray.length; ++i){
        max = Math.max(max, sortedArray[i]);
    }

    let countingArray = [];
    for (let i = 0; i <= max; ++i) countingArray.push(0);

    for (let i = 0; i < sortedArray.length; ++i) {
        countingArray[sortedArray[i]]++;
    }

    let innerIndex = 0;
    for (let i = 0; i < countingArray.length; ++i) {
        while (countingArray[i]) {
            sortedArray[innerIndex] = i;
            countingArray[i]--;
            innerIndex++;
        }
    }
    return sortedArray;
};

let test = getRandomArray(15);
console.log(test);
console.log(countingSort(test));