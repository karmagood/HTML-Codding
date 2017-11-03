const {swap, getRandomArray, getRandomNumber} = require("./utility");


const merge = (left, right) => {
    var sortedArray = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;

}


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    var m = Math.floor(arr.length / 2);

    var left = arr.slice(0, m);
    var right = arr.slice(m, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}


var q = getRandomArray(10);
console.log(q);
console.log(mergeSort(q));