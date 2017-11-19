const {generateRandomArray} = require("./randomArray");

let arr = generateRandomArray(20);

function bubbleSort(array) {
    let n = array.length;
    while (n > 0) {
        let i = 0;
        for (let j = 1; j < n; j++){
            if (array[j - 1] > array[j]) {
                let tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
                i = j;
            }
        }
        n = i;
    }
    return array;
}

console.log("unsorted: ", arr);
let k = bubbleSort(arr);
console.log("sorted: ", k);