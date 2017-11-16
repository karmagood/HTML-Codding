const swap = (arr, i, j) => {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;

}


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomArray = (size) => {
    let array = [];

    for (let i = 0; i < size; ++i) {
        array.push(getRandomNumber(0, 500));
    }
    return array;
}


module.exports = {
    getRandomNumber,
    getRandomArray,
    swap
};