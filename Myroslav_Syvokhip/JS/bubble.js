const {swap, getRandomArray} = require("./utility");

const bubbleSort = (arr) => {
    let sorted = arr.slice();
    for (let i=0; i<sorted.length - 1; i+=1){
        for (let j=0; j<sorted.length-i-1; j+=1){
            const first = sorted[j];
            const second = sorted[j + 1];
            if (first > second){
                sorted = swap (sorted, j, j + 1);
            }
        }
    }

    return sorted;
};

let test = getRandomArray(15);
console.log(test);
console.log(bubbleSort(test));