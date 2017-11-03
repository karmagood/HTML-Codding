const {getRandomArray} = require("./utility");
const {inc, compose, defaultTo} = require("ramda");

const incrementArrayByIndex = (arr, index) => {
    arr[index] = compose (inc, defaultTo(0))   (arr[index]) ;
    return arr;
};

const extractArray = (accum, el, index) => { //TODO: rename function;
    accum = el > 0 ? accum.concat( new Array( el ).fill(index)) : accum;
    return accum;
};

const countingSort = (arr) => arr
    .reduce( incrementArrayByIndex, [])
    .reduce ( extractArray, []);

let q = getRandomArray(10, 0, 4);

console.log(q);
console.log(countingSort(q));;
