
const {checkArraySorting} = require("./utility.js");

const countNumberOfElements = (arr) => {

    let dictionary = [];

    for (let i = 0; i < arr.length; i++){
        if (dictionary[arr[i]] !== undefined)
            dictionary[arr[i]]++;
        else dictionary[arr[i]] = 1;
    }

    return dictionary;
    };


const countingSort = (arr) => {
    let elementsDictionary = countNumberOfElements(arr);

    let position = 0;
    let sortedArray = new Array(arr.length); // unnecessary step, but to avoid mutation
    for (key in elementsDictionary){
        for (let j = 0; j < elementsDictionary[key]; j++){
            sortedArray[position++] = parseInt(key);
        }
    }
    return sortedArray;
};


console.log(countNumberOfElements([3, 1, 2, 3, 1, 1, 2]));
console.log(countingSort([3, 1, 2, 3, 1, 1, 2]));
checkArraySorting(iterations = 1000, testSizeFrom = 3, testSizeTo = 300, testElemSizeFrom = 0, testElemSizeTo = 5, sortingFunction = countingSort);
