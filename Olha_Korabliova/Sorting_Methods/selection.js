const {generateRandomArray} = require("./randomArray");

let arr = generateRandomArray(20);

function selectionSort(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minimum = array[i];
        for (let j = i; j < n; j++) {
            if (array[j] < minimum) {
                minimum = array[j];
                array[j] = array[i];
                array[i] = minimum;
            }
        }
    }
    return array;
}

console.log("unsorted: ", arr);
let k = selectionSort(arr);
console.log("sorted: ", k);