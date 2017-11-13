const {getRandomArray} = require("./utility");

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = arr.length / 2;
    let left   = arr.slice(0, mid);
    let right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let sortde = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortde.push(left[i]);
            i++;
        } else {
            sortde.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        sortde.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortde.push(right[j]);
        j++;
    }

    return sortde
};

let test = getRandomArray(15);
console.log(test);
console.log(mergeSort(test));