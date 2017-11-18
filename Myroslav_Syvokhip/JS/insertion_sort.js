const {swap, getRandomArray} = require("./utility");

const insertionSort = (arr) => {
    let sorted = arr.slice();
    for (let i = 1; i < sorted.length; i++) {
        //let el = arr[i];
        let j = i;

        while(j >= 0 && sorted[j - 1] > sorted[j]){
            swap(sorted, j, j - 1);
            j--;
        }
    }
    return sorted;
};

let test = getRandomArray(15);
console.log(test);
console.log(insertionSort(test));