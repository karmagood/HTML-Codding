const {randomArray} = require("./export_functions");

const mergeSort = (array) => {
    if(array.length < 2) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    return mergeTopDown(mergeSort(array.slice(0, middle)), mergeSort(array.slice(middle)))
};

const mergeTopDown = (left, right) => {
    let array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice()).concat(right.slice());
};

let array = randomArray(20, 40);
console.log(mergeSort(array));

