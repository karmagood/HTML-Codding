
const {swap, getRandomArray, getRandomNumber} = require("./utility.js");

const merge  = (arr1, arr2) => {
    /*
    * Merges two given sorted arrays preserving sorted order
    * */
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    let resArr = new Array(arr1Len + arr2Len);
    arr1.push(Infinity); // to unify comparison part of algorithm
    arr2.push(Infinity);
    let i = 0, j = 0;

    while (i < arr1Len || j < arr2Len){
        if (arr1[i] < arr2[j])
            resArr[i + j] = arr1[i++];
        else resArr[i + j] = arr2[j++];
    }

    return resArr;
};

const mergeSort = (arr) => {
    if (arr.length > 2){
        let leftPart = arr.slice(0,arr.length/2);
        let rightPart = arr.slice( arr.length/2 );
        rightPart = mergeSort(rightPart);
        leftPart = mergeSort(leftPart);
        return merge(leftPart, rightPart);
    }
    if (arr.length === 2){
        return ( arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]] ); //shortcut to remove recursion level
    }
    else{
        return arr;
    }
};


console.log(merge([1,3,5], [2,4,6]));

let test_arr = getRandomArray(5);

console.log(test_arr);
console.log(mergeSort(test_arr))
