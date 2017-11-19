const {swap, randomArray} = require("./export_functions");

const selectionSort = (array) => {

    for(let i = 0; i < array.length; i++) {
        let min = i;

        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }

        if(i !== min) {
            swap(array, i, min);
        }
    }
    return array;
};

console.log(selectionSort(randomArray(20, 40)));