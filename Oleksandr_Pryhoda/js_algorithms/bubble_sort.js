const {swap, randomArray} = require("./export_functions");

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length; j++)
            if(array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
    return array;
};

console.log(bubbleSort(randomArray(20, 40)));
