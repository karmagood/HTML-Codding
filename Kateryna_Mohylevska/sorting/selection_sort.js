const {swap, getRandomArray} = require("./utility");

const selectionSort = (arr) =>{
    for(let min = 0; min < arr.length-1; min++){
        let least = min;
        for(let i = min+1; i < arr.length; i++){
            if(arr[i] < arr[least]){
                least = i;
            }
        }
        let tmp = arr[min];
        arr[min] = arr[least];
        arr[least] = tmp;
    }
    return arr;
}

let arr = getRandomArray(10);
console.log(arr);

console.log("Selection sort ",selectionSort(arr));