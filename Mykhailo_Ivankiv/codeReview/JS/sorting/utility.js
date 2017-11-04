const swap = (arr, i, j) => {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;

}


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const getRandomArray = (size, min=0, max=500) => {
    let array = [];

    for (let i = 0; i < size; ++i) {
        array.push(getRandomNumber(min, max));
    }
    return array;
}


module.exports = {
    getRandomNumber,
    getRandomArray,
    swap
};