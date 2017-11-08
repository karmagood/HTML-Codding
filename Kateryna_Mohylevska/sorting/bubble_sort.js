const {swap, getRandomArray} = require("./utility");

const bubbleSort = (arr) =>{
    const sorted = arr.slice();
    for(let i=0; i<sorted.length-1; i++){
        for(let j=0; j<sorted.length-i-1; j++){
            const first = sorted[j];
            const second = sorted[j+1];
            if(first > second){
                swap(sorted,j,j+1)
            }
        }
    }
    return sorted;
}

let arr = getRandomArray(10);
console.log(arr);
console.log("Bubble sort ",bubbleSort(arr));
