const {generateRandomArray} = require("./randomArray");

let arr = generateRandomArray(20);

function insertionSort(array) {
    let i = 1;
    while (i < array.length) {
        let x = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > x) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = x;
        i++;
    }
    return array;
}

console.log("unsorted: ", arr);
let k = insertionSort(arr);
console.log("sorted: ", k);