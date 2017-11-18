const swap = (arr, i, j) => {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;

};


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomArray = (size) => {
    let array = [];

    for (let i = 0; i < size; ++i) {
        array.push(getRandomNumber(0, 500));
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


module.exports = {
    getRandomNumber,
    getRandomArray,
    swap
};