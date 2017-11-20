const {swap, randomArray} = require("./export_functions");


const quickSort = (array) => {
    RecursionCalling(array, 0, array.length - 1);
    return array;
};

const RecursionCalling = (array, start, end) => {
    if (start < end ) {
    let pivot = partition(array, start, end);
    RecursionCalling(array, start, pivot - 1);
    RecursionCalling(array, pivot + 1, end);
    }
};

const partition = (array, start, end) => {
    let x = array[end];
    let i = start - 1;

    for(let j = start; j < end; j++) {
        if (array[j] <= x) {
            i += 1;
            swap(array, i, j);
        }
    }
    swap(array, i +1, end);
    return i + 1
};

console.log(quickSort(randomArray(20, 40)));