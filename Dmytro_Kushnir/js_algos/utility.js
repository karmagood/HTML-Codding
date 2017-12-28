const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
};


const checkArraySorting = (iterations, testSizeFrom = 3, testSizeTo = 500, testElemSizeFrom = 0, testElemSizeTo = 500,  sortingFunction ) => {
    let i = 0, isSorted = true;
    let original_array_holder;
    while (i++ < iterations && isSorted){
        test_arr = getRandomArray(getRandomNumber(testSizeFrom,testSizeTo));
        original_array_holder = test_arr.slice();
        test_arr = sortingFunction(test_arr); //quickSort(test_arr, 0, test_arr.length);
        isSorted = isArraySorted(test_arr);
        // console.log(i)
    }
    if (!isSorted){
        console.log("sorting FAIL");
        console.log(original_array_holder);
        console.log(test_arr);
    }
    else
        console.log("sorting OK");
    console.log( i-1 + " iterations done. " + "Test_size from " + testSizeFrom + " to " + testSizeTo + " test elements values from " + testSizeFrom + " to " + testSizeTo);
};

const isArraySorted = (arr) => {
    let isSorted = true;

    for (let i = 0; arr && i < arr.length-1 && isSorted; i++){
        if (arr[i] > arr[i+1])
            isSorted = false;
    }
    return isSorted;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomArray = (size, arrayElemSizeFrom = 0, arrayElemSizeTo = 500) => {
    let array = [];

    for (let i = 0; i < size; ++i) {
        array.push(getRandomNumber(arrayElemSizeFrom, arrayElemSizeTo));
    }
    return array;
};

const numberOfSimpleDivisors = (arg) => {
    let acc = 0;
    let divisor = 2;
    while (arg > 1){
        if (arg % divisor === 0) {
            arg = arg / divisor;
            acc++;
        }
        else{
            divisor++;
        }
    }
    return acc + 1; //because of divisor "1" is not natural number and we have to exclude it from algorithm
};


const lengthesOfConsecutiveSerieses = (sortedValuesList) => {
    let ammountsOfDifferentValuesList = [];
    let thisValuesAmount = 1;
    let previousValue;
    for (let el = 0; el < sortedValuesList.length; el ++){
        if (sortedValuesList[el] === previousValue) thisValuesAmount++;
        else{
            if (previousValue !== undefined) ammountsOfDifferentValuesList.push(thisValuesAmount);
            thisValuesAmount = 1;
            previousValue = sortedValuesList[el];
        }
    }
    ammountsOfDifferentValuesList.push(thisValuesAmount); //last element is out of cycle
    return ammountsOfDifferentValuesList;
};


module.exports = {
    getRandomNumber,
    getRandomArray,
    swap,
    isArraySorted,
    numberOfSimpleDivisors, checkArraySorting, lengthesOfConsecutiveSerieses
};