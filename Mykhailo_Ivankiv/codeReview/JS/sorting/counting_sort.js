const {swap, getRandomArray, getRandomNumber} = require("./utility");


const countingSort = (arr) => {
    var sortedArray = arr.slice();
    var mx = arr[0];
    for (let i = 0; i < sortedArray.length; ++i) mx = Math.max(mx, sortedArray[i]);

    var countingArray = [];
    for (let i = 0; i <= mx; ++i) countingArray.push(0);


    for (let i = 0; i < sortedArray.length; ++i) countingArray[sortedArray[i]]++;

    var innerIndex = 0;
    for (let i = 0; i < countingArray.length; ++i) {
        while (countingArray[i]) {
            sortedArray[innerIndex] = i;
            countingArray[i]--;
            innerIndex++;
        }

    }
    return sortedArray;

}


var q = getRandomArray(5);
console.log(q);
console.log(countingSort(q));
